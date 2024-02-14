import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/Reuseable/PageHeader";
import React, { useState } from "react";
import Link from "next/link";


const KVKK = () => {
  const [buttonClicked, setButtonClicked] = useState(null);

  const handleButtonClick = (buttonNumber) => {
    setButtonClicked(buttonNumber);
  };

  return (
    <Layout pageTitle="Kişisel Verilerin Korunması" footerClassName="site-footer-three">
      <Header />
      <PageHeader title="Kişisel Verilerin Korunması" />
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="career-page">
              <div className="career-page__content">
                <h3 className="career-page__title">İlgili metinlere butonlar aracılığı ile ulaşabilirsiniz!</h3>
                <div className="carreer-btn-form">
                    <button
                      className="thm-btn"
                      onClick={() => handleButtonClick(1)}
                    >
                      Köksal&Partners İnternet Sitesi Aydınlatma Metni
                    </button>
                    <button
                      className="thm-btn"
                      onClick={() => handleButtonClick(2)}
                    >
                      Köksal & Partners İlgili Kişi Başvuru Formu
                    </button>
                    <button
                      className="thm-btn"
                      onClick={() => handleButtonClick(3)}
                    >
                      Çerez Aydınlatma Metni
                    </button>
                  </div>
                  <div className="application-forms">
                    {buttonClicked === 1 && (
                     <iframe src="https://docs.google.com/document/d/e/2PACX-1vTm6fwvXhgPPamntL3oHTC1a9ugnqi-AvceAR_dzftZlyQTiTvZ8E-J41lea1MKvmBXxKfLz_20gw8A/pub?embedded=true" width="70%" height="490"></iframe>
                    )}
                    {buttonClicked === 2 && (
                     <iframe src="https://docs.google.com/document/d/e/2PACX-1vRdsvN9hsaSHV-_S_TSV9d-BUzLyFdj9FgZw2sQKDqtrPKKgrsBWBG8ghrM-WxV1mg8nJLqoDM5gwWo/pub?embedded=true" width="70%" height="490"></iframe>
                    )}
                    {buttonClicked === 3 && (
                     <iframe src="https://docs.google.com/document/d/e/2PACX-1vRdsvN9hsaSHV-_S_TSV9d-BUzLyFdj9FgZw2sQKDqtrPKKgrsBWBG8ghrM-WxV1mg8nJLqoDM5gwWo/pub?embedded=true" width="70%" height="490"></iframe>
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

export default KVKK;
