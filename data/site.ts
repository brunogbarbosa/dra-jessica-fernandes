export type Procedure = { name: string; description: string; image: string };
export type Testimonial = { quote: string; name: string };
export const site = {
  name: 'Jéssica Fernandes', monogram: 'JF',
  headline: 'A beleza de continuar sendo você.',
  cro: 'CRF-SP 101434',
  bio: 'Dra. Jéssica Fernandes. Harmonização facial em Campinas, SP. Um olhar para a beleza natural, com preenchimentos, toxina botulínica e bioestimuladores. CRF-SP 101434.',
  education: [] as string[],
  specialties: ['Harmonização facial', 'Preenchimentos', 'Toxina botulínica', 'Bioestimuladores'],
  phone: '+55 19 99875-5726', whatsapp: '5519998755726',
  whatsappUrl: 'https://wa.me/5519998755726?text=Ol%C3%A1%2C%20Dra.%20J%C3%A9ssica!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.',
  address: 'Campinas, SP', professionalPhilosophy: 'Elevando a beleza natural.',
  instagram: 'https://www.instagram.com/jessicafernandes/', instagramHandle: '@jessicafernandes',
  philosophy: ['SEUS TRAÇOS.', 'SUA ESSÊNCIA.', 'SUA VERSÃO.'],
  colors: { paper: '#F5EFE6', ink: '#30221C', taupe: '#A77B59', champagne: '#D6B28C', dark: '#211813', wine: '#30221C', muted: '#756357', soft: '#E8D9C8', light: '#FCF8F2', panel: '#493328' },
  images: { hero: '/images/jessica-hero.webp', essence: '/images/jessica-essencia.webp', about: '/images/jessica-sobre.webp', beauty: '/images/jessica-experiencia.webp' },
  procedures: [] as Procedure[], office: [] as { src: string; alt: string }[], testimonials: [] as Testimonial[],
  results: { enabled: true, items: [
    { image: '/images/resultado-01.webp', label: 'Harmonia em cada ângulo', alt: 'Registro 01: comparação lado a lado de antes e depois, em visão de três quartos.', orientation: 'horizontal', beforeShare: 628/1284, comparisonRatio: 1284/1574 },
    { image: '/images/resultado-02.webp', label: 'A delicadeza dos detalhes', alt: 'Registro 02: comparação lado a lado de antes e depois, em visão de três quartos.', orientation: 'horizontal', beforeShare: 635/1284, comparisonRatio: 1284/1583 },
    { image: '/images/resultado-03.webp', label: 'Traços e proporções', alt: 'Registro 03: comparação lado a lado de antes e depois do rosto.', orientation: 'horizontal', beforeShare: 639/1284, comparisonRatio: 1284/1583 },
    { image: '/images/resultado-04.webp', label: 'Beleza em sua singularidade', alt: 'Registro 04: comparação lado a lado de antes e depois do rosto.', orientation: 'horizontal', beforeShare: 630/1284, comparisonRatio: 1284/1568 },
    { image: '/images/resultado-05.webp', label: 'Naturalidade em perspectiva', alt: 'Registro 05: comparação lado a lado de antes e depois, em visão de três quartos.', orientation: 'horizontal', beforeShare: 639/1284, comparisonRatio: 1284/1596 },
  ] },
  seo: { title: 'Dra. Jéssica Fernandes | Harmonização Facial em Campinas', description: 'Elevando a beleza natural. Conheça a Dra. Jéssica Fernandes, veja registros reais e agende sua avaliação em Campinas pelo WhatsApp.', url: '' },
};
export const appointmentUrl = site.whatsappUrl;
