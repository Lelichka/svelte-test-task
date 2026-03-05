export interface NormalizedClient {
    id: string;
    name: string;
    email: string;
    status: 'active' | 'inactive' | 'blocked';
    balance: number;
    createdAt: number | null; // timestamp
    isVip: boolean;
}