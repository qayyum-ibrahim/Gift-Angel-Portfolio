/**
 * ALL TEXT AND LINKS LIVE HERE. Edit freely.
 */
import { M } from './media';

export const SITE = {
  name: 'Gift Angel',
  fullName: 'Precious Abodunrin',
  kicker: 'Content creator, model and brand ambassador',
  tagline: 'Tailored. Bold. Gift Angel.',
  location: 'Abeokuta, Nigeria',
};

export const LINKS = {
  whatsapp: 'https://wa.me/2348055431521',
  instagram: 'https://www.instagram.com/gift.angel.17',
  youtube: 'https://www.youtube.com/@giftangel17',
  email: 'mailto:abodunrinprecious627@gmail.com?subject=Project%20enquiry%20for%20Gift%20Angel',
};

export const waLink = (text) => `${LINKS.whatsapp}?text=${encodeURIComponent(text)}`;
export const BOOK_TEXT = "Hi Gift, I found your portfolio and I'd like to work with you.";

export const BIO = [
  "Hi, I'm Precious Abodunrin, known online as Gift Angel. I'm a content creator, model and brand ambassador based in Abeokuta.",
  'I turn products and ideas into clear, good-looking stories. My work covers fashion, beauty, food, lifestyle and commercial content, and I have worked with brands like Payscribe and Legal Paradigms.',
  'I shoot, style, edit and present, so brands get content that is ready to use. I also manage social media and handle digital marketing, so your campaign is covered from idea to post.',
];

export const BRANDS = ['Payscribe', 'Legal Paradigms'];

export const NICHES = ['Fashion', 'Beauty', 'Food', 'Lifestyle', 'Commercial'];

const I = (id, alt) => ({ type: 'img', id, alt });
const V = (id, label) => ({ type: 'vid', id, label });

export const WORLDS = [
  {
    id: 'fashion',
    title: 'Fashion',
    line: 'Sharp tailoring, bold styling, gold details.',
    blurb:
      'From studio portraits to street editorials, I bring each look to life through pose, mood and movement.',
    cover: M.fashion.cover,
    credit: '',
    items: [
      I(M.fashion.cover, 'Gift Angel in a fashion editorial shoot'),
      V(M.fashion.reels[0]),
      ...M.fashion.photos.map((id, i) => I(id, `Gift Angel fashion photo ${i + 1}`)),
      V(M.fashion.reels[1]),
    ],
  },
  {
    id: 'beauty',
    title: 'Beauty',
    line: 'Hair, glow and the full transformation.',
    blurb:
      'Wig reveals, styling and close-up content that makes viewers stop scrolling and watch.',
    cover: M.beauty.cover,
    credit: '',
    items: [
      I(M.beauty.cover, 'Gift Angel beauty and hair photo'),
      V(M.beauty.reels[0]),
      ...M.beauty.photos.map((id, i) => I(id, `Gift Angel beauty photo ${i + 1}`)),
      V(M.beauty.reels[1]),
    ],
  },
  {
    id: 'food',
    title: 'Food',
    line: 'Taste, told on camera.',
    blurb: 'Food moments shot to look as good as they taste.',
    cover: M.food.cover,
    credit: '',
    items: [
      I(M.food.cover, 'Gift Angel food content photo'),
      ...M.food.photos.map((id, i) => I(id, `Gift Angel food photo ${i + 1}`)),
    ],
  },
  {
    id: 'lifestyle',
    title: 'Lifestyle',
    line: 'Real days, styled well.',
    blurb: 'Birthdays, daily life and personal moments, shot with warmth and personality.',
    cover: M.lifestyle.cover,
    credit: '',
    items: [
      I(M.lifestyle.cover, 'Gift Angel lifestyle photo'),
      ...M.lifestyle.photos.map((id, i) => I(id, `Gift Angel lifestyle photo ${i + 1}`)),
    ],
  },
  {
    id: 'commercial',
    title: 'Commercial',
    line: 'Content that works for brands.',
    blurb: 'Ambassador videos and campaign content made to get attention and keep it.',
    cover: M.commercial.cover,
    credit: '',
    items: [
      I(M.commercial.cover, 'Gift Angel brand ambassador photo'),
      ...M.commercial.reels.map((r) => V(r.id, r.label)),
    ],
  },
];

export const RANGE = {
  title: 'Beyond the shoot',
  text: 'Event and church video edits, plus everyday content with personality.',
  videos: [...M.range.events, ...M.range.personality],
};

export const SERVICES = [
  { t: 'Brand ambassadorship', d: 'A face and voice for your brand, from launch videos to ongoing campaigns.' },
  { t: 'Product and UGC content', d: 'Natural videos and photos that show your product in real use.' },
  { t: 'Modeling and photoshoots', d: 'Fashion, beauty and lifestyle shoots, in studio or on location.' },
  { t: 'Video editing', d: 'Clean, well-paced edits for events, churches, brands and social media.' },
  { t: 'Social media management', d: 'Content plans, posting and community care, so your pages stay active.' },
  { t: 'Digital marketing', d: 'Campaign ideas and content that match your audience and your goals.' },
];
