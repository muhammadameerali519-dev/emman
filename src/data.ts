import { Artwork, Exhibition, Stat } from './types';

export const PORTRAIT_IMAGE = '/src/assets/images/emaan_portrait_mirror_selfie_1783586759911.jpg';

export const STATS: Stat[] = [
  { label: 'Years of Practice', value: 10, suffix: '+' },
  { label: 'Exhibitions Held', value: 24, suffix: '' },
  { label: 'Works Placed Globally', value: 140, suffix: '+' },
];

export const ARTWORKS: Artwork[] = [
  {
    id: 'art-1',
    number: '01',
    title: 'Sialkot Monologues I',
    medium: 'Reclaimed Textile, Oil & Gold Thread',
    year: '2024',
    dimensions: '48" x 36"',
    image: '/src/assets/images/artwork_oil_textile_1783585899202.jpg',
  },
  {
    id: 'art-2',
    number: '02',
    title: 'Echoes of the Chenab',
    medium: 'Indigo Ink & Oil on Raw Linen',
    year: '2025',
    dimensions: '60" x 40"',
    image: '/src/assets/images/artwork_indigo_ink_1783585915353.jpg',
  },
  {
    id: 'art-3',
    number: '03',
    title: 'Kashmir Boundary Wildflowers',
    medium: 'Impasto Oil on Canvas',
    year: '2023',
    dimensions: '36" x 36"',
    image: '/src/assets/images/artwork_floral_sialkot_1783585932460.jpg',
  },
  {
    id: 'art-4',
    number: '04',
    title: 'Inherited Stitches',
    medium: 'Hand-Stitched Fabric & Ink Collage',
    year: '2024',
    dimensions: '54" x 42"',
    image: '/src/assets/images/artwork_reclaimed_tapestry_1783585949589.jpg',
  },
  {
    id: 'art-5',
    number: '05',
    title: 'Rhythms of the Loom',
    medium: 'Tactile Oil & Stitched Canvas',
    year: '2026',
    dimensions: '72" x 48"',
    image: '/src/assets/images/artwork_ink_textile_1783585974133.jpg',
  },
  {
    id: 'art-6',
    number: '06',
    title: 'Sialkot Monologues II',
    medium: 'Reclaimed Denim, Gesso & Ink',
    year: '2025',
    dimensions: '48" x 36"',
    image: '/src/assets/images/artwork_oil_textile_1783585899202.jpg', // Reuse first artwork beautifully
  },
];

export const EXHIBITIONS: Exhibition[] = [
  {
    id: 'ex-1',
    year: '2026',
    title: 'Stitching Memories across Chenab',
    venue: 'Alhamra Art Gallery',
    city: 'Lahore',
    type: 'Solo',
  },
  {
    id: 'ex-2',
    year: '2025',
    title: 'Textile Narratives & Reclaimed Soil',
    venue: 'Sanjat Collective Space',
    city: 'Karachi',
    type: 'Solo',
  },
  {
    id: 'ex-3',
    year: '2024',
    title: 'Contemporary Voices of Punjab',
    venue: 'National College of Arts',
    city: 'Lahore',
    type: 'Group',
  },
  {
    id: 'ex-4',
    year: '2023',
    title: 'Sialkot Ink & Thread Interludes',
    venue: 'The Creative Hub',
    city: 'Islamabad',
    type: 'Solo',
  },
  {
    id: 'ex-5',
    year: '2022',
    title: 'Boundary Lines & Soft Bridges',
    venue: 'PNCA National Art Gallery',
    city: 'Islamabad',
    type: 'Group',
  },
];

export const PULL_QUOTE = "“My art lives in the tension between industrial craftsmanship and ancestral threads. I sew Sialkot's memories directly into raw canvas, reclaiming the waste of sports factories as landscapes of resilience.”";
