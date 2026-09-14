interface Env {}

export const onRequest = async (context: {
  request: Request
  next: () => Promise<Response>
  env: Env
  params: Record<string, string>
  data: Record<string, unknown>
  waitUntil: (promise: Promise<unknown>) => void
}): Promise<Response> => {
  const response = await context.next()
  const headers = new Headers(response.headers)

  headers.set(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://static.cloudflareinsights.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https:; connect-src 'self' https://cloudflareinsights.com; frame-src 'self' https://cal.com;"
  )

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  })
}