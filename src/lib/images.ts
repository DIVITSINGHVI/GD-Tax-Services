/**
 * All website photos are loaded from Pexels (free stock photos, https://www.pexels.com/license/),
 * so the project does not need a `public/images` folder.
 * To change a photo, find one on pexels.com and replace the number (the photo ID from its URL).
 */
const pexels = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1600`;

export const IMAGES = {
  hero: pexels(8296947), // laptop, calculator and green folders on a desk
  about: pexels(12630109), // coconut palms and green farmland
  tax: pexels(8962520), // income statement, calculator and tax notes
  business: pexels(35704494), // local market shop and owner
  pf: pexels(31112222), // professional working at a computer
  passport: pexels(9064799), // filling in an application form on a clipboard
  insurance: pexels(7736032), // filling in an insurance policy document
} as const;
