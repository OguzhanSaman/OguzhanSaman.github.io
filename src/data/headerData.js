import logo from "@/images/resources/koksalpartnerslogowh.png";
import logoblck from "@/images/resources/koksalpartnerslogobl.png";

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
  { id: 9, name: "Telekomünikasyon, Medya ve Eğlence Hukuku", href: "/telekominikasyon-hukuku" },
  { id: 10, name: "Sağlık Hukuku", href: "/saglik-hukuku" },
  { id: 11, name: "Girişimcilik ve Start-up Hukuku", href: "/girisimcilik-ve-startup-hukuku" },
  { id: 12, name: "İcra ve İflas Hukuku", href: "/icra-ve-iflas-hukuku" },
  { id: 13, name: "E-Ticaret, Fintek ve Ödeme Hizmetleri", href: "/e-ticaret-fintek-ve-odeme-hizmetleri" },
  { id: 14, name: "Blockchain ve Kripto Para", href: "/blockchain-ve-kripto-para" },
  { id: 15, name: "Yabancılar ve Vatandaşlık Hukuku", href: "/yabancilar-ve-vatandaslik-hukuku" },
  { id: 16, name: "Reklam Hukuku", href: "/reklam-hukuku" },
  { id: 14, name: "Fikri ve Sınai Mülkiyet Hukuku", href: "/fikri-ve-sinai-mulkiyet-hukuku" },
  { id: 15, name: "Yapay Zeka Hukuku", href: "/yapay-zeka-hukuku" },
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
    href: "/calisma-alanlarimiz",
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
      // { id: 1, name: "SSS", href: "/faq" },
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
  logoblck,
  navItems,
  socials,
};

export default headerData;
