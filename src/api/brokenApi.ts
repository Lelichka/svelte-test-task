import clients from '../data/clients.json';

export async function fetchClients(){
  await delay(random(300, 1500));

  const randomCase = random(1, 4);

  if (randomCase === 1) {
    throw new Error('Random API error');
  }

  if (randomCase === 2) {
    return [];
  }

  if (randomCase === 3) {
    return [...clients, clients[0]];
  }

  return clients;
}

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function random(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
