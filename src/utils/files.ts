export const findAsset = (asset: string): string => {
  return `${process.env.PUBLIC_URL}/assets/${asset}`
}

export const getLogo = () => findAsset('branding/logo.svg')
