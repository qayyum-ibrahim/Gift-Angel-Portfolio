/**
 * ALL MEDIA LIVES HERE.
 * To swap a photo or video, replace its Cloudinary public ID below (no file extension).
 */

export const CLOUD_NAME = 'dlxovrmtr';

/**
 * FOLDER SWITCH
 * Open one uploaded image in Cloudinary and copy its URL.
 *  - If the URL looks like  .../image/upload/gift-angel-xyz_abc123   -> leave FOLDER as ''
 *  - If it looks like       .../image/upload/home/gift_angel/gift-angel-xyz_abc123
 *                           -> set FOLDER = 'home/gift_angel'
 */
export const FOLDER = 'gift_angel';

const BASE = `https://res.cloudinary.com/${CLOUD_NAME}`;
const withFolder = (id) => (FOLDER ? `${FOLDER}/${id}` : id);

// Photos: Cloudinary picks the best format (WebP/AVIF) and resizes for the screen.
export const img = (id, width = 1200) =>
  `${BASE}/image/upload/f_auto,q_auto,c_limit,w_${width}/${withFolder(id)}`;

// Videos: the compressed MP4 you uploaded.
export const vid = (id) => `${BASE}/video/upload/q_auto/${withFolder(id)}.mp4`;

// Video still frame, shown while the video loads.
export const poster = (id, width = 900) =>
  `${BASE}/video/upload/f_jpg,q_auto,so_0,c_limit,w_${width}/${withFolder(id)}.jpg`;

export const M = {
  hero: {
    desktop: 'gift-angel-hero-desktop_fkrimi',
    mobile: 'gift-angel-hero-mobile-mov_uzz864',
  },
  about: {
    portrait: 'gift-angel-about-portrait_wjboao',
    detail: 'gift-angel-about-detail-jpg_jzmwfc',
  },
  brands: {
    payscribe: 'gift-angel-logo-payscribe_ylh9w7',
    legalParadigms: 'gift-angel-logo-legal-paradigms_tgmtdj',
  },
  fashion: {
    cover: 'gift-angel-fashion-cover-jpg_mtlfqt',
    photos: [
      'gift-angel-fashion-01_y9s4ny',
      'gift-angel-fashion-02-jpg_f12xdn',
      'gift-angel-fashion-03-jpg_abyfrt',
      'gift-angel-fashion-04_fvf7g3',
      'gift-angel-fashion-05-jpg_xmdw0h',
    ],
    reels: ['gift-angel-fashion-reel-01_cemsye', 'gift-angel-fashion-reel-02_y6qpjv'],
  },
  beauty: {
    cover: 'gift-angel-beauty-cover_dqlkis',
    photos: [
      'gift-angel-beauty-01_khwrn3',
      'gift-angel-beauty-02_x8bfs9',
      'gift-angel-beauty-03_zktuql',
      'gift-angel-beauty-04_kltrqi',
    ],
    reels: ['gift-angel-beauty-reel-01_j1alyn', 'gift-angel-beauty-reel-02_c264jk'],
  },
  food: {
    cover: 'gift-angel-food-cover_e1ceka',
    photos: ['gift-angel-food-01_j75q62', 'gift-angel-food-02_vxyayg'],
    reels: [],
  },
  lifestyle: {
    cover: 'gift-angel-lifestyle-cover_puuqmd',
    photos: ['gift-angel-lifestyle-01_mclbhj', 'gift-angel-lifestyle-02_drxccc'],
    reels: [],
  },
  commercial: {
    cover: 'gift-angel-commercial-cover-jpg_qkykrh',
    reels: [
      { id: 'gift-angel-payscribe-reel_arvpv4', label: 'Payscribe' },
      { id: 'gift-angel-legal-paradigms-reel_z8q93z', label: 'Legal Paradigms' },
      { id: 'gift-angel-commercial-reel-03_nhmw6u', label: 'Brand campaign' },
    ],
  },
  range: {
    events: [{ id: 'gift-angel-events-church-edit-mov_mh18h8', label: 'Event video edit' }],
    personality: [
      { id: 'gift-angel-personality-01_gblfeu', label: 'Everyday content' },
      { id: 'gift-angel-personality-02_vy4x1w', label: 'Everyday content' },
      { id: 'gift-angel-personality-03_z2dr7g', label: 'Everyday content' },
    ],
  },
};
