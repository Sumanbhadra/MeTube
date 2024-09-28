export const API_KEY = import.meta.env.VITE_API_KEY;
export function dataCovertor(data) {
  if (data >= 1000000000) return `${Math.floor(data / 1000000000)}B`;
  else if (data >= 1000000) return `${Math.floor(data / 1000000)}M`;
  else if (data >= 1000) return `${Math.floor(data / 1000)}K`;
  else return data;
}
