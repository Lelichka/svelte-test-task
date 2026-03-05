import {writable, derived} from 'svelte/store';
import {fetchClients} from '../api/brokenApi';
import {normalizeClient} from '../utils/normalizeClient';
import type {NormalizedClient} from '../types/normalizedClient';

export const clients = writable<NormalizedClient[]>([]);
export const loading = writable<boolean>(false);
export const error = writable<string | null>(null);

export const statusFilter = writable<'all' | 'active' | 'inactive' | 'blocked'>('all');
export const searchQuery = writable<string>('');
export const sortField = writable<'balance' | 'createdAt' | null>(null);
export const sortOrder = writable<'asc' | 'desc'>('asc');

export async function loadClients() {
    loading.set(true);
    error.set(null);
    try {
        const data = await fetchClients();

        if (!Array.isArray(data)) {
            error.set('Invalid API response');
            clients.set([]);
            return;
        }

        const usedIds = new Set<string>()
        const normalized = data.map(c => normalizeClient(c, usedIds));
        clients.set(normalized);
    } catch (e: any) {
        error.set(e.message);
        clients.set([]);
    } finally {
        loading.set(false);
    }
}

export const filteredClients = derived(
    [clients, statusFilter, searchQuery, sortField, sortOrder],
    ([$clients, $statusFilter, $searchQuery, $sortField, $sortOrder]) => {
        let result = [...$clients];

        if ($statusFilter !== 'all') {
            result = result.filter(c => c.status === $statusFilter);
        }

        if ($searchQuery.trim()) {
            result = result.filter(c =>
                c.name.toLowerCase().includes($searchQuery.toLowerCase())
            );
        }

        if ($sortField) {
            result = result.slice().sort((a, b) => {
                const valA = a[$sortField] ?? 0;
                const valB = b[$sortField] ?? 0;

                return $sortOrder === 'asc'
                    ? valA - valB
                    : valB - valA;
            });
        }

        return result;
    }
);