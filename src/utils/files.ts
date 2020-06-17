export const findAsset = (asset: string): string => {
  return `${process.env.PUBLIC_URL}/assets/${asset}`
}
