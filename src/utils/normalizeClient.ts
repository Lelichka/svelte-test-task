import type {NormalizedClient} from "../types/normalizedClient";
import {isVip} from "./vip";

export function normalizeClient(raw: any, usedIds: Set<string>): NormalizedClient {
    const normalizeClient: NormalizedClient = {
        id: generateUniqueId(raw.id, usedIds),
        name: String(raw.name ?? 'Unknown'),
        email: String(raw.email ?? ''),
        status: ['active', 'inactive', 'blocked'].includes(raw.status)
            ? raw.status
            : 'inactive',
        balance: normalizeBalance(raw.balance),
        createdAt: normalizeCreatedAt(raw.createdAt),
        isVip: false
    };
    return {
        ...normalizeClient,
        isVip: isVip(normalizeClient)
    }
}
function generateUniqueId(id: any, usedIds: Set<string>): string {
    const baseId = String(id ?? crypto.randomUUID());
    let uniqueId = baseId;
    let counter = 1;

    while (usedIds.has(uniqueId)) {
        uniqueId = `${baseId}-${counter++}`;
    }

    usedIds.add(uniqueId);
    return uniqueId;
}

function normalizeBalance(balance: any): number {
    const value = Number(balance);
    if (!Number.isFinite(value)) {
        return 0;
    }

    return value;
}

function normalizeCreatedAt(createdAt: any): number | null {
    return createdAt && !isNaN(new Date(createdAt).getTime())
        ? new Date(createdAt).getTime()
        : null
}