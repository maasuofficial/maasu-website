export function sortByDate(a: string, b: string) {
  return new Date(b).getTime() - new Date(a).getTime()
}
