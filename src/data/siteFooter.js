import logo from "@/images/resources/logo-1.png";
import bg from "@/images/shapes/site-footer-shape-1.png";

const footerData = {
  bg,
  logo,
  aboutText: "Bizi Takip Edin!",
  socials: [
    {
      id: 1,
      icon: "fab fa-linkedin",
      href: "https://www.linkedin.com/company/2765187/admin/feed/posts/",
    },
    {
      id: 2,
      icon: "fab fa-twitter",
      href: "https://twitter.com/KoksalPartners",
    },
    {
      id: 3,
      icon: "fas fa-envelope",
      href: "mailto:info@koksalpartners.com",
    },
    {
      id: 4,
      icon: "fab fa-instagram",
      href: "https://www.instagram.com/koksalpartners/?hl=en",
    },
  ],
  links: [
    {
      id: 1,
      text: "Hakkımızda",
      href: "/hakkimizda",
    },
    {
      id: 2,
      text: "Ekibimiz",
      href: "/ekip",
    },
    {
      id: 3,
      text: "Yayınlarımız",
      href: "/blog",
    },
    {
      id: 5,
      text: "İletişim",
      href: "/iletisim",
    },
    {
      id: 6,
      text: "Kariyer",
      href: "/kariyer",
    },
    {
      id: 7,
      text: "Aydınlatma Metni",
      href: "/aydinlatma-metni",
    },
    {
      id: 8,
      text: "Çerezler",
      href: "/cerezler",
    },
    {
      id: 9,
      text: "Yardım",
      href: "/iletisim",
    },
  ],
  newsletterText: "Bültenimize abone olun!",
  address: "Abdullah Ağa Cd. Merdiven Çıkmazı Sk. No:2 Üsküdar/İstanbul",
  phone: "+90 212 700 18 33",
  phoneHref: "+90 212 700 18 33",
  email: "info@koksalpartners.com",
  author: "Köksal & Partners",
  year: new Date().getFullYear(),
};

export default footerData;
