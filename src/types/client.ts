export interface Client {
  id: number
  name: string
  email: string
  status: "active" | "inactive" | "blocked"
  balance: number | string | null
  createdAt: string | null
}
