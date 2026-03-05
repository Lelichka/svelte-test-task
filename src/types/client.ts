export type ClientStatus = 'active' | 'inactive' | 'blocked';

export interface Client {
  id: number;
  name: string;
  email: string;
  status: ClientStatus;
  balance: number | string | null
  createdAt: string | null;
}
