import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Car, Calendar, CreditCard, CheckCircle } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/3752169/pexels-photo-3752169.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Car rental hero"
            layout="fill"
            objectFit="cover"
            className="brightness-[0.6]"
            priority
          />
        </div>
        
        <div className="container relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Location de Voitures Simple et Rapide
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Découvrez notre gamme de véhicules et réservez en quelques clics
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg">
              <Link href="/voitures">Voir nos voitures</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg bg-white/10 hover:bg-white/20 text-white border-white/30">
              <Link href="/tarifs">Nos tarifs</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Comment ça marche</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg p-6 shadow-sm flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <Car className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Choisissez votre voiture</h3>
              <p className="text-muted-foreground">
                Parcourez notre gamme de véhicules et sélectionnez celui qui vous convient le mieux.
              </p>
            </div>
            
            <div className="bg-card rounded-lg p-6 shadow-sm flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Réservez vos dates</h3>
              <p className="text-muted-foreground">
                Sélectionnez les dates de début et de fin de votre location.
              </p>
            </div>
            
            <div className="bg-card rounded-lg p-6 shadow-sm flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <CreditCard className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Paiement sécurisé</h3>
              <p className="text-muted-foreground">
                Effectuez votre paiement en toute sécurité avec nos options de paiement variées.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Pourquoi choisir VoitureLocation ?</h2>
              
              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Tarifs transparents</h3>
                    <p className="text-muted-foreground">Aucun frais caché, vous payez uniquement ce qui est affiché.</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Véhicules récents</h3>
                    <p className="text-muted-foreground">Notre flotte est régulièrement renouvelée pour vous offrir des véhicules modernes et confortables.</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Service client 24/7</h3>
                    <p className="text-muted-foreground">Notre équipe est disponible à tout moment pour répondre à vos questions.</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Annulation gratuite</h3>
                    <p className="text-muted-foreground">Annulez jusqu'à 48h avant la prise en charge sans frais.</p>
                  </div>
                </div>
              </div>
              
              <Button asChild className="mt-8">
                <Link href="/voitures">Réserver maintenant</Link>
              </Button>
            </div>
            
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.pexels.com/photos/2036544/pexels-photo-2036544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Car rental benefits"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à prendre la route ?</h2>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90">
            Réservez dès maintenant et profitez de nos meilleurs tarifs
          </p>
          
          <Button asChild size="lg" variant="secondary" className="text-lg">
            <Link href="/voitures">Voir les disponibilités</Link>
          </Button>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Car className="h-6 w-6" />
                <span className="text-lg font-semibold">VoitureLocation</span>
              </div>
              <p className="text-muted-foreground">
                Location de voitures simple, rapide et économique.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Liens rapides</h3>
              <ul className="space-y-2">
                <li><Link href="/voitures" className="text-muted-foreground hover:text-foreground transition-colors">Nos voitures</Link></li>
                <li><Link href="/tarifs" className="text-muted-foreground hover:text-foreground transition-colors">Tarifs</Link></li>
                <li><Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Informations</h3>
              <ul className="space-y-2">
                <li><Link href="/conditions" className="text-muted-foreground hover:text-foreground transition-colors">Conditions générales</Link></li>
                <li><Link href="/confidentialite" className="text-muted-foreground hover:text-foreground transition-colors">Politique de confidentialité</Link></li>
                <li><Link href="/faq" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <address className="not-italic text-muted-foreground">
                <p>123 Rue de la Location</p>
                <p>75000 Paris, France</p>
                <p className="mt-2">contact@voiturelocation.com</p>
                <p>+33 1 23 45 67 89</p>
              </address>
            </div>
          </div>
          
          <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} VoitureLocation. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}