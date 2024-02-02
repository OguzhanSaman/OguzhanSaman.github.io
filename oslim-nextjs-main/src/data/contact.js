import bg from "@/images/shapes/contact-one-shape.png";

export const inputs = [
  {
    name: "name",
    type: "text",
    placeholder: "İsim-Soyisim",
    required: true,
  },
  {
    name: "email",
    type: "email",
    placeholder: "Email",
    required: true,
  },
  {
    name: "phone",
    type: "text",
    placeholder: "Telefon",
    required: true,
  },
  {
    name: "subject",
    type: "text",
    placeholder: "Konu",
    required: true,
  },
];

const common = {
  phone: "+90- ( 212 ) 700 - 1833",
  phoneHref: "+902127001833",
  email: "info@koksalpartners.com",
};

export const contactOne = {
  bg,
  tagline: "İletişim Formu",
  title: "Köksal & Partners ile iletişime geçin",
  text: "Köksal & Partners Avukatlık Ortaklığı olarak, İletişim/Rezervasyon Formu aracılığıyla kişisel verilerinizi; iletişim faaliyetlerinin yürütülmesi, mal/hizmet satış süreçlerinin yürütülmesi ve Aydınlatma Metni’nde sayılan diğer amaçlarla sınırlı olarak işlemekteyiz. Ayrıca kişisel verileriniz, formu doldurmanız ve “Gönder” butonuna tıklamanız durumunda kişisel verilerinizin yurt dışında yerleşik Digital Ocean sunucularına aktarılmasına açık rıza verdiğiniz kabul edilecektir. Kişisel verilerinizin işlenmesine ve aktarılmasına ilişkin detaylı bilgi için Aydınlatma Metni’ni inceyebilirsiniz.",
  timeRange: "08:30 - 18:30",
  inputs,
  bottomTitle: "Ofislerimiz",
  contacts: [

    {
      id: 2,
      title: "İstanbul",
      text: "Abdullah Ağa Cd. Merdiven Çıkmazı Sk. No:2 Üsküdar",
      phone: "+90 212 700 18 33",
    },
    {
      id: 3,
      title: "Ankara",
      text: "Kavaklıdere Caddesi",

    },
  ],
};

export const contactPage = {
  tagline: "İletişime geçin",
  title: "Sorularınızı İletin",
};

export const contactDetails = {
  title: "İletişime Geçin",
  text: "Hafta içi her gün 08:30 - 18:30 saatleri arasında bize ulaşabilirsiniz.",
  address: "Burhaniye AbdullahAğa cad. Merdiven Çıkmazı Sok. No:2 Üsküdar/İstanbul",
  contactIcon: "icon-phone1",
  ...common,
};
