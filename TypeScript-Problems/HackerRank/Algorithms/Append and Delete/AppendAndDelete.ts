export function appendAndDelete(s: string, t: string, k: number): string {
  let availableOperations = s.length + t.length;
  if (k > availableOperations) return "Yes";
  for (
    let i = 0, l = Math.min(s.length, t.length);
    i < l;
    i++, availableOperations -= 2
  ) {
    if (s[i] !== t[i]) break;
  }
  return availableOperations > k || (k - availableOperations) % 2 !== 0
    ? "No"
    : "Yes";
}
