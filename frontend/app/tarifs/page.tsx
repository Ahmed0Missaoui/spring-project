"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Check } from "lucide-react"
import Link from "next/link"

export default function TarifsPage() {
  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Nos Tarifs</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Des tarifs transparents et compétitifs pour tous vos besoins de location
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Catégorie Économique */}
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Économique</CardTitle>
            <CardDescription>Idéal pour les petits budgets</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <div className="text-3xl font-bold mb-6">
              À partir de 35€ <span className="text-base font-normal text-muted-foreground">/jour</span>
            </div>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span>Citadines compactes</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span>Kilométrage limité</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span>Assurance basique incluse</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span>Climatisation</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <Link href="/voitures?categorie=economique">Voir les véhicules</Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Catégorie Confort */}
        <Card className="flex flex-col relative overflow-hidden">
          <div className="absolute top-0 right-0 px-3 py-1 bg-primary text-primary-foreground text-sm">
            Populaire
          </div>
          <CardHeader>
            <CardTitle>Confort</CardTitle>
            <CardDescription>Pour un voyage en toute sérénité</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <div className="text-3xl font-bold mb-6">
              À partir de 55€ <span className="text-base font-normal text-muted-foreground">/jour</span>
            </div>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span>Berlines familiales</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span>Kilométrage illimité</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span>Assurance tous risques</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span>GPS inclus</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span>Support 24/7</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <Link href="/voitures?categorie=confort">Voir les véhicules</Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Catégorie Premium */}
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Premium</CardTitle>
            <CardDescription>L'excellence à votre service</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <div className="text-3xl font-bold mb-6">
              À partir de 95€ <span className="text-base font-normal text-muted-foreground">/jour</span>
            </div>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span>Véhicules haut de gamme</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span>Kilométrage illimité</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span>Assurance premium</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span>Service de conciergerie</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span>Livraison du véhicule</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span>Chauffeur sur demande</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <Link href="/voitures?categorie=premium">Voir les véhicules</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Besoin d'un devis personnalisé ?</h2>
        <p className="text-muted-foreground mb-6">
          Contactez-nous pour obtenir une offre adaptée à vos besoins spécifiques
        </p>
        <Button asChild size="lg">
          <Link href="/contact">Nous contacter</Link>
        </Button>
      </div>
    </div>
  )
}