/** Deployment links and public origin. */
export const PRODUCT_NAME = 'Portfolio'
export const PRODUCT_LICENSE = '/auth/license'

export const TERMS_URL = process.env.NEXT_PUBLIC_TERMS_URL || null
export const PRIVACY_URL = process.env.NEXT_PUBLIC_PRIVACY_URL || null

/**
 * The deployment's own public origin, without a trailing slash.
 *
 * NEXT_PUBLIC_SITE_URL first (what DOCS.md tells an installer to set), then
 * NEXT_PUBLIC_APP_URL (the older name, still honoured), then the host's own
 * production URL, then localhost. Never a hardcoded domain: this codebase is
 * installed under many.
 */
export function siteOrigin(): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL || process.env.NEXT_PUBLIC_APP_URL
  if (configured) return configured.replace(/\/$/, '')
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  return 'http://localhost:3000'
}

/**
 * The origin the browser used to reach this request, for absolute redirects.
 *
 * Behind a reverse proxy, `next start -H <address> -p <port>` reports its own listen address as
 * the origin of `request.url` (Next prefers it to the Host header), so a redirect built from
 * `request.url` sends the browser to https://localhost:3100. The proxy's forwarded host, or the
 * Host header it passes on, is the address the browser used; issuerFor (lib/oauth/metadata.ts)
 * reads them the same way. On Vercel and in local development they agree with `request.url`.
 */
export function requestOrigin(req: Request): string {
  const first = (name: string) => req.headers.get(name)?.split(',')[0].trim() || null
  const host = first('x-forwarded-host') ?? first('host')
  if (!host) return new URL(req.url).origin
  const proto = first('x-forwarded-proto')
    ?? (/^(localhost|127\.0\.0\.1|\[::1\])(:|$)/.test(host) ? 'http' : 'https')
  return `${proto}://${host}`
}

/** The bare host of siteOrigin(), for display (the OG image footer). */
export function siteHost(): string {
  try {
    return new URL(siteOrigin()).host
  } catch {
    return 'localhost:3000'
  }
}
