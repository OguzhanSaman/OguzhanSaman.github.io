import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/Reuseable/PageHeader";
import React, { useState } from "react";
import Faqs from "/src/components/FAQsPage/Faqs.js";
import Link from "next/link";

const accrodionData = [
    { 
    id: 1, 
    title: "Kişisel Verilerinizin Toplanma Yöntemleri Nelerdir?", 
    text: "Yukarıda kategoriler halinde belirtilen kişisel verileriniz; Köksal&Partners online ve fiziki adreslerimize tarafınızca gönderilen özgeçmişler ile toplanmaktadır." 
    }
  ];

const AydinlatmaMetni = () => {

  return (
    <Layout pageTitle="Çerezler" footerClassName="site-footer-three">
      <Header />
      <PageHeader title="Çerez Aydınlatma Metni" />
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="cerezler">
              <div className="cerezler__content">
                <p className="placeholders"> </p>
                <h2 className="cerezler__title">Çerez Aydınlatma Metni</h2>
                <p className="cerezler__text">
                    Bu metin, 6698 sayılı Kişisel Verilerin Korunması Kanunu’nun (“Kanun”) 10. maddesi ile Aydınlatma Yükümlülüğünün Yerine Getirilmesinde Uyulacak Usul ve Esaslar Hakkında Tebliğ kapsamında veri sorumlusu sıfatıyla Köksal Özdamar Avukatlık Ortaklığı (“Köksal&Partners”) tarafından hazırlanmıştır. 
                </p>
                <p className="cerezler__text">
                    Köksal&Partners olarak https://www.koksalpartners.com/ internet sitesi (“Site”) içerisinde yer alan bazı alanlarda çerezler kullanmaktayız. Bu Çerez Aydınlatma Metni, Köksal&Partners tarafından yönetilen Site için geçerli olup çerezler Aydınlatma Metninde açıklanan şekilde kullanılacaktır.
                </p>
                <p className="cerezler__text">
                    Bu Çerez Aydınlatma Metni’nin amacı, internet sitemizde kullanılan çerezlerin cihazınıza yerleştirilmesi aracılığıyla otomatik yolla elde edilen kişisel verilerin işlenmesine ilişkin olarak, hangi amaçlarla hangi tür çerezleri kullandığımızı ve bu çerezleri nasıl yönetebileceğiniz hakkında sizlere bilgi vermektir. İnternet sitemizde kullandığımız, zorunlu çerezler ile bazı işlevsel ve performans-analitik çerezler haricindeki çerezler için, kullanıcıların açık rızaları alınmakta ve istedikleri zaman rızalarını değiştirebilme olanağı sağlanmaktadır. 
                </p>
                <p className="cerezler__text">
                    Kullanıcılar çerez yönetim paneli üzerinden, internet sitemizde kullanılan çerez çeşitlerini görebilmekte ve Zorunlu Çerezler dışında kalan tüm çerezler için “açık” veya “kapalı” seçenekleri ile tercihlerini belirleyebilmektedir. Yine bu panel üzerinden kullanıcılar tercihlerini her zaman değiştirebilmektedir. 
                </p>

                <p className="cerezler__text">
                  <strong>1. Çerez Nedir?</strong>
                  <br />
                    Çerezler bir internet sitesi tarafından cihazınızda oluşturulan ve isim-değer formatında veri barındıran küçük metin dosyalarıdır. Çerezler, ziyaret ettiğiniz internet sitesinin cihazınızda bilgi saklamasını ve bu bilgilerin sonraki ziyaretleriniz sırasında kullanmasını mümkün kılmaktadır. Bir internet sitesi tarafından oluşturulan çerezler siteye erişim için kullandığınız internet tarayıcısı tarafından saklanmakta olup çerezler, ziyaretçilere ilişkin isim, cinsiyet veya adres gibi kişisel verileri içermezler. Çerezlerin içerdiği bilgilere ancak aynı internet tarayıcısını kullanmanız halinde ve yalnızca ilgili çerezi oluşturan internet sitesi alan adı https://www.koksalpartners.com/ tarafından erişilebilmektedir.
                  <br />
                    Çerezler günümüzde, internet teknolojilerinin önemli bir parçası haline gelmiştir ve temel işlevleri çevrimiçi ziyaretçinin tercihlerinin hatırlanması ve bağlantı sırasında cihazın tanınması olup neredeyse her internet sitesinde çerez kullanımı söz konusudur.
                  <br />
                  <strong>2. Çerezleri Kim, Nasıl Gönderir?</strong>
                  <br />
                    Çerezler, gezintiniz sırasında cihazınızda bulunan internet tarayıcınız (Chrome, Firefox, Safari, Edge vb. gibi) ile Köksal&Partners bünyesindeki internet sitesi sunucuları arasında kurulan iletişim vasıtasıyla gönderilmektedir.
                </p>
                <p className="cerezler__text">
                  <strong>3. Çerez Tipleri Nelerdir?</strong>
                    <ul>
                        <li> Sahipliklerine göre:</li>
                        <ul>
                            <li>
                                <strong>Birinci Taraf Çerezler</strong>
                                <br />
                                Doğrudan ziyaret edilen web sitesi veya Köksal&Partners tarafından cihaza yerleştirilmektedir.
                            </li>
                            <li>
                                <strong>Üçüncü Taraf Çerezler</strong>
                                <br />
                                Köksal&Partners ile iş birliği içerisinde olan, reklam veren veya analitik sistem gibi üçüncü bir tarafça cihaza yerleştirilen çerezlerdir.
                            </li>
                        </ul>
                    </ul>
                    <ul>
                        <li> Aktif olduğu süreye göre:</li>
                        <ul>
                            <li>
                                <strong>Oturum Çerezleri</strong>
                                <br />
                                Kullanıcının tarayıcıyı kapatması veya oturumun sona ermesi süresine kadar depolanabilecek verileri sağlamaktadır. Kısa süreli çerezlerdir.
                            </li>
                            <li>
                                <strong>Kalıcı Çerezler</strong>
                                <br />
                                Çerezin kullanıcı tarafından silinme tarihine kadar veya çerez için belirli son kullanma tarihine kadar sürücüde yer alan çerezlerdir. Kalıcı çerezlerin kodlarında değişken süreli, yazılı bir son kullanma tarihi vardır.
                            </li>
                        </ul>
                    </ul>
                    <ul>
                        <li> Kullanım amaçlarına göre:</li>
                        <ul>
                            <li>
                                <strong>Zorunlu Çerezler</strong>
                                <br />
                                Kullanıcının tarayıcıyı kapatması veya oturumun sona ermesi süresine kadar depolanabilecek verileri sağlamaktadır. Kısa süreli çerezlerdir.
                            </li>
                            <li>
                                <strong>İşlevsel Çerezler</strong>
                                <br />
                                Çerezin kullanıcı tarafından silinme tarihine kadar veya çerez için belirli son kullanma tarihine kadar sürücüde yer alan çerezlerdir. Kalıcı çerezlerin kodlarında değişken süreli, yazılı bir son kullanma tarihi vardır.
                            </li>
                            <li>
                                <strong>Performans - Analitik Çerezler:</strong>
                                <br />
                                İstatistik çerezleri olarak da bilinen performans- analitik çerezler, web sitesinin kullanımına ilişkin anonim, istatistiksel veri sağlayan çerezlerdir. İstatistik çerezleri ile kullanıcının web sitesini nasıl kullandığı, ziyaret ettiği sayfalar, tıkladığı bağlantılar depolanabilmektedir. Anonim hale getirilen istatistik çerezleri, web sitesi kullanıcısını tanımlamak için kullanılmamaktadır. Bu çerezlerin amacı, web sitesini daha işlevsel hale getirmektir.
                            </li>
                            <li>
                                <strong>Pazarlama Çerezleri</strong>
                                <br />
                                İlgi alanlarınızın bir profilini oluşturmak ve diğer sitelerdeki alakalı reklamları göstermek amacıyla faaliyet gösteren firmalar tarafından kullanılabilen çerezlerdir.
                            </li>
                        </ul>
                    </ul>
                </p>
                <p className="cerezler__text">
                  <strong>4. Kişisel Verileriniz Tarafımızca Hangi Amaçlarla ve Hangi Hukuki Sebeplere Dayanarak İşlenecektir?</strong>
                  <ul>
                    <li>
                        <strong>Zorunlu çerezler</strong>, talep etmiş olduğunuz bir bilgi toplumu hizmetinin (log-in olma, form doldurma ve gizlilik tercihlerinin hatırlanması) yerine getirilebilmesi amacıyla kullanılmaktadır. Bu çerezler aracılığıyla toplanan kişisel verileriniz, Kanun’un 5. maddesinin 2. fıkrasının (c) bendi “Bir sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması kaydıyla, sözleşmenin taraflarına ait kişisel verilerin işlenmesinin gerekli olması” veya (f) bendi “İlgili kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla, veri sorumlusunun meşru menfaatleri için veri işlenmesinin zorunlu olması” kapsamında işlenmektedir. 
                    </li>
                  </ul>
                  <ul>
                    <li>
                        <strong>Pazarlama çerezleri</strong>, iş ortaklarımız tarafından ilgi alanlarınıza göre profilinizin çıkarılması ve size ilgili reklamlar göstermek amacıyla kullanılmaktadır. Bu çerezler aracılığıyla toplanan kişisel verileriniz, Kanun’un 5. maddesinin 1. fıkrası kapsamında açık rıza hukuki sebebine dayanarak işlenmektedir. 
                    </li>
                  </ul>
                  <ul>
                    <li>
                        <strong>Performans- analitik çerezler</strong>, internet sitelerinde kullanıcıların davranışlarını analiz etmek amacıyla istatistiki ölçümüne imkân veren çerezlerdir. Bu çerezler, sitenin iyileştirilmesi için sıklıkla kullanılmakta olup bu duruma reklamların ilgili kişiler üzerindeki etkisinin ölçümü de dâhildir. İnternet sitesi sahipleri tarafından, tekil ziyaretçilerin sayısını tahmin etmek, bir internet sayfasına götüren en önemli arama motoru anahtar kelimelerini tespit etmek veya internet sitesinde gezinme durumunu izlemek için kullanılmaktadırlar. Bu çerezler aracılığıyla toplanan kişisel verileriniz:
                        <ul>
                            <li>Yalnızca iletişimin elektronik haberleşme şebekesi üzerinden sağlanması amacıyla kullanılması veya hizmet almak için açıkça talep ettiğiniz bilgi toplum hizmetleri için kesinlikle gerekli olması halinde açık rızanız gerekli olmaksızın; Kanun’un 5. maddesinin 2. fıkrasının (c) bendi “Bir sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması kaydıyla, sözleşmenin taraflarına ait kişisel verilerin işlenmesinin gerekli olması” veya (f) bendi “İlgili kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla, veri sorumlusunun meşru menfaatleri için veri işlenmesinin zorunlu olması” kapsamında işlenmektedir.</li>
                            <li>Belirtilen haller dışında, Kanun’un 5. maddesinin 1. fıkrası kapsamında açık rıza hukuki sebebine dayanarak işlenmektedir. </li>
                        </ul>
                    </li>
                  </ul>
                  <ul>
                    <li>
                        <strong>İşlevsel çerezler</strong>: internet sayfamızı daha işlevsel kılmak ve kişiselleştirmek (gizlilik tercihleriniz hariç olmak üzere diğer tercihlerinizin siteye tekrar girdiğinizde hatırlanmasını sağlamak) amaçlarıyla kullanılmaktadır. Bu çerezler aracılığıyla toplanan kişisel verileriniz: 
                        <ul>
                            <li>Yalnızca iletişimin elektronik haberleşme şebekesi üzerinden sağlanması amacıyla kullanılması veya hizmet almak için açıkça talep ettiğiniz bilgi toplum hizmetleri için kesinlikle gerekli olması halinde açık rızanız gerekli olmaksızın; Kanun’un 5. maddesinin 2. fıkrasının (c) bendi “Bir sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması kaydıyla, sözleşmenin taraflarına ait kişisel verilerin işlenmesinin gerekli olması” veya (f) bendi “İlgili kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla, veri sorumlusunun meşru menfaatleri için veri işlenmesinin zorunlu olması” kapsamında işlenmektedir. </li>
                            <li>Belirtilen haller dışında, Kanun’un 5. maddesinin 1. fıkrası kapsamında açık rıza hukuki sebebine dayanarak işlenmektedir. </li>
                        </ul>
                    </li>
                  </ul>
                </p>
                <p className="cerezler__text">
                <strong>5. Sitemizde Kullanılan Çerezlere İlişkin Bilgiler</strong>
                    <br />
                  İnternet sitemizde yer alan çerezlere ilişkin bilgiler aşağıdaki tabloda yer almaktadır:
                    <br />
                <strong>6. Çerezler Aracılığıyla İşlenen Kişisel Verilerin Aktarılması</strong>
                    <br />
                    Çerezler ile yürütülen faaliyetlerimiz kapsamında kişisel verileriniz; Köksal&Partners hizmetlerinin size özelleştirilerek geliştirilmesi, pazarlama faaliyetlerinin yürütülebilmesi, iş faaliyetlerinin yürütülmesi ve denetimi, mal / hizmet satın alım süreçlerinin yürütülmesi amaçları ile tedarikçilerimize aktarılmaktadır. Ayrıca yukarıdaki tabloda belirtilen reklam ve pazarlama çerezleri ile analitik çerezler ve performans çerezlerine onay vermeniz halinde kişisel verileriniz; saklama ve arşiv faaliyetlerinin yürütülmesi amacıyla sınırlı olarak yurt dışında yerleşik üçüncü taraf altyapı sağlayıcıları aracılığıyla yurt dışındaki sunucularda işlenecektir. Bu kapsamda; tarafınıza ait kişisel veriler, açık rızanıza dayalı olarak, gerekli teknik ve idari tedbirler alınarak sunucuları yurt dışında bulunan hizmet sağlayıcılar tarafından işlenecektir.
                    <br />
                <strong>7. Çerezlerin Yönetimi</strong>
                    <br />
                    Çerezleri yönetmek amacıyla ekranınızın sol alt köşesinde logosu bulunan çerez yönetim panelindeki butonları kullanabilirsiniz. Ayarlarınızı etkin hâle getirmek için sayfayı yenileyiniz. İnternet sitemizi kullanabilmek için çerez kullanımı zorunlu değildir, fakat tarayıcınızı çerezleri kabul etmemeye ayarlamanız halinde kullanıcı deneyiminizin kalitesi düşebilir ve sitelerimizin çeşitli işlevleri bozulabilir. Özellikle teknik çerezler, Site’nin temel işlevlerini yerine getirebilmesini sağlamaktadır. Teknik çerezler Site’nin teknik olarak çalışmasını tesis ettiğinden bunları kapatmanız halinde Site’de bazı fonksiyonların gereği gibi çalışmaması söz konusu olabilir. Tarayıcınızı; çerezleri tüm siteler veya belirli siteler için engelleyecek şekilde, çerez oluşturulduğunda uyarı verecek şekilde, üçüncü taraf çerezleri engelleyecek şekilde veya tüm çerezleri oturum çerezi gibi sayacak şekilde yapılandırabilirsiniz.
                <strong>8. İlgili Kişilerin Talepleri</strong>
                    <br />
                    6698 sayılı Kişisel Verileri Koruma Kanunu’nun on birinci maddesi kapsamındaki haklarınız ve ayrıntılı bilgi için <Link href="/aydinlatma-metni">KVKK Aydınlatma Metni</Link>’ni inceleyebilirsiniz. Köksal&Partners çerezlerle ilgili kullanım şartlarını ve Çerez Aydınlatma Metni’ni değiştirme hakkını saklı tutar.
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
