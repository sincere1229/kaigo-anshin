import { MetadataRoute } from 'next'

const BASE = 'https://kaigo-anshin.net'

const DIAGNOSES = ['kaigo-type', 'shisetsu', 'genkai', 'cost', 'roshoku']
const ROADMAPS = [
  'kaigo-zaitaku','kaigo-pro','kaigo-shisetsu','kaigo-family',
  'shisetsu-tokuyou','shisetsu-yuryou','shisetsu-group','shisetsu-sahojo',
  'genkai-genki','genkai-chui','genkai-kiken','genkai-minaoshi',
  'cost-antei','cost-chuukan','cost-kiken','cost-sisan',
  'roshoku-ok','roshoku-chui','roshoku-kiken','roshoku-kentou',
]
const CATEGORIES = ['hajimete', 'shisetsu-col', 'seido', 'shokuji', 'mental']

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const urls: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE}/column`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/recommend`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/about`, lastModified: now, priority: 0.3 },
    { url: `${BASE}/privacy`, lastModified: now, priority: 0.3 },
  ]
  DIAGNOSES.forEach(d => urls.push({ url: `${BASE}/diagnosis/${d}`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 }))
  ROADMAPS.forEach(r => urls.push({ url: `${BASE}/roadmap/${r}`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 }))
  CATEGORIES.forEach(cat => {
    for (let i = 1; i <= 10; i++) {
      urls.push({ url: `${BASE}/column/${cat}/${i}`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 })
    }
  })
  return urls
}
