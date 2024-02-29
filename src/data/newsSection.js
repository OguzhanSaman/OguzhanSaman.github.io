// import image1 from "@/images/blog/yayin-1.jpg";
// import image2 from "@/images/blog/yayin-2.jpg";
// import image3 from "@/images/blog/yayin-3.jpg";
// import image4 from "@/images/blog/yayin-4.jpg";
// import image5 from "@/images/blog/yayin-5.jpg";
import hash from "@/images/blog/hashdescription.jpg";

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
      {type: "header", content: "Araç içi kamera aracılığıyla şoför görüntülerini işleme faaliyetini gerçekleştirmek için açık rıza alınması gerekli midir? Yoksa KVKK m.5/2’de yer alan hukuki sebepler uyarınca bu veri işleme faaliyeti gerçekleştirilebilir mi?"},
      {type: "paragraph", content: "İş Sağlığı ve Güvenliği Kanunu 4. maddesine göre “İşveren, çalışanların işle ilgili sağlık ve güvenliğini sağlamakla yükümlü olup bu çerçevede; b) İşyerinde alınan iş sağlığı ve güvenliği tedbirlerine uyulup uyulmadığını izler, denetler ve uygunsuzlukların giderilmesini sağlar.” Bu maddeye göre de işveren çalışanların güvenliğini sağlamakla yükümlüdür. Bu yükümlülük hem işçinin kişisel haklarının ihlalini önlemek ve korumak hem de çalışanların güvenliği dahil olmak üzere işyerindeki işleyiş ve düzeni sağlamak yükümlülüğü olduğu şeklinde yorumlanmalıdır. Öncelikle değerlendirilmesi gereken hususlar arasında; veri sorumlusunun meşru menfaati, ilgili kişinin temel hak ve özgürlükleri üzerinde kişisel verinin işlenmesinin yaratacağı etki ile duruma ve olayın mahiyetine göre farklılık gösterecek olan dengeler (üstün gelen menfaatin ve hakkın değerlendirilmesi) bulunmaktadır. Veri sorumlusunun meşru menfaati, gerçekleştirilecek olan işleme sonucunda elde edeceği çıkara ve faydaya yöneliktir. Veri sorumlusunun elde edeceği fayda; meşru, ilgili kişinin temel hak ve özgürlüğü ile yarışabilecek düzeyde etkin, belirli ve halihazırda mevcut olan bir menfaatine ilişkin olmalıdır. Veri sorumlusunun gerçekleştirdiği güncel aktivitelerle ilişkili ve ona yakın gelecekte fayda sağlayacak bir işlem olması gerekmektedir. Veri sorumlusunun elde edeceği fayda; meşru, ilgili kişinin temel hak ve özgürlüğü ile yarışabilecek düzeyde etkin, belirli ve halihazırda mevcut olan bir menfaatine ilişkin olmalıdır. Meşru menfaat için dikkat edilmesi gereken hususlar;"},
      {type: "list", content: ["Veri sorumlusu işverenin elde edeceği faydanın ilgili kişinin hak ve özgürlüğü ile yarışabilecek düzeyde etkin belirli ve halihazırda mevcut olan bir menfaatine ilişkin olmalıdır.", "Elde edilecek fayda işveren veri sorumlusunun gerçekleştirdiği güncel aktivitelerle ilişkili ve ona yakın gelecekte fayda sağlayacak bir işlemle ilgili olması gereklidir. ", "Veri işleme faaliyetinde işveren veri sorumlusunun menfaati olup olmadığı belirlendikten sonra kişisel verisi işlenecek olan ilgili kişinin temel hak ve özgürlüklerinin neler olduğunun tespiti gereklidir.","Ardından denge testi yapılması gereklidir. Veri sorumlusunun meşru menfaati çok güçlü ve etkin olmadığı takdirde, ilgili kişinin hak ve menfaatleri, veri sorumlusunun meşru ancak daha az öneme sahip menfaatinden daha üstün gelebilecektir. Bu doğrultuda, ele alınacak olan meşru menfaat ciddi, önemli ve halihazırda mevcut olmalıdır."]},
      {type: "paragraph", content: "Taşımacılık faaliyetinin yürütülmesi sırasında olası bir iş kazasında şoförün kusurunun tespiti için işverenin araçta kamera bulundurmasında meşru bir menfaati vardır. Kanunun ilgili maddesi hükmü itibariyle meşru menfaate dayanılması nedeniyle açık rıza alınması şart değildir. Fakat bu sırada sürecin KVKK m.4 kapsamında genel ilkeler doğrultusunda yürütülmesi gerekmektedir."},
      {type: "header", content: "Kamera kaydı gerçekleştirilirken süreç nasıl dizayn edilmelidir? Bilgilendirme nasıl yapılmalı, konu hakkında nasıl bir prosedür izlenmelidir? Kamera cihazları nasıl konumlandırılmalıdır?"},
      {type: "paragraph", content: "Avrupa Veri Koruma Denetçisi tarafından yayımlanan Güvenlik Kameraları Rehberi bu konuda birtakım önerilerde bulunmaktadır."},
      {type: "list", content: ["Çalışanlara karşı aydınlatma yükümlülüğünün yerine getirilmesi","Araçlarda yalnızca taşıma esnasında kayıt yapılması, mesai saatleri dışında kayıt yapılmaması","Kamera kayıtlarının yalnızca kabinin içini ve yolu çekecek şekilde konumlandırılması, şoförün yüzünü çekmemesi","Kameraların ses kaydı özelliğine sahip olmaması","Kameranın görüş alanına yol dışında aracın çevresinde kalan farklı mülklerdeki insanların girmesinin engellenmesi","Görüntülerin işlendikleri amaç doğrultusunda makul bir süre saklanması"]},
      {type: "header", content: "Sonuç"},
      {type: "paragraph", content: "Araç içi kameralar kullanılması sırasında çalışanlardan açık rıza temin edilmesi zorunluluk olmasa da, KVKK m.4 kapsamında genel ilkelere uygun hareket edilmesi ve KVKK m.5/2(f) uyarınca denge testinin yapılması gerekliliktir. Veri sorumlusu olan işveren tarafından sürecin ne şekilde tasarlanacağı, faaliyetin KVKK kapsamında hukuka uygunluğunu sağlayacak unsurları etkileyecektir."}

      // {type: "header", content: "1.1 Header"},
      // {type: "image", content: image1},
    ],
      author: "Av. Bilge Ezgi Peker",
      tags: ["Araç Kameraları", "KVKK"],
    },
    {
      id: 2,
      subtitle: "Makale",
      date: "2023",
      slug: "hashlenmis-veri-anonim-veri-midir",
      title: "‘Hash’lenmiş Veri Anonim Veri Midir?",
      text: "Hashlenmiş verinin anonim veri niteliğinde olup olmadığının tespit edilebilmesi için öncelikle ‘hash’leme kavramını irdelemekte fayda vardır. Hashleme herhangi bir uzunluktaki girdiyi alarak onu bir dizi algoritma ile şifreli çıktı haline dönüştürme işlemine verilen isimdir. Uzmanlar hashleme kavramını genellikle tek taraflı bir şifreleme yöntemi olarak tanımlamaktadır. Bu işlem sonrasında elde edilen değere ise ‘’hash değeri’’ denir.",
      dynamicContent: [
        {type: "paragraph", content: "Hashlenmiş verinin anonim veri niteliğinde olup olmadığının tespit edilebilmesi için öncelikle ‘hash’leme kavramını irdelemekte fayda vardır. Hashleme herhangi bir uzunluktaki girdiyi alarak onu bir dizi algoritma ile şifreli çıktı haline dönüştürme işlemine verilen isimdir. Uzmanlar hashleme kavramını genellikle tek taraflı bir şifreleme yöntemi olarak tanımlamaktadır. Bu işlem sonrasında elde edilen değere ise ‘’hash değeri’’ denir."},
        {type: "paragraph", content: "Hashleme yönteminde kullanılan algoritma çeşidine göre, elde edilen hash değeri değişiklik göstermektedir. Aynı zamanda aşağıdaki örneklerde görüldüğü üzere, algoritmanın değişmesinin yanı sıra hashleme işlemine tabi olan kelimede bir harfin başka bir harfle değiştirilmesi ya da bir harfin büyük/küçük harf olarak değiştirilmesi dahi ortaya çıkan hash değerini doğrudan değiştirebilmektedir."},
        {type: "paragraph", content: "Örneğin, SHA256 ve SHA1 algoritmaları kullanılarak ‘’KPVeri’’ ve ‘’kpveri’’ kelimeleri hashlendiğinde ortaya çıkan değerler aşağıdaki gibidir:"},
        {type: "image", content: hash},
        {type: "header", content: "Peki çeşitli algoritmalar kullanılarak bir veri ya da veri seti hashlendiğinde ulaşılan hash değeri/leri her ihtimalde anonim veri niteliği kazanır mı?"},
        {type: "paragraph", content: "Türk Mevzuatı’nda hashleme, 6698 sayılı Kişisel Verilerin Korunması Kanunu (‘’KVKK’’) başta olmak üzere herhangi Kanun ya da ikincil düzenlemede tanımlanmamıştır. Mahremiyet ile ilgili uluslararası mevzuatta hatta günümüzde en gelişmiş mahremiyet mevzuatı olarak kabul edilen Avrupa Birliği Genel Veri Koruma Tüzüğü’nde (‘’GDPR’’) de bu yönteme ilişkin doğrudan bir hukuki düzenlemeye rastlanmamaktadır. Bu anlamda hashleme daha çok mevzuatın konusu değil, teknik bir standardın konusudur."},
        {type: "paragraph", content: "KVKK’nın tanımlar maddesinde kişisel veri ‘’kimliği belirli veya belirlenebilir gerçek kişiye ilişkin her türlü bilgi” şeklinde tanımlanmıştır. Anonimleştirme işlemi ise, kişisel verilerin başka verilerle eşleştirilse dahi hiçbir surette kimliği belirli veya belirlenebilir bir gerçek kişiyle ilişkilendirilemeyecek hale getirilmesidir."},
        {type: "paragraph", content: "İşbu tanımlardan yola çıkarak doktrinde hashlenmiş verinin kişisel veri olduğunu ya da tam tersine bir yorumla verinin anonim veri nitelik kazandığını değerlendiren uzmanlar bulunmaktadır. Dolayısıyla bu konuya ilişkin sonuca varmak için uluslararası otoriteler tarafından verilen kararları ve yayınlanan içerikleri gözden geçirmek faydalı olacaktır:"},
        {type: "paragraph", content: "İspanya Veri Koruma Otoritesi tarafından yayınlanan bir rehberde; anonimleştirme tekniklerine ilişkin 5/2014 sayılı görüş yazısında, hashleme yönteminin bir kimliksizleştirme yöntemi olarak değerlendirildiği belirtilmiştir. Buna göre; kişisel verileri kimliksizleştirme (pseudonymization) veya anonim hale getirmek için hashleme yönteminin kullanılmasının, veri işlemede kullanılan özel hashleme yöntemi ile ilişkili bir yeniden tanımlama risk analiziyle gerekçelendirilmesi gerekecektir. Bu tür bir risk analizinin hashleme ile temsil edilen değere bağlı olan veya olabilecek bilgiler öncelikli olmak kaydıyla, hem hashleme sürecini hem de hashleme yöntemini oluşturan diğer unsurları incelemesi/kapsaması gerekecektir. Bu analiz uzun vadede “çözümlenebilme” olasılığının nesnel bir değerlendirmesiyle sonuçlanmalıdır. Yani uzun vadede “çözümlenebilme” ihtimali ve riskleri objektif bir şekilde değerlendirilmelidir."},
        {type: "paragraph", content: "Belirli şartların sağlanması halinde bazı uluslararası otoritelerince hashleme yönteminin anonimleştirme tekniği olarak kabul edilebileceği görülmektedir. Bu kapsamda; İspanya Veri Koruma Otoritesi’nin rehberinde, hashleme yönteminin anonim hale getirme yöntemi olarak kabul edilebilmesi için risk değerlendirmesinde:"},
        {type: "list", content: ["Verinin yeniden “çözümlenmesi”ne izin veren tüm bilgilerin ortadan kaldırılmasının garanti edilmesi açısından gerekli idari tedbirlerin alınması,","Kişisel verilerin beklenen kullanım ömrünün ötesinde olacak bir şekilde sistem güvenliğinin garanti edilmesi gerektiği belirtilmiştir."]},
        {type: "paragraph", content: "Bu kriterler ışığında verilerin hash yöntemine tabi tutulması durumunda, hashlenen her veri kişisel veri niteliğini korur ya da hashlenen her veri kişisel veri niteliğini kaybederek anonim hale gelir şeklinde nihai bir yorum yapmak doğru olmayacaktır. Konu oldukça tartışmalı olmakla birlikte, somut olay özelinde değerlendirme yapılması daha isabetli olacaktır. Bu noktada değerlendirme kriterlerinin odak noktasında ‘’çözümlenebilirlik’’ kriterinin olması gerekir."},   
        {type: "paragraph", content: "Örneğin, bir veri setinin hashleme işlemine tabi tutulup yurt dışına aktarılması durumunda yurt dışında mukim taraf (veri sorumlusu yahut veri işleyen) herhangi bir veriyi kullanarak eşleştirme gerçekleştirmesi neticesinde hashlenen veriyi çözümleyebiliyor ise bu durumda veri, kişisel veri niteliğini korumaktadır. Ancak, yurt dışında yerleşik taraf herhangi bir veriyle eşleştirme yapamıyor ve dolayısıyla hashlenen veriyi çözümleyemiyor ise burada verinin kişisel veri niteliğini kaybettiği ve anonim hale geldiği değerlendirilebilecektir."},
        {type: "paragraph", content: "Konuya ilişkin Alman Mahkemesi tarafından verilen bir kararda (VG Bayreuth, Beschluss v. 08.05.2018 – B 1 S 18.105) da hash yöntemi hakkında somut olay özelinde değerlendirme yapılmış olup, Facebook tarafından üçüncü taraf veri sorumlularından alınan hashlenmiş verilerin, Facebook veritabanında kayıtlı olan veriler olabileceği ve veriler hashlenmiş ise de bu verilerin Facebook tarafından tespit edilebilme imkanı olabileceği değerlendirilerek hashlenen verinin anonim hale gelmediği neticesine varılmıştır."},
        {type: "paragraph", content: "Konu hakkındaki Kişisel Verileri Koruma Kurulu (‘’Kurul’’) kararında (20/05/2020 tarihli ve 2020/404 sayılı Karar Özeti) ise biyometrik verilerin hash yöntemi ile biyometrik veri niteliğini kaybetmediği vurgulanmıştır. Oldukça isabetli bir karar olsa da kararın çıkış yoluna dikkat çekmek gerekir. Somut olayda, yalnızca tek bir veri (biyometrik veri) hashlenmekte ve hashlenen veri sistemlerde yer alan biyometrik veri ile veri sorumlusu bünyesindeki sistemlerde eşleştirilebilmektedir. Bu durumda hashlenmiş olsa da biyometrik veriye ulaşım/erişim imkanı söz konusu olduğu bilhassa çözümleme imkanı gözetilerek, Kurul tarafından verinin anonim hale gelmediği şeklinde değerlendirme yapılmıştır."},
        {type: "paragraph", content: "Sonuç olarak, hashlenen bir verinin kişisel veri niteliğini kaybedip kaybetmediği hususu somut olay özelinde değerlendirilmelidir:"},
        {type: "list", content: ["Hashlenen veri çözümlenebilir durumda ise; verinin halen kişisel veri niteliğini haiz olacağı ve bu süreç özelinde hashleme yönteminin anonim hale getirme yöntemi değil, kimliksizleştirme yöntemi olduğu ve bu hashleme kişisel veriler açısından ancak bir güvenlik tedbiri olarak değerlendirilmesi daha isabetli olacaktır.","Hashlenen verinin çözümlenmesine imkan veren tüm gerekli verilerin ortadan kaldırılmasının garanti edilmesi ve bu noktada tüm tedbirlerin alınması ayrıca, kişisel verilerin beklenen kullanım ömrünün ötesinde olacak bir şekilde sistem güvenliğinin teknik anlamda garanti edilmesi sonucunda verinin çözümlenebilme imkanının bulunmaması durumunda hashleme yöntemi bir anonimleştirme yöntemi olarak değerlendirilebilecektir."]},        
      ],
      tags: ["Veri Şifreleme", "KVKK"],
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

