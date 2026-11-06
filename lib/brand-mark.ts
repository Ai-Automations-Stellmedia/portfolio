// Generic briefcase icon shared by sign-in, browser and install icons.
export interface MarkPath {
  d: string
}

export const MARK_PATHS: readonly MarkPath[] = [
  { d: 'M4 8H20V20H4ZM8 8V4H16V8M4 13H20M10 13V15H14V13' },
]

/** The stroke every renderer draws the paths with, in viewBox units. */
export const MARK_STROKE = { width: 2, linecap: 'round', linejoin: 'round' } as const

/** The mark's own box, tight around the stroke: for the mark beside text. */
export const MARK_VIEWBOX = '2 2 20 20'

/** A square box centred on the mark, which spans its full width: for icons. */
export const MARK_ICON_VIEWBOX = '2 2 20 20'
