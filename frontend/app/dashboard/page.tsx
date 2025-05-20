import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CarFront, Users, CalendarRange, BadgeDollarSign } from "lucide-react"
import { AreaChart, BarChart } from "@/components/ui/chart"

export default function DashboardPage() {
  // Sample data - would come from API in a real app
  const reservationData = [
    { name: "Jan", total: 12 },
    { name: "Fév", total: 15 },
    { name: "Mar", total: 18 },
    { name: "Avr", total: 22 },
    { name: "Mai", total: 28 },
    { name: "Juin", total: 35 },
    { name: "Juil", total: 42 },
    { name: "Août", total: 45 },
    { name: "Sep", total: 38 },
    { name: "Oct", total: 30 },
    { name: "Nov", total: 25 },
    { name: "Déc", total: 20 },
  ]
  
  const revenueData = [
    { name: "Jan", total: 1200 },
    { name: "Fév", total: 1500 },
    { name: "Mar", total: 1800 },
    { name: "Avr", total: 2200 },
    { name: "Mai", total: 2800 },
    { name: "Juin", total: 3500 },
    { name: "Juil", total: 4200 },
    { name: "Août", total: 4500 },
    { name: "Sep", total: 3800 },
    { name: "Oct", total: 3000 },
    { name: "Nov", total: 2500 },
    { name: "Déc", total: 2000 },
  ]
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Tableau de bord</h1>
        <p className="text-muted-foreground">
          Vue d'ensemble de votre système de location de voitures
        </p>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Voitures Disponibles
            </CardTitle>
            <CarFront className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">
              +2 depuis le mois dernier
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Clients Actifs
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">145</div>
            <p className="text-xs text-muted-foreground">
              +12 depuis le mois dernier
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Réservations
            </CardTitle>
            <CalendarRange className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">38</div>
            <p className="text-xs text-muted-foreground">
              +8 depuis le mois dernier
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Revenu Mensuel
            </CardTitle>
            <BadgeDollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4 500 €</div>
            <p className="text-xs text-muted-foreground">
              +18% depuis le mois dernier
            </p>
          </CardContent>
        </Card>
      </div>
      
      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
          <TabsTrigger value="analytics">Analytiques</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Réservations</CardTitle>
                <CardDescription>
                  Nombre de réservations par mois
                </CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <AreaChart 
                  data={reservationData}
                  categories={["total"]}
                  index="name"
                  colors={["primary"]}
                  valueFormatter={(value: number) => `${value} réservations`}
                  className="h-[300px]"
                />
              </CardContent>
            </Card>
            
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Revenu</CardTitle>
                <CardDescription>
                  Revenu mensuel en euros
                </CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <BarChart 
                  data={revenueData}
                  categories={["total"]}
                  index="name"
                  colors={["primary"]}
                  valueFormatter={(value: number) => `${value} €`}
                  className="h-[300px]"
                />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="analytics" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Statistiques avancées</CardTitle>
                <CardDescription>
                  Analyses détaillées de l'activité
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Les statistiques avancées seront disponibles prochainement.
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}