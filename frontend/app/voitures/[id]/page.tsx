



"use client"
"use client"
import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import { 
  Calendar, 
  Clock, 
  Banknote,
  CircleAlert,
  ChevronRight,
  Loader2
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CalendarDateRangePicker } from "@/components/ui/date-range-picker"
import { Voiture } from "@/types"
import { voitureApi } from "@/app/api/backendApi"
import { formatCurrency } from "@/lib/formatters"
import { toast } from "@/hooks/use-toast"
import { DateRange } from "react-day-picker"
import { addDays, differenceInDays } from "date-fns"

export default function VoitureDetailPage() {
  const params = useParams()
  const router = useRouter()
  const id = Number(params.id)
  
  const [voiture, setVoiture] = useState<Voiture | null>(null)
  const [loading, setLoading] = useState(true)
  const [reservationOpen, setReservationOpen] = useState(false)
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 3),
  })
  
  useEffect(() => {
    const fetchVoiture = async () => {
      try {
        const data = await voitureApi.getById(id)
        setVoiture(data)
      } catch (error) {
        console.error("Error fetching voiture:", error)
        toast({
          title: "Erreur",
          description: "Impossible de charger les détails de la voiture. Veuillez réessayer.",
          variant: "destructive",
        })
        router.push("/voitures")
      } finally {
        setLoading(false)
      }
    }
    
    fetchVoiture()
  }, [id, router])
  
  const calculateTotalPrice = () => {
    if (!voiture || !date?.from || !date?.to) return 0
    
    const days = differenceInDays(date.to, date.from) + 1
    return voiture.prixParJour * days
  }
  
  const handleReservationSubmit = () => {
    // In a real application, this would send the reservation to the API
    toast({
      title: "Réservation effectuée",
      description: "Votre réservation a été enregistrée avec succès.",
    })
    setReservationOpen(false)
  }
  
  if (loading) {
    return (
      <div className="container flex justify-center items-center h-[70vh]">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }
  
  if (!voiture) {
    return (
      <div className="container py-12 text-center">
        <CircleAlert className="h-12 w-12 text-destructive mx-auto mb-4" />
        <h1 className="text-2xl font-bold mb-2">Voiture non trouvée</h1>
        <p className="text-muted-foreground mb-6">
          La voiture que vous recherchez n'existe pas ou a été supprimée.
        </p>
        <Button onClick={() => router.push("/voitures")}>
          Retour à la liste des voitures
        </Button>
      </div>
    )
  }
  
  return (
    <div className="container py-12">
      {/* Breadcrumb */}
      <div className="flex items-center gap-1 text-sm text-muted-foreground mb-6">
        <Button variant="link" className="p-0 h-auto" onClick={() => router.push("/voitures")}>
          Voitures
        </Button>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground">
          {voiture.marque} {voiture.modele}
        </span>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Car Image */}
        <div className="lg:col-span-2">
          <div className="relative h-80 sm:h-96 lg:h-[500px] w-full rounded-lg overflow-hidden">
            <Image
              src="https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt={`${voiture.marque} ${voiture.modele}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          
          {/* Car Details */}
          <div className="mt-8">
            <h1 className="text-3xl font-bold mb-4">
              {voiture.marque} {voiture.modele}
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <Card>
                <CardContent className="flex items-center gap-4 p-4">
                  <Banknote className="h-8 w-8 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Prix par jour</p>
                    <p className="text-lg font-semibold">{formatCurrency(voiture.prixParJour)}</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="flex items-center gap-4 p-4">
                  <Calendar className="h-8 w-8 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Disponibilité</p>
                    <p className="text-lg font-semibold">Immédiate</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="flex items-center gap-4 p-4">
                  <Clock className="h-8 w-8 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Immatriculation</p>
                    <p className="text-lg font-semibold">{voiture.immatriculation}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="prose max-w-none dark:prose-invert">
              <h2>Description</h2>
              <p>
                Le {voiture.marque} {voiture.modele} est un excellent choix pour vos déplacements. 
                Ce véhicule offre un mélange parfait de confort, de performance et d'économie de carburant.
              </p>
              
              <h2>Caractéristiques</h2>
              <ul>
                <li>Climatisation</li>
                <li>Radio Bluetooth</li>
                <li>GPS intégré</li>
                <li>5 places</li>
                <li>4 portes</li>
                <li>Coffre spacieux</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Reservation Card */}
        <div className="lg:col-span-1">
          <Card className="sticky top-20">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Réserver cette voiture</h2>
              
              <div className="space-y-4">
                <div>
                  <Label>Période de location</Label>
                  <CalendarDateRangePicker date={date} setDate={setDate} />
                </div>
                
                <div className="pt-4 border-t">
                  <div className="flex justify-between mb-2">
                    <span>Prix par jour</span>
                    <span>{formatCurrency(voiture.prixParJour)}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Nombre de jours</span>
                    <span>{date?.from && date?.to ? differenceInDays(date.to, date.from) + 1 : 0}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg pt-2 border-t">
                    <span>Total</span>
                    <span>{formatCurrency(calculateTotalPrice())}</span>
                  </div>
                </div>
                
                <Button className="w-full" size="lg" onClick={() => setReservationOpen(true)}>
                  Réserver maintenant
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  Annulation gratuite jusqu'à 48h avant la date de début
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Reservation Dialog */}
      <Dialog open={reservationOpen} onOpenChange={setReservationOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Finaliser votre réservation</DialogTitle>
            <DialogDescription>
              Veuillez remplir les informations ci-dessous pour compléter votre réservation.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">Prénom</Label>
                <Input id="firstName" placeholder="Entrez votre prénom" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Nom</Label>
                <Input id="lastName" placeholder="Entrez votre nom" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Entrez votre email" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">Téléphone</Label>
              <Input id="phone" placeholder="Entrez votre numéro de téléphone" />
            </div>
            
            <div className="border rounded-md p-4">
              <div className="flex justify-between mb-2">
                <span className="font-medium">{voiture.marque} {voiture.modele}</span>
                <span>{formatCurrency(voiture.prixParJour)}/jour</span>
              </div>
              <div className="flex justify-between mb-2 text-sm text-muted-foreground">
                <span>Du {date?.from?.toLocaleDateString()} au {date?.to?.toLocaleDateString()}</span>
                <span>{date?.from && date?.to ? differenceInDays(date.to, date.from) + 1 : 0} jours</span>
              </div>
              <div className="flex justify-between font-bold pt-2 border-t mt-2">
                <span>Total</span>
                <span>{formatCurrency(calculateTotalPrice())}</span>
              </div>
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setReservationOpen(false)}>
              Annuler
            </Button>
            <Button onClick={handleReservationSubmit}>
              Confirmer la réservation
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}