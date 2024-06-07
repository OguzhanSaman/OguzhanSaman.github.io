// generateRSS.js
const RSS = require('rss');
const fs = require('fs');

async function generateRSS() {
  const feed = new RSS({
    title: 'Köksal & Partners',
    description: 'Köksal & Partners Avukatlık Ortaklığı',
    feed_url: 'https://www.koksalpartners.com//rss.xml',
    site_url: 'https://www.koksalpartners.com/',
  });

  // Fetch or add your feed items here
  const items = [
    {
      title: "Romanya Veri Koruma Otoritesi, başvuru ve şikayetler için farklı başvuru kanallarına sahip olmasına rağmen Whatsapp’ı iletişim kanalı olarak kullanan Romanya Ulusal Tüketiciyi Koruma Kurumu'nu uyardı.",
      description: "Romanya Ulusal Tüketiciyi Koruma Kurumu, WhatsApp aracılığıyla tüketici şikayetlerinin gönderilmesi için özel bir cep telefonu numarası sağlamış ve bu kanal aracılığıyla çok sayıda kişisel veri işlemiştir. İlgili kişiler tarafından bu uygulamaya dair yapılan çeşitli şikayetlerin ardından Romanya Veri Koruma Otoritesi bir soruşturma başlatmıştır. Soruşturma sonucunda Romanya Veri Koruma Otoritesi, Ulusal Tüketiciyi Koruma Kurumu’nun potansiyel riskleri dikkate almadan kişisel veri topladığını ve şikayetler/başvurular için başka kanallara sahip olmasına rağmen kendi kontrolü altında olmayan bir uygulama kullanıldığını tespit etmiştir. Sonuç olarak, Romanya Veri Koruma Otoritesi, bu durumun GDPR Madde 32(2)'yi ihlal ettiğini tespit etmiş ve kişisel verilerin yalnızca kontrol altındaki araçlar kullanılarak işlenmesi gerektiğini vurgulamıştır.",
      url: 'https://www.koksalpartners.com/tuketici-basvurularinin-whatsapp-ile-alinmasi',
      date: '2024-06-06', // ISO date format
    },
    {

      title: "Belçika Veri Koruma Otoritesi, kredi başvurusu yapan ilgili kişinin erişim talebini, belgelerden bazılarının üçüncü taraflardan temin edildiği gerekçesiyle reddeden veri sorumlusu hakkında talimatlandırma kararı verdi.",
      description: "Kredi başvurusu reddedilen bir ilgili kişi, veri sorumlusuna erişim talebinde bulunmuş, kişisel verilerinin işlenip işlenmediğini teyit etmek istemiştir. Bu talebe karşılık veri sorumlusu kredi başvurusunun incelenmesinde üçüncü kişiler tarafından da oluşturulmuş dosyalar olduğu bilgisini vererek bu dosyalara erişimini sağlamamış ve ilgili kişiyi, ilgili veri sorumlularıyla iletişime geçmeye yönlendirmiştir. Bu kapsamda ilgili kişi talebine kesin bir cevap alamamış, kişisel verilerinin bir kopyasına da erişim elde edememiştir.",
      url: "https://www.koksalpartners.com/ilgili-kisi-basvurularinin-eksik-yanitlanmasi",
      date: "2024-06-07",
    },
  ];

  items.forEach(item => {
    feed.item(item);
  });

  const rss = feed.xml({ indent: true });
  fs.writeFileSync('./public/rss.xml', rss);
}

generateRSS();
