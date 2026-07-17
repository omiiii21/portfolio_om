import type { Recommendation } from '../types/portfolio'

/**
 * TODO(Om): replace these placeholders with real recommendations.
 * LinkedIn → your profile → Recommendations → "Received" → copy the text here.
 * Delete `placeholder: true` once a real quote is in — placeholder entries
 * render with a visible "sample" badge so they can't ship unnoticed.
 */
export const recommendations: Recommendation[] = [
  {
    quote:
      'Paste the recommendation text here, exactly as it appears on LinkedIn. Two to four sentences reads best.',
    name: 'Recommender Name',
    title: 'Their Title, Their Company',
    relationship: 'Worked with Om at BestEx Research',
    placeholder: true,
  },
  {
    quote:
      'Paste the recommendation text here, exactly as it appears on LinkedIn. Two to four sentences reads best.',
    name: 'Recommender Name',
    title: 'Their Title, Their Company',
    relationship: 'Managed Om directly',
    placeholder: true,
  },
  {
    quote:
      'Paste the recommendation text here, exactly as it appears on LinkedIn. Two to four sentences reads best.',
    name: 'Recommender Name',
    title: 'Their Title, Their Company',
    relationship: 'Worked with Om on the same team',
    placeholder: true,
  },
]
