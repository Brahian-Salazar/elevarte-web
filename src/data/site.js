
const WHATSAPP_NUMBER = '573216898991'

export const siteConfig = {
  brand: {
    name: 'ElevArte',
    slogan: 'Vuela sin límites',
    description:
      'Arte, movimiento y bienestar para descubrir tu fuerza, expresar tu esencia y superar tus límites.',
  },

  location: {
    cities: ['Manizales', 'Villamaría'],
    department: 'Caldas',
    country: 'Colombia',
  },

  contact: {
    whatsappNumber: WHATSAPP_NUMBER,
    whatsappUrl: `https://wa.me/${WHATSAPP_NUMBER}`,
  },

  navigation: [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Clases', href: '#clases' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Contacto', href: '#contacto' },
  ],
}
