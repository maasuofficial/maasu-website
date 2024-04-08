import {
  fetchCSVObject,
  descDateSort,
  REPORTS_ID,
  getHeaders,
  ResBody,
  ResData,
} from './utils'

type ReportType = {
  id: string
  startDate: string
  endDate: string
  url: string
}

export const handler = async (event: any, context: any) => {
  let data: ResData = null

  const { data: res, error } = await fetchCSVObject<ReportType>(REPORTS_ID)

  if (res) {
    let reports = res.filter(
      (r: ReportType) =>
        r.id != null &&
        r.startDate != null &&
        r.endDate != null &&
        r.url != null
    )
    reports = reports.sort((a: ReportType, b: ReportType): number =>
      descDateSort(a.endDate, b.endDate)
    )

    data = reports
  }

  const body: ResBody = { data, error }
  return {
    context,
    event,
    ...getHeaders(),
    statusCode: 200,
    body: JSON.stringify(body),
  }
}
