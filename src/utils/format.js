export function shortenAddress(addr) {
  if (!addr) return "";
  return `${addr.slice(0, 6)}....`;
}
