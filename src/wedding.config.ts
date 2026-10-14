// =================================================================
//  ROYAL WEDDING INVITATION — CENTRAL CONFIGURATION
//  Edit everything here. No other file needs to change for content.
// =================================================================

export interface WeddingEventConfig {
  id: string;
  title: string;
  icon: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  description: string;
  image: string;
}

export interface WeddingConfig {
  brideName: string;
  groomName: string;
  brideInitial: string;
  groomInitial: string;
  initials: string;
  envelopeTeaser: string;
  heroPretext: string;
  heroSubtext: string;
  weddingDate: string;
  weddingTime: string;
  weddingTimezone: string;
  weddingDateDisplay: string;
  storyTitle: string;
  storyParagraphs: string[];
  heroBackground: string;
  storyImage1: string;
  storyImage2: string;
  events: WeddingEventConfig[];
  galleryImages: { src: string; alt: string }[];
  venueTitle: string;
  venueName: string;
  venueAddress: string;
  venueMapsLink: string;
  rsvpHeading: string;
  rsvpSubtext: string;
  whatsappNumber: string;
  whatsappMessage: string;
  musicSrc: string;
  musicTitle: string;
  shareTitle: string;
  shareDescription: string;
  shareImage: string;
}

export const weddingConfig: WeddingConfig = {
  // -------- COUPLE --------
  brideName: 'Srashti Agrawal',
  groomName: 'Tanmay Goyal',
  brideInitial: 'S',
  groomInitial: 'T',
  initials: 'S & T',

  // -------- TAGLINES --------
  envelopeTeaser: 'A Royal Celebration of Love',
  heroPretext: 'Together with their families',
  heroSubtext: 'Joyfully invite you to celebrate the beginning of their forever',

  // -------- WEDDING DATE & COUNTDOWN --------
  // Use ISO 8601. The countdown and all displays derive from this.
  // Ceremony time below is the DEFAULT placeholder — replace with the
  // confirmed time once the pandit/poojari finalises the muhurat.
  weddingDate: '2026-11-30',
  // Time in 24h format. Default 17:30 = 5:30 PM (evening muhurat placeholder)
  weddingTime: '17:30',
  // IANA timezone for accurate countdown. Default IST.
  weddingTimezone: 'Asia/Kolkata',
  weddingDateDisplay: '30 November 2026',

  // -------- OUR STORY --------
  storyTitle: 'A Story Written in the Stars',
  storyParagraphs: [
    'Every great love story has a beginning — a quiet moment when two souls first cross paths and the universe begins to conspire in their favour. This is the story of Srashti and Tanmay, two hearts destined to find each other.',
    'Replace these words with the real story of how you met, the moments that made you fall in love, and the journey that brought you to this beautiful day. Share your laughter, your adventures, and the dreams you hold for the years ahead.',
    'As you stand on the threshold of forever, surrounded by the love and blessings of family and friends, know that this is only the first chapter of a lifetime of happiness yet to be written.',
  ],

  // -------- EVENT IMAGES (Pexels placeholders) --------
  // Used as default imagery until couple's real photos are uploaded.
  heroBackground:
    'https://images.pexels.com/photos/33726144/pexels-photo-33726144.jpeg?auto=compress&cs=tinysrgb&w=1920',
  storyImage1:
    'https://images.pexels.com/photos/25742763/pexels-photo-25742763.jpeg?auto=compress&cs=tinysrgb&w=900',
  storyImage2:
    'https://images.pexels.com/photos/38147801/pexels-photo-38147801.jpeg?auto=compress&cs=tinysrgb&w=900',

  // -------- WEDDING CELEBRATIONS --------
  events: [
    {
      id: 'haldi',
      title: 'Haldi Ceremony',
      icon: 'sun',
      date: '',
      time: '',
      venue: '',
      address: '',
      description:
        'A joyous morning ritual where turmeric paste is applied to the bride and groom, blessing them with radiant glow and prosperity for the journey ahead.',
      image:
        'https://images.pexels.com/photos/33078527/pexels-photo-33078527.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 'mehendi',
      title: 'Mehendi Celebration',
      icon: 'hand',
      date: '',
      time: '',
      venue: '',
      address: '',
      description:
        'An afternoon of artistry and celebration as intricate henna designs are drawn on the bride and guests, symbolising love, luck, and the bond of marriage.',
      image:
        'https://images.pexels.com/photos/5776642/pexels-photo-5776642.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 'sangeet',
      title: 'Sangeet Evening',
      icon: 'music',
      date: '',
      time: '',
      venue: '',
      address: '',
      description:
        'An evening of music, dance, and revelry as both families come together to celebrate with performances, laughter, and unforgettable memories.',
      image:
        'https://images.pexels.com/photos/26558729/pexels-photo-26558729.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 'wedding',
      title: 'Wedding Ceremony',
      icon: 'rings',
      date: '2026-11-30',
      time: '17:30',
      venue: '',
      address: '',
      description:
        'The sacred union of two souls, witnessed by family and friends, as Srashti and Tanmay take their vows around the holy fire and begin their journey as partners for life.',
      image:
        'https://images.pexels.com/photos/34079355/pexels-photo-34079355.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ],

  // -------- GALLERY --------
  galleryImages: [
    { src: 'https://images.pexels.com/photos/33485963/pexels-photo-33485963.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Indian palace courtyard wedding setup' },
    { src: 'https://images.pexels.com/photos/25742763/pexels-photo-25742763.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Indian bride and groom at palace' },
    { src: 'https://images.pexels.com/photos/38147801/pexels-photo-38147801.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Indian couple in traditional wedding attire' },
    { src: 'https://images.pexels.com/photos/33417234/pexels-photo-33417234.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Opulent outdoor wedding venue red and gold' },
    { src: 'https://images.pexels.com/photos/14395559/pexels-photo-14395559.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Indian wedding stage with golden columns' },
    { src: 'https://images.pexels.com/photos/36652869/pexels-photo-36652869.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Marigold garlands hanging against sky' },
    { src: 'https://images.pexels.com/photos/19998697/pexels-photo-19998697.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Indian wedding under nighttime lights' },
    { src: 'https://images.pexels.com/photos/33485965/pexels-photo-33485965.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Grand palace wedding with floral arrangements' },
    { src: 'https://images.pexels.com/photos/4128977/pexels-photo-4128977.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Traditional Indian wedding ceremony rituals' },
  ],

  // -------- VENUE --------
  venueTitle: 'Join Us for Our Celebration',
  venueName: '',
  venueAddress: '',
  venueMapsLink: '',

  // -------- RSVP --------
  rsvpHeading: 'Your presence will make our celebration even more special.',
  rsvpSubtext: 'Kindly let us know if you will be joining us on our special day.',
  // WhatsApp number in international format without +, e.g. 919876543210
  // Leave empty to show a placeholder button.
  whatsappNumber: '',
  whatsappMessage:
    "Namaste! We'd love to join Srashti & Tanmay's wedding celebration on 30 November 2026. Here are our details:\n\nName: \nNumber of guests: \nAttending: Yes/No",

  // -------- MUSIC --------
  // Path to audio file in /public. Leave empty to disable music.
  // Use a royalty-free / licensed track. Music stays muted/off until
  // a valid audio file is placed here AND the visitor interacts.
  musicSrc: '',
  musicTitle: 'Wedding Melody',

  // -------- SOCIAL SHARING --------
  shareTitle: 'Srashti & Tanmay — A Royal Wedding Celebration',
  shareDescription:
    'Join us on 30 November 2026 as we celebrate the beginning of our forever. A royal Indian wedding invitation from Srashti Agrawal & Tanmay Goyal.',
  shareImage: 'https://images.pexels.com/photos/33485963/pexels-photo-33485963.jpeg?auto=compress&cs=tinysrgb&w=1200',
};

export type WeddingEvent = WeddingEventConfig;
