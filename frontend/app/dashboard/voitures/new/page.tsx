"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"
import { voitureApi } from "@/app/api/backendApi"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Loader2 } from "lucide-react"

const formSchema = z.object({
  marque: z.string().min(2, {
    message: "La marque doit contenir au moins 2 caractères.",
  }),
  modele: z.string().min(2, {
    message: "Le modèle doit contenir au moins 2 caractères.",
  }),
  immatriculation: z.string().min(5, {
    message: "L'immatriculation doit contenir au moins 5 caractères.",
  }),
  prixParJour: z.coerce.number().positive({
    message: "Le prix par jour doit être un nombre positif.",
  }),
})

export default function NewVoiturePage() {
  const router = useRouter()
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      marque: "",
      modele: "",
      immatriculation: "",
      prixParJour: 0,
    },
  })
  
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true)
    
    try {
      await voitureApi.create(values)
      
      toast({
        title: "Voiture ajoutée",
        description: "La voiture a été ajoutée avec succès.",
      })
      
      router.push("/dashboard/voitures")
    } catch (error) {
      console.error("Error creating car:", error)
      
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'ajout de la voiture.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Ajouter une voiture</h1>
        <p className="text-muted-foreground">
          Ajoutez une nouvelle voiture à votre flotte
        </p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Détails de la voiture</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="marque"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Marque</FormLabel>
                      <FormControl>
                        <Input placeholder="Renault, Peugeot, etc." {...field} />
                      </FormControl>
                      <FormDescription>
                        Entrez la marque du véhicule.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="modele"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Modèle</FormLabel>
                      <FormControl>
                        <Input placeholder="Clio, 308, etc." {...field} />
                      </FormControl>
                      <FormDescription>
                        Entrez le modèle du véhicule.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="immatriculation"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Immatriculation</FormLabel>
                      <FormControl>
                        <Input placeholder="AB-123-CD" {...field} />
                      </FormControl>
                      <FormDescription>
                        Entrez le numéro d'immatriculation du véhicule.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="prixParJour"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Prix par jour (€)</FormLabel>
                      <FormControl>
                        <Input type="number" min="0" step="0.01" {...field} />
                      </FormControl>
                      <FormDescription>
                        Entrez le prix de location journalier.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <div className="flex justify-end gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => router.push("/dashboard/voitures")}
                >
                  Annuler
                </Button>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Ajouter la voiture
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}