// import image1 from "@/images/blog/yayin-1.jpg";
// import image2 from "@/images/blog/yayin-2.jpg";
// import image3 from "@/images/blog/yayin-3.jpg";
// import image4 from "@/images/blog/yayin-4.jpg";
// import image5 from "@/images/blog/yayin-5.jpg";

import { inputs } from "./contact";
import { socials } from "./teamSection";

export const newsOne = {
  tagline: "Güncel Yayınlar",
  title: "Yayınlar ve Haberler",
  newsData: [

  ],
};
// to add HTML tags from the data section. I have defined a dynamicContent array in the newsSidebar object. This array contains different types of content such as paragraphs, lists, headers, and images. I will use this dynamicContent array to render the HTML tags in the NewsDetailsLeft component.
export const newsSidebar = {
  newses: [
    {
      id: 1,
      subtitle: "Makale",
      date: "2023",
      slug: "tasimacilik-faaliyetlerinde-arac-ici-kameralar-araciligiyla-calisanlarin-izlenmesi",
      title: "Taşımacılık Faaliyetlerinde Araç İçi Kameralar Aracılığıyla Çalışanların İzlenmesi",
      text: "Günümüzde elektronik ticaretin yaygınlaşmasıyla birlikte posta hizmeti sunan şirketlerin yoğunluğu ve önemi de aynı oranda artmıştır. Peki taşımacılık faaliyetlerinin yerine getirilmesi sırasında kargo şirketlerinin Kişisel Verilerin Korunması Kanunu kapsamında yükümlülükleri nelerdir? Araç içi kameralar aracılığıyla yürütülen kişisel veri işleme faaliyetlerin ölçülülük ilkesine uygun olması için alınması gereken aksiyonlar nelerdir? Bu sorular ve daha fazlasının cevabı bu ayki blog yazımızda!",
      dynamicContent: [
      {type: "paragraph", content: "Araç içi kamera aracılığıyla şoför görüntülerini işleme faaliyetini gerçekleştirmek için açık rıza alınması gerekli midir? Yoksa KVKK m.5/2’de yer alan hukuki sebepler uyarınca bu veri işleme faaliyeti gerçekleştirilebilir mi?İş Sağlığı ve Güvenliği Kanunu 4. maddesine göre “İşveren, çalışanların işle ilgili sağlık ve güvenliğini sağlamakla yükümlü olup bu çerçevede; b) İşyerinde alınan iş sağlığı ve güvenliği tedbirlerine uyulup uyulmadığını izler, denetler ve uygunsuzlukların giderilmesini sağlar.” Bu maddeye göre de işveren çalışanların güvenliğini sağlamakla yükümlüdür. Bu yükümlülük hem işçinin kişisel haklarının ihlalini önlemek ve korumak hem de çalışanların güvenliği dahil olmak üzere işyerindeki işleyiş ve düzeni sağlamak yükümlülüğü olduğu şeklinde yorumlanmalıdır. Öncelikle değerlendirilmesi gereken hususlar arasında; veri sorumlusunun meşru menfaati, ilgili kişinin temel hak ve özgürlükleri üzerinde kişisel verinin işlenmesinin yaratacağı etki ile duruma ve olayın mahiyetine göre farklılık gösterecek olan dengeler (üstün gelen menfaatin ve hakkın değerlendirilmesi) bulunmaktadır. Veri sorumlusunun meşru menfaati, gerçekleştirilecek olan işleme sonucunda elde edeceği çıkara ve faydaya yöneliktir. Veri sorumlusunun elde edeceği fayda; meşru, ilgili kişinin temel hak ve özgürlüğü ile yarışabilecek düzeyde etkin, belirli ve halihazırda mevcut olan bir menfaatine ilişkin olmalıdır. Veri sorumlusunun gerçekleştirdiği güncel aktivitelerle ilişkili ve ona yakın gelecekte fayda sağlayacak bir işlem olması gerekmektedir. Veri sorumlusunun elde edeceği fayda; meşru, ilgili kişinin temel hak ve özgürlüğü ile yarışabilecek düzeyde etkin, belirli ve halihazırda mevcut olan bir menfaatine ilişkin olmalıdır. Meşru menfaat için dikkat edilmesi gereken hususlar;"},
      {type: "list", content: ["ahmet", "mehmet", "veli"]},
      // {type: "header", content: "1.1 Header"},
      // {type: "image", content: image1},
    ],
      tags: ["Consulting", "marketing"],
    },
    {
      id: 2,
      subtitle: "Makale",
      date: "2023",
      slug: "hashlenmis-veri-anonim-veri-midir",
      title: "‘Hash’lenmiş Veri Anonim Veri Midir?",
      text: "Hashlenmiş verinin anonim veri niteliğinde olup olmadığının tespit edilebilmesi için öncelikle ‘hash’leme kavramını irdelemekte fayda vardır. Hashleme herhangi bir uzunluktaki girdiyi alarak onu bir dizi algoritma ile şifreli çıktı haline dönüştürme işlemine verilen isimdir. Uzmanlar hashleme kavramını genellikle tek taraflı bir şifreleme yöntemi olarak tanımlamaktadır. Bu işlem sonrasında elde edilen değere ise ‘’hash değeri’’ denir.",
      dynamicContent: [],
      tags: ["Consulting", "marketing"],
    },
    {
      id: 3,
      subtitle: "Makale",
      date: "2023",
      slug: "odeme-ve-elektronik-para-kuruluslarinin-masak-mevzuati-kapsaminda-yukumlulukleri",
      title: "Ödeme ve Elektronik Para Kuruluşlarının Masak Mevzuatı Kapsamında Yükümlülükleri",
      text: "Ulusal ve uluslararası alanda yaşanan ekonomik ve teknolojik gelişmeler, suç gelirlerinin aklanması ve terörün finansmanı riskini arttırmıştır. Bu yüzden pek çok ülkede olduğu gibi ülkemizde de yasal düzenlemeler yapılmakta ve var olan uygulamalar güçlendirilmektedir. Bu kapsamda suç gelirlerinin aklanması, terörizm finansmanı gibi mali suçların işlenmesinin önlenmesi amacıyla bir denetim ihtiyacı ortaya çıkmıştır. Bu denetim ihtiyacı 19.11.1996 tarih ve 22822 sayılı Resmi Gazete’de yayımlanarak yürürlüğe giren 4208 sayılı Karaparanın Aklanmasının Önlenmesine Dair Kanun ile hukuki bir kimlik kazanmış ve kanunun uygulanmasına yönelik olarak çıkarılan yönetmelikler ile Türk finansal sistemi ilk kez bu derece doğrudan yasal düzenlemelere tabi hale gelmiştir.",
      dynamicContent: [],
      tags: ["Consulting", "marketing"],
    },
    {
      id: 4,
      subtitle: "Makale",
      date: "2023",
      slug: "chatgpt-nin-guncel-gelismeleri-gdpr-ve-kvkk-kapsaminda-degerlendirilmesi",
      title: "ChatGPT’nin Güncel Gelişmeleri & GDPR ve KVKK Kapsamında Değerlendirilmesi",
      text: "Bildiğiniz gibi sıklıkla duyduğumuz, OpenAl tarafından geliştirilen yapay zekaya dayalı sohbet robotu ChatGPT bu sıralar gündemimizi oldukça meşgul ediyor. Peki ChatGPT nedir ve nasıl kullanılır? ChatGPT’nin kişisel veri güvenliği açısından riskleri nelerdir? ChatGPT Avrupa Veri Koruma Tüzüğü (‘‘GDPR’’) ve 6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) kapsamında nasıl değerlendirilir? Bu gibi sorular ve daha fazlasının cevaplarından bu ayki blog yazımızda bahsedeceğiz!",
      dynamicContent: [],
      tags: ["Consulting", "marketing"],
    },
    {
      id: 5,
      subtitle: "Makale",
      date: "2023",
      slug: "is-sozlesmesi-devam-ederken-isciye-yapilan-kidem-tazminati-odemeleri",
      title: "İş Sözleşmesi Devam ederken İşçiye Yapılan Kıdem Tazminatı Ödemeleri",
      text: "İşçi ve işveren arasındaki iş sözleşmesinin son bulması ile gündeme gelen kıdem tazminatı, işçiye işverenine bağlılığı dolayısıyla ödenen bir yıpranma tazminatıdır. Yargıtay kıdem tazminatını, “işverene ait işyeri ya da işyerlerinde belli bir süre çalışmış olan işçinin, işini kaybetmesi halinde, işinde yıpranması ve yeni bir iş edinmede karşılaşacağı güçlükler ve işverene sağladığı katkı göz önüne alınarak, geçmiş hizmetlerine karşılık olmak üzere, kanuni esaslar dahilinde işverence işçiye verilen toplu para” olarak tanımlamaktadır.",
      dynamicContent: [],
      tags: ["Consulting", "marketing"],
    },
  ],
};

