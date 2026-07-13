import { Artwork, Exhibition, Stat } from './types';

export const PORTRAIT_IMAGE = 'https://i.pinimg.com/564x/80/34/3e/80343e69d0c5c22e827523668f76ef0b.jpg';

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
    image: 'https://framer.pk/cdn/shop/products/MHM7491.jpg?v=1646220034',
  },
  {
    id: 'art-2',
    number: '02',
    title: 'Echoes of the Chenab',
    medium: 'Indigo Ink & Oil on Raw Linen',
    year: '2025',
    dimensions: '60" x 40"',
    image: 'https://www.toyzone.pk/cdn/shop/files/acrylicpaintingdeal_8cb25910-03d9-4309-a277-e10f7ebf3956_1280x.jpg?v=1751364269',
  },
  {
    id: 'art-3',
    number: '03',
    title: 'Kashmir Boundary Wildflowers',
    medium: 'Impasto Oil on Canvas',
    year: '2023',
    dimensions: '36" x 36"',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ7BwsvtG-O1on3cov1PWaZDm-XBuob6joODAlVEN_9q9s9M1MckPigv4&s=10',
  },
  {
    id: 'art-4',
    number: '04',
    title: 'Inherited Stitches',
    medium: 'Hand-Stitched Fabric & Ink Collage',
    year: '2024',
    dimensions: '54" x 42"',
    image: 'https://i.pinimg.com/736x/e2/3c/8b/e23c8b00932660807f87049333ac4dad.jpg',
  },
  {
    id: 'art-5',
    number: '05',
    title: 'Rhythms of the Loom',
    medium: 'Tactile Oil & Stitched Canvas',
    year: '2026',
    dimensions: '72" x 48"',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfa4nUPnJ8zT-nbkoyrhiyZHITt28oBD2yhFnBmUBt0REnOBsHwQZRemMR&s=10',
  },
  {
    id: 'art-6',
    number: '06',
    title: 'Sialkot Monologues II',
    medium: 'Reclaimed Denim, Gesso & Ink',
    year: '2025',
    dimensions: '48" x 36"',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ3qXEqFat28-Z6vkTUyNC_q8lCy-6QVqN0a59BopzjSDznXymzlypaLA&s=10',
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
