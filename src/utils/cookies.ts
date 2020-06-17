interface Cookie {
  cname: string
  cvalue: string
  expDays: number
}

export const storeCookie = ({ cname, cvalue, expDays }: Cookie) => {
  const d = new Date()
  d.setTime(d.getTime() + expDays * 24 * 60 * 60 * 1000)
  const expires = d.toUTCString()
  document.cookie = `${cname}=${cvalue}; expires=${expires}`
}

export const retrieveCookie = (cname: string): string => {
  const cookies = decodeURIComponent(document.cookie)

  const start = cookies.indexOf(cname + '=') + (cname.length + 1)
  const end = cookies.indexOf(';', start)

  return end < 0 ? cookies.substring(start) : cookies.substring(start, end)
}
