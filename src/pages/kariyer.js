import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/Reuseable/PageHeader";
import React, { useState } from "react";
import Link from "next/link";


const Career = () => {
  const [buttonClicked, setButtonClicked] = useState(null);

  const handleButtonClick = (buttonNumber) => {
    setButtonClicked(buttonNumber);
  };

  return (
    <Layout pageTitle="Kariyer" footerClassName="site-footer-three">
      <Header />
      <PageHeader title="Kariyer" />
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="career-page">
              <div className="career-page__content">
                <h3 className="career-page__title">Ekibimize Katılın!</h3>
                <h4 className="career-page__title2">
                  Önce bizi biraz tanımak istersen{" "}
                  <Link legacyBehavior href="/hakkimizda" style={{ color: "darkblue" }}>
                    hakkımızda
                  </Link>
                  sayfasına göz atabilirsin.
                </h4>
                <h4 className="career-page__title2">Başvurmadan Önce:</h4>
                <p className="career-page__text">
                  Köksal&Partners'a başvurduğunda seninle ilgili işlenecek
                  kişisel veriler ile ilgili bilgi almak için Çalışan Adayı
                  Aydınlatma Metni'ni incele.
                </p>
                <div className="carreer-btn-form">
                    <button
                      className="thm-btn"
                      onClick={() => handleButtonClick(1)}
                    >
                      Avukat Başvuru Formu
                    </button>
                    <button
                      className="thm-btn"
                      onClick={() => handleButtonClick(2)}
                    >
                      Stajyer Avukat Başvuru Formu
                    </button>
                    <button
                      className="thm-btn"
                      onClick={() => handleButtonClick(3)}
                    >
                      İdarî Personel Başvuru Formu
                    </button>
                    <button
                      className="thm-btn"
                      onClick={() => handleButtonClick(4)}
                    >
                      KPO+ Akademi Başvuru Formu
                    </button>
                  </div>
                  <div className="application-forms">
                    {buttonClicked === 1 && (
                      <iframe className="application-form" src="https://docs.google.com/forms/d/e/1FAIpQLSedxTKt40c1kf5Vj-_SESCRh3FplA59tcmYLIifrqx8sY0cgQ/viewform?embedded=true" width="640" height="422" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
                    )}
                    {buttonClicked === 2 && (
                      <iframe className="application-form" src="https://docs.google.com/forms/d/e/1FAIpQLSeWtZA1YIwt6ySA4PfeCvC5DpGE1yDAuKn_WusOytw5GQHZWw/viewform?embedded=true" width="640" height="422" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
                    )}
                    {buttonClicked === 3 && (
                      <iframe className="application-form" src="https://docs.google.com/forms/d/e/1FAIpQLScJI0aoVz89WCA2avtZcUY26RXOqVjp4bpxtPKgfEUOTxbPbA/viewform?embedded=true" width="640" height="422" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
                    )}
                    {buttonClicked === 4 && (
                      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfcTyOO6uHgrVCn-kSe9QN3uAnoxQnI8ndQyRMiNWr-jEZ0wQ/viewform?embedded=true" width="640" height="1494" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
                    )}
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Career;
