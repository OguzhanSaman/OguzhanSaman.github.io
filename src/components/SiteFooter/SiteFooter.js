import footerData from "@/data/siteFooter";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Link from "../Reuseable/Link";
import ImageGrid from "./ImageGrid"; // Import the ImageGrid componen




const {
  bg,
  logo,
  aboutText,
  author,
  year,
  links,
  socials,
  newsletterText,
  address,
  phone,
  phoneHref,
  email,
  kpoLogo,
  kpdataLogo,
  themosLogo,
  irnLogo,
} = footerData;

const SiteFooter = ({ footerClassName = "" }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData.get("email"));
  };

  return (
    <footer className={`site-footer ${footerClassName}`}>
      <div className="site-footer__top">
        <div
          className="site-footer-shape-1"
          style={{ backgroundImage: `url(${bg.src})` }}
        ></div>
        <Container>
          <Row>
            <Col xl={3} lg={6} md={6} className="animated fadeInUp">
            <div className="footer-widget__column footer-widget__about">
                <div id="footer-logo" className="footer-widget__logo">
                  <Link href="/">
                    <Image src={logo.src} alt="Köksal & Partners Logo" />
                  </Link>
                </div>
                <div className="footer-widget__about-text-box">
                  <p className="footer-widget__about-text">{aboutText}</p>
                </div>
                <div className="site-footer__social">
                  {socials.map(({ id, href, icon }) => (
                    <a key={id} href={href}>
                      <i className={icon}></i>
                    </a>
                  ))}
                </div>
              </div>            </Col>
            <Col xl={3} lg={6} md={6} className="animated fadeInUp">
            <div className="footer-widget__column footer-widget__explore clearfix">
                <h3 className="footer-widget__title">Menü</h3>
                <ul className="footer-widget__explore-list list-unstyled clearfix">
                  {links.slice(0, 5).map(({ id, href, text }) => (
                    <li key={id}>
                      <Link href={href}>{text}</Link>
                    </li>
                  ))}
                </ul>
                <ul className="footer-widget__explore-list footer-widget__explore-list-two list-unstyled clearfix">
                  {links.slice(5).map(({ id, href, text }) => (
                    <li key={id}>
                      <Link href={href}>{text}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
            <Col xl={3} lg={6} md={6} className="animated fadeInUp">
              <div className="footer-widget__column footer-widget__explore clearfix">
                <h3 className="footer-widget__title">İş Ortaklarımız</h3>
                {/* Use the ImageGrid component here */}
                <ImageGrid
                  logos={[
                    { src: footerData.themosLogo.src, alt: "Themos Logo", href: "https://www.themos.com.tr" },
                    { src: footerData.kpoLogo.src, alt: "KPO Logo", href: "https://kpo.one" },
                    { src: footerData.irnLogo.src, alt: "IRN Logo", href: "https://www.incidentresponsenetwork.com" },
                    { src: footerData.kpdataLogo.src, alt: "Kpdata Logo", href: "https://www.kpveri.com" }
                    
                  ]}
                />
              </div>
            </Col>
            <Col xl={3} lg={6} md={6} className="animated fadeInUp">
            <div className="footer-widget__column footer-widget__contact clearfix">
                <h3 className="footer-widget__title">İletişim</h3>
                <p className="footer-widget__contact-text">{address}</p>
                <h4 className="footer-widget__contact-info">
                  <a
                    href={`tel:${phoneHref}`}
                    className="footer-widget__contact-number"
                  >
                    {phone}
                  </a>{" "}
                  <a
                    href={`mailto:${email}`}
                    className="footer-widget__contact-email"
                  >
                    {email}
                  </a>
                </h4>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="site-footer__bottom">
        <Container>
          <Row>
            <Col xl={12}>
              <div className="site-footer__bottom-inner">
                <p className="site-footer__bottom-text">
                  © Copyright {year} by <a href="#">{author}</a>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default SiteFooter;


