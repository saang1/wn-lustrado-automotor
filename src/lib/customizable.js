import { Car, Wrench, PaintBucket, Eye, Hammer, Palette } from 'lucide-react';

const data = {
    name: "WN Lustrado Automotor",
    address: "Calle 123, Ciudad",
    province: "Buenos Aires",
    phone: "+54 9 11 3119-2187",

    schedule: {
        lav: "9:00 - 18:00",
        sab: "",
        dom: ""
    },

    wspPhone: 5491131192187,
    email: "info@tallerdedetailing.com",
    instagram: "tallerdedetailing",
    facebook: "https://www.facebook.com/tallerdedetailing/",
    tiktok: "https://www.tiktok.com/@tallerdedetailing",
    youtube: "https://www.youtube.com/@tallerdedetailing",
    mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.2657944668447!2d-58.64765222456908!3d-34.653229859297836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc7b1aa1f4f77%3A0x8b8b8b8b8b8b8b8b!2sCalle%20Principal%20123%2C%20Tu%20Ciudad!5e0!3m2!1ses!2sar!4v1699999999999!5m2!1ses!2sar",
    review: "https://maps.app.goo.gl/E7tpbgHghBP62yz16"
}


export const services = [
    {
        title: 'Tratamientos Sonax Certificado',
        description: 'Productos profesionales Sonax para el cuidado integral de tu vehículo con certificación oficial.',
        price: 'Consultar',
        features: ['Productos certificados Sonax', 'Tratamientos profesionales', 'Garantía de calidad', 'Resultados duraderos'],
        icon: Car
    },
    {
        title: 'Limpieza de Interior',
        description: 'Limpieza profunda y detallada del interior de tu vehículo, tapizados, cueros y plásticos.',
        price: 'Desde $12.000',
        features: ['Aspirado completo', 'Limpieza de tapizados', 'Acondicionamiento de cueros', 'Desinfección'],
        icon: Wrench
    },
    {
        title: 'Service de Pintura/Pulidos',
        description: 'Corrección de pintura profesional para eliminar rayones y devolver el brillo original.',
        price: 'Desde $25.000',
        features: ['Pulido profesional', 'Corrección de defectos', 'Eliminación de rayones', 'Restauración del brillo'],
        icon: PaintBucket
    },
    {
        title: 'Restauración de Ópticas',
        description: 'Recuperá la transparencia y claridad de las ópticas de tu auto para mayor seguridad.',
        price: 'Desde $8.000',
        features: ['Lijado progresivo', 'Pulido especializado', 'Protección UV', 'Mayor visibilidad'],
        icon: Eye
    },
    {
        title: 'Sacabollos',
        description: 'Reparación de abolladuras sin pintura, manteniendo el acabado original de fábrica.',
        price: 'Desde $5.000',
        features: ['Sin pintura', 'Técnica PDR', 'Mantiene valor original', 'Reparación invisible'],
        icon: Hammer
    },
    {
        title: 'Ploteos',
        description: 'Personalización y protección de tu vehículo con ploteos de alta calidad y diseños únicos.',
        price: 'Consultar',
        features: ['Diseños personalizados', 'Materiales premium', 'Protección de pintura', 'Acabado profesional'],
        icon: Palette
    }
];

export const reviews = [
    {
        author_name: 'Carlos Rodríguez',
        rating: 5,
        relative_time_description: 'hace 2 semanas',
        text: 'Excelente servicio! Mi BMW quedó como nuevo después del coating cerámico. La atención es muy profesional y el resultado superó mis expectativas. Totalmente recomendable.'
    },
    {
        author_name: 'María González',
        rating: 5,
        relative_time_description: 'hace 1 mes',
        text: 'Increíble el trabajo que hicieron con mi Audi. El pulido eliminó todos los rayones y el auto brilla como el primer día. Definitivamente van a ser mi taller de confianza.'
    },
    {
        author_name: 'Alejandro Fernández',
        rating: 5,
        relative_time_description: 'hace 3 semanas',
        text: 'El servicio de PPF es lo mejor que le pude hacer a mi auto nuevo. La protección es invisible y me da tranquilidad para el día a día. Muy profesionales en todo momento.'
    }
];



export default data;