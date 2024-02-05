import { contactPage } from "@/data/contact";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Title from "../Reuseable/Title";
import ContactForm from "./ContactForm";

const { tagline, title, inputs, title2 } = contactPage;

const ContactPage = ({ isTitleTwo = false }) => {
  const newTitle = isTitleTwo ? title2 : title;

  return (
    <section className="contact-page">
      <Container>
        <Title title={newTitle} tagline={tagline} className="text-center" />
        <Row>
          <Col xl={12}>
            <div className="contact-page__form">
              <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeX_Th2GM6rK_CZY40gZAXEmOM108rr3HCKUAxCGE_PKPILTA/viewform?embedded=true" width="640" height="585" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
              <p style={{fontSize:"12px",textAlign:"justify",color:"black"}}> Köksal & Partners Avukatlık Ortaklığı olarak, İletişim/Rezervasyon Formu aracılığıyla kişisel verilerinizi; iletişim faaliyetlerinin yürütülmesi, mal/hizmet satış süreçlerinin yürütülmesi ve Aydınlatma Metni’nde sayılan diğer amaçlarla sınırlı olarak işlemekteyiz. Ayrıca kişisel verileriniz, formu doldurmanız ve “Gönder” butonuna tıklamanız durumunda kişisel verilerinizin yurt dışında yerleşik Google sunucularına aktarılmasına açık rıza verdiğiniz kabul edilecektir. Kişisel verilerinizin işlenmesine ve aktarılmasına ilişkin detaylı bilgi için <a href="" style={{fontSize:"16px",textAlign:"justify",color:"darkblue"}}> iletişim formu aydınlatma metnini </a> ve <a href="" style={{fontSize:"16px",textAlign:"justify",color:"darkblue"}}> duyuru grubu aydınlatma metnini </a> inceyebilirsiniz.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactPage;
