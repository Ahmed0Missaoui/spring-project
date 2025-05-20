import { voitureApi } from "@/app/api/backendApi";

export async function generateStaticParams() {
  try {
    const voitures = await voitureApi.getAll();
    return voitures.map((v: { id: number }) => ({ id: v.id.toString() }));
  } catch (e) {
    return [];
  }
}