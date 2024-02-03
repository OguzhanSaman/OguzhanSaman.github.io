import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/Reuseable/PageHeader";
import React, { useState } from "react";
import Faqs from "/src/components/FAQsPage/Faqs.js";
const accrodionData = [
    { 
    id: 1, 
    title: "Kişisel Verilerinizin Toplanma Yöntemleri Nelerdir?", 
    text: "Yukarıda kategoriler halinde belirtilen kişisel verileriniz; Köksal&Partners online ve fiziki adreslerimize tarafınızca gönderilen özgeçmişler ile toplanmaktadır." 
    },
    { 
    id: 2, 
    title: "Kişisel Verilerinizin Toplanmasının Hukuki Sebepleri Nelerdir?", 
    text: "Kişisel verileriniz, Köksal&Partners tarafından; yukarıda sayılan amaçların gerçekleştirilmesi doğrultusunda, başta KVKK’nın 5. maddesinde belirtilen; Bir sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması kaydıyla, sözleşmenin taraflarına ait kişisel verilerin işlenmesinin gerekli olması, ve İlgili kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla, veri sorumlusunun meşru menfaatleri için veri işlenmesinin zorunlu olması, hukuki sebeplerine dayanılarak toplanmaktadır." 
    },
    { 
    id: 3, 
    title: "Kişisel Verileriniz Yurt İçinde Kimlere ve Hangi Amaçlarla Aktarılabilecektir?", 
    text: "Kişisel verileriniz yukarıda sayılan amaçlar dahilinde, KVKK ve yürürlükte olan mevzuata uygun olarak, hukuki ve sözleşmesel yükümlülüklerimiz doğrultusunda yetkili kamu kurum ve kuruluşlarına, ilgili mevzuatın öngördüğü durumlarda aktarılabilecektir. " 
    },
    { 
    id: 4, 
    title: "Kişisel Verileriniz Yurt Dışına Aktarılıyor mu?", 
    text: "Online başvuru yapmışsanız kişisel verileriniz, başvurunuzun alındığı Google Forms nedeniyle Google’un AB’deki sunucularına aktarılmamakta, fiziki başvuru yapmanız durumunda ise herhangi bir şekilde aktarılmamaktadır." 
    },
    { 
    id: 5, 
    title: "Kişisel Verileriniz Ne Kadar Süre ile Saklanır?", 
    text: "Kişisel verileriniz, başvurunuzun yapıldığı takvim yılından sonraki 6 ay süre ile saklanmakta bu sürenin sonunda yapılan ilk periyodik gözden geçirmekte silinmektedir." 
    },
    { 
    id: 6, 
    title: "İlgili Kişi Olarak Haklarınız Nelerdir?", 
    text: "Kişisel verilerinize ilişkin; Kişisel verilerinizin işlenip işlenmediğini öğrenme, Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme, Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme, Yurt içinde veya yurt dışında kişisel verilerinizin aktarıldığı üçüncü kişileri bilme, Kişisel verilerinizin eksik veya yanlış işlenmiş olması halinde bunların düzeltilmesini isteme, KVKK mevzuatında öngörülen şartlar çerçevesinde kişisel verilerinizin silinmesini veya yok edilmesini isteme, Eksik veya yanlış verilerin düzeltilmesi ile kişisel verilerinizin silinmesi veya yok edilmesini talep ettiğinizde, bu durumun kişisel verilerinizi aktardığımız üçüncü kişilere bildirilmesini isteme ve Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız halinde bu zararın giderilmesini talep etme, haklarına sahipsiniz. Kişisel verilerinize ilişkin başvuru ve taleplerinizi, koksalozdamaravukatlik@hs02.kep.tr adresine KEP üzerinden, başvurunuzu mail ile yapmışsanız ve aynı e-posta adresini kullanarak ik@koksalpartners.com adresine mail göndererek ya da ilgili mevzuatta öngörülen diğer yöntemlerle başvurabilirsiniz. Başvurunuzun yanıtlanması veya olumlu sonuçlandırılması için ek bir bilgi veya belge gerekiyorsa lütfen bunları da başvurunuza eklemeyi unutmayınız." 
    },
  ];

const AydinlatmaMetni = () => {

  return (
    <Layout pageTitle="Aydınlatma Metni" footerClassName="site-footer-three">
      <Header />
      <PageHeader title="Aydınlatma Metni" />
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="aydinlatma__metni">
              <div className="aydinlatma-metni__content">
                <p className="placeholders"> </p>
                <h2 className="aydinlatma-metni__title">Çalışan Adayı Aydınlatma Metni</h2>
                <p className="aydinlatma-metni__text">
                  <strong>Veri Sorumlusu:</strong>
                  <br />
                  Köksal Özdamar Avukatlık Ortaklığı
                  <br />
                  Burhaniye Abdullahağa Caddesi, No:106, Üsküdar, İstanbul
                  <br />
                  <br />
                  <strong>Giriş</strong>
                  <br />
                  Köksal Özdamar Avukatlık Ortaklığı (“Köksal&Partners”) olarak; kişisel verilerinizi 6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) ve ilgili mevzuat doğrultusunda Köksal&Partners bünyesinde yapmış olduğunuz iş başvurusu kapsamında işlemekteyiz. Bu verilerin bir kısmı sadece mülakata çağırdığımız adaylardan alınmaktadır.
                  <table>
                  <thead>
                    <tr>
                      <th>Veri Kategorileri</th>
                      <th>Veriler</th>
                      <th>Kişisel Veri İşleme Amaçları</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Kimlik</td>
                      <td>İsim, Soy isim, Doğum Tarihi, Ehliyet Türü</td>
                      <td>Çalışan Adayı/Stajyer/Öğrenci Seçme ve Yerleştirme Süreçlerinin Yürütülmesi, Çalışan Adaylarının Başvuru Süreçlerinin Yürütülmesi, Faaliyetlerin Mevzuata Uygun Yürütülmesi, İnsan Kaynakları Süreçlerinin Planlanması, Saklama ve Arşiv Faaliyetlerinin Yürütülmesi, Veri Sorumlusu Operasyonlarının Güvenliğinin Temini, Diğer: Gelecekte Açılabilecek Pozisyonlara Yönelik İnsan Kaynakları Faaliyetlerinin Yürütülmesi.</td>
                    </tr>
                    <tr>
                      <td>İletişim</td>
                      <td>Elektronik posta adresi, İkamet Adresi, Ev Telefonu Numarası, Cep Telefonu Numarası</td>
                      <td>Çalışan Adayı/Stajyer/Öğrenci Seçme ve Yerleştirme Süreçlerinin Yürütülmesi, Çalışan Adaylarının Başvuru Süreçlerinin Yürütülmesi, Faaliyetlerin Mevzuata Uygun Yürütülmesi, İletişim Faaliyetlerinin Yürütülmesi, İnsan Kaynakları Süreçlerinin Planlanması, Saklama ve Arşiv Faaliyetlerinin Yürütülmesi, Veri Sorumlusu Operasyonlarının Güvenliğinin Temini, Diğer: Gelecekte Açılabilecek Pozisyonlara Yönelik İnsan Kaynakları Faaliyetlerinin Yürütülmesi</td>
                    </tr>
                    <tr>
                      <td>Özlük</td>
                      <td>İşyeri ismi-unvanı, pozisyon-unvan bilgisi</td>
                      <td>Çalışan Adayı/Stajyer/Öğrenci Seçme ve Yerleştirme Süreçlerinin Yürütülmesi, Çalışan Adaylarının Başvuru Süreçlerinin Yürütülmesi, İnsan Kaynakları Süreçlerinin Planlanması, Veri Sorumlusu Operasyonlarının Güvenliğinin Temini, Diğer: Gelecekte Açılabilecek Pozisyonlara Yönelik İnsan Kaynakları Faaliyetlerinin Yürütülmesi</td>
                    </tr>
                    <tr>
                      <td>Referans</td>
                      <td>İsim, Soy isim, Çalıştığı Bölüm, Unvan, Referans Tipi, Telefon Numarası</td>
                      <td>Çalışan Adayı/Stajyer/Öğrenci Seçme ve Yerleştirme Süreçlerinin Yürütülmesi, Çalışan Adaylarının Başvuru Süreçlerinin Yürütülmesi, Faaliyetlerin Mevzuata Uygun Yürütülmesi, İnsan Kaynakları Süreçlerinin Planlanması, Saklama ve Arşiv Faaliyetlerinin Yürütülmesi, Veri Sorumlusu Operasyonlarının Güvenliğinin Temini, Diğer: Gelecekte Açılabilecek Pozisyonlara Yönelik İnsan Kaynakları Faaliyetlerinin Yürütülmesi</td>
                    </tr>
                  </tbody>
                </table>
                <Faqs faqs={accrodionData} className="your-custom-class" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AydinlatmaMetni;
