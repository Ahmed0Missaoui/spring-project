"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { 
  Loader2,
  Search,
  ChevronDown,
  ArrowUpDown
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { CarCard } from "@/components/CarCard"
import { Voiture } from "@/types"
import { voitureApi } from "@/app/api/backendApi"
import { toast } from "@/hooks/use-toast"

export default function VoituresPage() {
  const [voitures, setVoitures] = useState<Voiture[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("marque")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc")
  
  useEffect(() => {
    const fetchVoitures = async () => {
      try {
        const data = await voitureApi.getAll()
        setVoitures(data)
      } catch (error) {
        console.error("Error fetching voitures:", error)
        toast({
          title: "Erreur",
          description: "Impossible de charger les voitures. Veuillez réessayer.",
          variant: "destructive",
        })
      } finally {
        setLoading(false)
      }
    }
    
    fetchVoitures()
  }, [])
  
  const filteredVoitures = voitures.filter(
    (voiture) =>
      voiture.marque.toLowerCase().includes(searchQuery.toLowerCase()) ||
      voiture.modele.toLowerCase().includes(searchQuery.toLowerCase())
  )
  
  const sortedVoitures = [...filteredVoitures].sort((a, b) => {
    if (sortBy === "prixParJour") {
      return sortOrder === "asc" 
        ? a.prixParJour - b.prixParJour 
        : b.prixParJour - a.prixParJour
    } else {
      const valueA = a[sortBy as keyof typeof a]
      const valueB = b[sortBy as keyof typeof b]
      
      if (typeof valueA === "string" && typeof valueB === "string") {
        return sortOrder === "asc"
          ? valueA.localeCompare(valueB)
          : valueB.localeCompare(valueA)
      }
      
      return 0
    }
  })
  
  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc")
  }
  
  return (
    <div className="container py-12">
      {/* Header Section */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Notre flotte de voitures</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Découvrez notre sélection de véhicules disponibles à la location et trouvez la voiture idéale pour votre prochain trajet.
        </p>
      </div>
      
      {/* Search, Filter, and Add Section */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_auto_auto] gap-4 mb-8">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Rechercher une marque, un modèle..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-full lg:w-auto">
              Trier par
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>Trier par</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup value={sortBy} onValueChange={setSortBy}>
              <DropdownMenuRadioItem value="marque">Marque</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="modele">Modèle</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="prixParJour">Prix</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        
        <Button variant="outline" onClick={toggleSortOrder} className="w-full lg:w-auto">
          {sortOrder === "asc" ? "Croissant" : "Décroissant"}
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
        <Button asChild variant="default" className="w-full lg:w-auto">
          <a href="/voitures/new">Ajouter une voiture</a>
        </Button>
      </div>
      
      {/* Cars Grid */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      ) : sortedVoitures.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedVoitures.map((voiture) => (
            <CarCard key={voiture.id} car={voiture} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium mb-2">Aucune voiture trouvée</h3>
          <p className="text-muted-foreground">
            Veuillez essayer d'autres critères de recherche.
          </p>
        </div>
      )}
    </div>
  )
}