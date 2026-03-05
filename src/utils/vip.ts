import type {NormalizedClient} from '../types/normalizedClient';

export function isVip(client: NormalizedClient): boolean {
  if (!client.createdAt) return false;
  return (
      client.status !== "blocked" &&
      client.balance > 1000 &&
      Date.now() - client.createdAt > 30 * 24 * 60 * 60 * 1000
  );
}
