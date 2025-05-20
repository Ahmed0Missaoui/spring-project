"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "@/hooks/use-toast"
import { voitureApi } from "@/app/api/backendApi"

export default function NewVoiturePage() {
  const router = useRouter()
  const [marque, setMarque] = useState("")
  const [modele, setModele] = useState("")
  const [immatriculation, setImmatriculation] = useState("")
  const [prixParJour, setPrixParJour] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await voitureApi.create({
        marque,
        modele,
        immatriculation,
        prixParJour: Number(prixParJour),
      })
      toast({ title: "Voiture ajoutée", description: "La voiture a été ajoutée avec succès." })
      router.push("/voitures")
    } catch (error) {
      toast({ title: "Erreur", description: "Erreur lors de l'ajout de la voiture.", variant: "destructive" })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container flex flex-col items-center justify-center min-h-screen">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Ajouter une voiture</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">Marque</label>
              <Input value={marque} onChange={e => setMarque(e.target.value)} required />
            </div>
            <div>
              <label className="block mb-1 font-medium">Modèle</label>
              <Input value={modele} onChange={e => setModele(e.target.value)} required />
            </div>
            <div>
              <label className="block mb-1 font-medium">Immatriculation</label>
              <Input value={immatriculation} onChange={e => setImmatriculation(e.target.value)} required />
            </div>
            <div>
              <label className="block mb-1 font-medium">Prix par jour (€)</label>
              <Input type="number" min="0" step="0.01" value={prixParJour} onChange={e => setPrixParJour(e.target.value)} required />
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Ajout..." : "Ajouter la voiture"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
