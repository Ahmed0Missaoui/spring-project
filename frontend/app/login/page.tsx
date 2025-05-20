
"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "@/hooks/use-toast"
import { clientApi } from "@/app/api/backendApi"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const client = await clientApi.login(email, password)
      if (client && client.id) {
        toast({ title: "Connexion réussie", description: "Bienvenue!" })
        router.push("/voitures")
      } else {
        toast({ title: "Erreur", description: "Identifiants invalides.", variant: "destructive" })
      }
    } catch (error: any) {
      toast({ title: "Erreur", description: error.message || "Erreur lors de la connexion.", variant: "destructive" })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container flex flex-col items-center justify-center min-h-screen">
      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-6 p-8 border rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-4 text-center">Connexion</h1>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Mot de passe</Label>
          <Input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} required />
        </div>
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Connexion..." : "Se connecter"}
        </Button>
        <p className="text-sm text-center">
          Pas de compte ? <a href="/register" className="text-primary underline">Créer un compte</a>
        </p>
      </form>
    </div>
  )
}
