export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Blueprint Web Dev",
  description: "Professional Web Development Services",
  navItems: [
    {
      label: "Home",
      href: "/#home",
    },
    {
      label: "About",
      href: "/#about"
    },
    {
      label: "Services",
      href: "/#services",
    },
    {
      label: "Contact Us",
      href: "/#contact",
    },
  ],
  links: {
    facebook: "https://www.facebook.com/bivensblueprint",
    instagram: "https://www.instagram.com/bivensjeremy",
    business: "https://www.bivensblueprint.com",
    linkedin: "https://www.linkedin.com/in/bivensjeremy",
    business2: "https://www.blueprintwebdev.com"
  },
  company: {
    phone: "478-280-8388",
    address: ["779 Fiveash Rd", "Oakfield, GA 31772"],
    email: "admin@bivensblueprint.com",
    lead: "https://bivensblueprintllc.hbportal.co/public/blueprintwebdevleadform"
  }
};
