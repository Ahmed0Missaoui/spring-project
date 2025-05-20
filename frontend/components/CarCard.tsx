"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Voiture } from "@/types"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { formatCurrency } from "@/lib/formatters"

interface CarCardProps {
  car: Voiture
  className?: string
}

export function CarCard({ car, className }: CarCardProps) {
  const carImageUrl = `https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`

  return (
    <motion.div
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={cn("h-full", className)}
    >
      <Card className="h-full flex flex-col overflow-hidden">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={carImageUrl}
            alt={`${car.marque} ${car.modele}`}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 hover:scale-110"
          />
        </div>
        
        <CardContent className="flex-grow p-4">
          <div className="mb-2">
            <h3 className="text-lg font-bold tracking-tight">
              {car.marque} {car.modele}
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              {car.immatriculation}
            </p>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="text-lg font-bold text-primary">
                {formatCurrency(car.prixParJour)} <span className="text-sm font-normal text-muted-foreground">/jour</span>
              </p>
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="p-4 pt-0 mt-auto">
          <Link href={`/voitures/${car.id}`} className="w-full">
            <Button variant="default" className="w-full">
              Réserver maintenant
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  )
}