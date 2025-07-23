export const OrganizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Goodhelper",
  url: "https://www.goodhelper.com.sg/",
  logo: "https://www.goodhelper.com.sg/gh_logo_BW.jpg",
  sameAs: [
    "https://www.facebook.com/GoodhelperSG",
    "https://www.instagram.com/gh.goodhelper",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+65 1234 5678",
    contactType: "customer service",
    areaServed: "SG",
    availableLanguage: "English",
  },
};
