
"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "@/hooks/use-toast"
import { clientApi } from "@/app/api/backendApi"

export default function RegisterPage() {
  const router = useRouter()
  const [nom, setNom] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      toast({ title: "Erreur", description: "Les mots de passe ne correspondent pas.", variant: "destructive" })
      return
    }
    setLoading(true)
    try {
      await clientApi.register({ nom, email, motDePasse: password })
      toast({ title: "Inscription réussie", description: "Vous pouvez maintenant vous connecter." })
      router.push("/login")
    } catch (error: any) {
      toast({ title: "Erreur", description: error.message || "Erreur lors de l'inscription.", variant: "destructive" })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container flex flex-col items-center justify-center min-h-screen">
      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-6 p-8 border rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-4 text-center">Créer un compte</h1>
        <div className="space-y-2">
          <Label htmlFor="nom">Nom</Label>
          <Input id="nom" value={nom} onChange={e => setNom(e.target.value)} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Mot de passe</Label>
          <Input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="confirmPassword">Confirmer le mot de passe</Label>
          <Input id="confirmPassword" type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required />
        </div>
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Inscription..." : "Créer un compte"}
        </Button>
        <p className="text-sm text-center">
          Déjà un compte ? <a href="/login" className="text-primary underline">Se connecter</a>
        </p>
      </form>
    </div>
  )
}
