"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { 
  ArrowUpDown, 
  Plus, 
  Pencil, 
  Trash, 
  Search,
  Loader2
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DataTable } from "@/components/ui/data-table"
import { Voiture } from "@/types"
import { formatCurrency } from "@/lib/formatters"
import { voitureApi } from "@/app/api/backendApi"
import { toast } from "@/components/ui/toast"

export default function VoituresPage() {
  const [voitures, setVoitures] = useState<Voiture[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  
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
      voiture.modele.toLowerCase().includes(searchQuery.toLowerCase()) ||
      voiture.immatriculation.toLowerCase().includes(searchQuery.toLowerCase())
  )
  
  const columns = [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "marque",
      header: ({ column }: { column: any }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Marque
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
    },
    {
      accessorKey: "modele",
      header: "Modèle",
    },
    {
      accessorKey: "immatriculation",
      header: "Immatriculation",
    },
    {
      accessorKey: "prixParJour",
      header: ({ column }: { column: any }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Prix / Jour
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
      cell: ({ row }: { row: any }) => formatCurrency(row.getValue("prixParJour")),
    },
    {
      id: "actions",
      cell: ({ row }: { row: any }) => {
        const voiture = row.original
        
        return (
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild>
              <Link href={`/dashboard/voitures/${voiture.id}/edit`}>
                <Pencil className="h-4 w-4" />
                <span className="sr-only">Modifier</span>
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleDelete(voiture.id)}
            >
              <Trash className="h-4 w-4" />
              <span className="sr-only">Supprimer</span>
            </Button>
          </div>
        )
      },
    },
  ]
  
  const handleDelete = async (id: number) => {
    if (confirm("Êtes-vous sûr de vouloir supprimer cette voiture ?")) {
      try {
        await voitureApi.delete(id)
        setVoitures(voitures.filter(voiture => voiture.id !== id))
        toast({
          title: "Succès",
          description: "La voiture a été supprimée avec succès.",
        })
      } catch (error) {
        console.error("Error deleting voiture:", error)
        toast({
          title: "Erreur",
          description: "Impossible de supprimer la voiture. Veuillez réessayer.",
          variant: "destructive",
        })
      }
    }
  }
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Voitures</h1>
          <p className="text-muted-foreground">
            Gérez les voitures disponibles pour la location
          </p>
        </div>
        <Button asChild>
          <Link href="/dashboard/voitures/new">
            <Plus className="mr-2 h-4 w-4" />
            Ajouter une voiture
          </Link>
        </Button>
      </div>
      
      <div className="flex items-center">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Rechercher une voiture..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      ) : (
        <DataTable columns={columns} data={filteredVoitures} />
      )}
    </div>
  )
}