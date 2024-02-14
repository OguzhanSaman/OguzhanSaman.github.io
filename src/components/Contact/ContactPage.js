import { contactPage } from "@/data/contact";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Title from "../Reuseable/Title";
import ContactForm from "./ContactForm";
import Link from "next/link";

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
              <p style={{fontSize:"12px",textAlign:"justify",color:"black"}}> Köksal & Partners olarak, iletişim formu vasıtasıyla paylaştığınız kişisel verilerinizi, 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında Aydınlatma Metni'nde sayılan amaçlarla sınırlı olarak işlemekte ve saklama ve arşiv faaliyetlerinin yürütülmesi amacıyla sınırlı olarak Google’a aktarmaktayız. Form üzerindeki ilgili alanların tarafınızca doldurulması ve gönderilmesi halinde süreç kapsamında işlenen kişisel verilerinizin sunucuları yurt dışında bulunan Google’a aktarılmasına açık rıza verdiğiniz kabul edilecektir. Köksal & Partners tarafından işlenen kişisel verilerinize ilişkin detaylı bilgi için <Link style={{color:"blue"}} href={"/kvkk"}>Aydınlatma Metni</Link>’nde yer alan "İletişim Süreci" başlığını inceleyebilirsiniz. Tarafımızla sağlık bilgisi, ceza mahkumiyeti ve güvenlik tedbirleri gibi özel nitelikli kişisel verilerin paylaşılmamasını önemle rica ederiz.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactPage;
