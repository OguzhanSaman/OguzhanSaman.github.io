import logo from "@/images/resources/koksalpartnerslogowh.png";

const home = {
  id: 1,
  name: "Ana Sayfa",
  href: "/",
};

export const servicesSubNavItems = [
  { id: 1, name: "Services", href: "/hizmetler" },
  { id: 2, name: "Services Two", href: "/services-2" },
  { id: 3, name: "Services Three", href: "/services-3" },
  { id: 4, name: "Kişisel Verilerin Korunması", href: "/kisisel-verilerin-korunmasi" },
  { id: 5, name: "Bilişim Hukuku", href: "/bilisim-hukuku" },
  { id: 6, name: "İş Hukuku", href: "/is-hukuku" },
  { id: 7, name: "Şirketler ve Sözleşmeler Hukuku", href: "/sirketler-ve-sozlesmeler-hukuku" },
  { id: 8, name: "Gayrimenkul ve İnşaat Hukuku", href: "gayrimenkul-ve-insaat-hukuku" },
  { id: 9, name: "Telekominikasyon Hukuku", href: "/telekominikasyon-hukuku" },
];

export const navItems = [
  home,
  {
    id: 3,
    name: "Hakkımızda",
    href: "/hakkimizda",
    subNavItems: [

    ],
  },
  {
    id: 6,
    name: "Ekibimiz",
    href: "/ekip",
  },
  {
    id: 2,
    name: "Çalışma Alanlarımız",
    href: "/hizmetler",
  },

  {
    id: 5,
    name: "Haberler ve Yayınlar",
    href: "/haberler-ve-yayinlar",
  },

  {
    id: 7,
    name: "İletişim",
    href: "/iletisim",
    subNavItems: [
      // { id: 3, name: "Testimonials", href: "/testimonials" },
      { id: 1, name: "SSS", href: "/faq" },
      { id: 2, name: "Kariyer", href: "/kariyer" },
    ],
  },
];

const socials = [
  {
    id: 1,
    icon: "fab fa-twitter",
    href: "#",
  },
  {
    id: 2,
    icon: "fab fa-facebook-square",
    href: "#",
  },
  {
    id: 3,
    icon: "fab fa-pinterest-p",
    href: "#",
  },
  {
    id: 4,
    icon: "fab fa-instagram",
    href: "#",
  },
];

const headerData = {
  logo,
  navItems,
  socials,
};

export default headerData;
