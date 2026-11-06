import { describe, expect, it } from 'vitest'
import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { AppFooter } from '@/components/app-footer'
import { PRODUCT_LICENSE } from '@/lib/site-links'

describe('deployment branding', () => {
  it('keeps the license local and omits upstream promotions from the footer', () => {
    const html = renderToStaticMarkup(createElement(AppFooter))
    expect(html).toContain(`href="${PRODUCT_LICENSE}"`)
    expect(PRODUCT_LICENSE).toBe('/auth/license')
    expect(html).not.toMatch(/hemrock|github|taylor/i)
  })
})
