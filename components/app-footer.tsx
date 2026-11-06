import { PRIVACY_URL, PRODUCT_LICENSE, PRODUCT_NAME, TERMS_URL } from '@/lib/site-links'

export function AppFooter() {
  return (
    <footer className="px-4 md:px-8 pt-2 pb-8 shrink-0">
      <ul className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-9 text-sm text-muted-foreground border-t pt-3">
        <li>{PRODUCT_NAME}</li>
        <li><a href={PRODUCT_LICENSE} className="hover:text-foreground underline underline-offset-4">License</a></li>
        {TERMS_URL && (
          <li>
            <a href={TERMS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
              Terms
            </a>
          </li>
        )}
        {PRIVACY_URL && (
          <li>
            <a href={PRIVACY_URL} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
              Privacy
            </a>
          </li>
        )}
      </ul>
    </footer>
  )
}
