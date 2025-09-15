import { LuBrickWall, LuFacebook, LuGlobe, LuInstagram, LuLinkedin, LuMonitorCog, LuPalette, LuPanelsTopLeft, LuRocket, LuSendHorizontal, LuSmartphone, LuSprout, LuZap } from "react-icons/lu";
import { siteConfig } from "./site";


export const featuresData = [
    {
        id: 1,
        title: 'Modular Design',
        desc: 'Built with reusable components that adapt to your content and style',
        icon: LuBrickWall,
    },
    {
        id: 2,
        title: 'Scalable Architecture',
        desc: 'Powered by modern frameworks and optimized for performance.',
        icon: LuMonitorCog,
    },
    {
        id: 3,
        title: 'Brand Integration',
        desc: 'Fonts, colors, and visuals customized to match your identity',
        icon: LuPalette,
    },
    {
        id: 4,
        title: 'Growth-Ready Systems',
        desc: 'From onboarding flows to client portals, we design for long-term success.',
        icon: LuSprout
    }
];

export const pricingPlans = [
    {
        name: "Template",
        price: "$900",
        desc: "A professional multi-page site built on a proven template",
        features: ["Polished neutral layout", "Core pages included", "Brand-ready structure"],
        icon: LuPanelsTopLeft
    },
    {
        name: "Growth",
        price: "$3,000",
        desc: "Fully custom multi-page site tailored to your brand",
        features: ["Full brand integration", "Custom components", "Scalable for expansion"],
        featured: true,
        icon: LuRocket
    },
    {
        name: "Conversion",
        price: "$2,800",
        desc: "A high-impact, single page site designed to generate leads.",
        features: ['Single-page, conversion-focused layout', 'Strategic messaging & CTAs', 'Lead capture integrations', 'Optimized for fast loading & clarity'],
        icon: LuZap
    },
];

export const FAQData = [
    {
        id: 1,
        q: 'Can this template be customized to match my brand?',
        a: 'Absolutely. Fonts, colors, layout, and content are all adaptable.'
    },
    {
        id: 2,
        q: 'Is this site mobile-friendly?',
        a: 'Yes. Every section is responsive and optimized for all devices.'
    },
    {
        id: 3,
        q: 'What if I need more pages or features?',
        a: 'Fonts, colors, layout, and content modifications are available to match your brand. Check out our other template sites for more options.'
    },
    {
        id: 4,
        q: 'What is included with the template site?',
        a: 'Core pages (Home, About, Services, Contact), a customizable Hero section, and a scalable layout designed for future growth.'
    },
    {
        id: 5,
        q: 'Do you offer ongoing support or maintenance?',
        a: 'Yes. We offer a maintenance plan that include updates, hosting, and support.'
    },
    {
        id: 6,
        q: 'How do I get started?',
        a: 'Just reach out via the contact form on this page! We will walk you through the next steps and help you choose the right package.'
    }
];

export const footerData = [
    {
        id: 1,
        link: siteConfig.links.facebook,
        image: LuFacebook,
        alt: 'Facebook Icon',
        color: '#1877F2'
    },
    {
        id: 2,
        link: siteConfig.links.instagram,
        image: LuInstagram,
        alt: 'Instagram Icon',
        color: '#DD2A7B'
    },
    {
        id: 3,
        link: siteConfig.links.linkedin,
        image: LuLinkedin,
        alt: 'LinkedIn Icon',
        color: '#0072B1'
    },
    {
        id: 4,
        link: siteConfig.links.business,
        image: LuGlobe,
        alt: 'Blueprint logo',
        color: '#1E3A8A'
    },
    {
        id: 5,
        link: `mailto:${siteConfig.company.email}`,
        image: LuSendHorizontal,
        alt: 'Mail Icon',
        color: '#cc0000'
    },
    {
        id: 6,
        link: `tel:${siteConfig.company.phone}`,
        image: LuSmartphone,
        alt: 'Phone Icon',
        color: '#374151'
    }
]