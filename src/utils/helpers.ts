export function shortText(text: string, n = 100) {
return text.length > n ? text.slice(0, n) + "..." : text;
}
export function formatDate(iso: string) {
const d = new Date(iso);
return d.toLocaleDateString();
}
export function uid() {
return Math.random().toString(36).slice(2, 9);
}