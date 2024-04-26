import React from "react";
import { Image, Row } from "react-bootstrap";
import Faqs from "../FAQsPage/Faqs";
import SingleHowHelp from "./SingleHowHelp";

const ServiceDetailsRight = ({ service = {} }) => {
  const { image, icon, title, text, text2, text3, contents, howHelps, faqs } =
    service;

  return (
    <div className="service-details__right">
      <div className="service-details__content">
        <div className="service-details__title-box">
          <div className="service-details__title-icon">
            <span className={icon}></span>
          </div>
          <h3 className="service-details__title">{title}</h3>
        </div>
        {/* Render old version of text */}
        {text && <p className="service-details__text">{text}</p>}
        {text2 && <p className="service-details__text">{text2}</p>}
        {text3 && <p className="service-details__text">{text3}</p>}
        {/* Render new flexible content blocks */}
        {contents.map((content, index) => {
          if (content.type === "text") {
            return <p key={index} className="service-details__text">{content.value}</p>;
          } else if (content.type === "header") {
            return <h4 key={index} className="service-details__header">{content.value}</h4>;
          } 
            else if (content.type === "subheader") {
            return <h5 key={index} className="service-details__subheader">{content.value}</h5>;
          }
            else if (content.type === "blist") {
              return (
                <ul key={index} className="service-details__blist">
                  {content.value.map((item, itemIndex) => {
                    const colonIndex = item.indexOf(":");
                    const boldText = item.slice(0, colonIndex + 1);
                    const remainingText = item.slice(colonIndex + 1);
                    return (
                      <li key={itemIndex}>
                        <span className="bold-text">{boldText}</span>{" "}
                        {remainingText}
                      </li>
                    );
                  })}
                </ul>
              );
          }
            else if (content.type === "list") {
              return (
                <ul key={index} className="service-details__list">
                  {content.value.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              );
            }
          return null;
        })}
      </div>
      <div className="service-details__how-help">
        <Row>
          {howHelps.map((howHelp) => (
            <SingleHowHelp key={howHelp.id} howHelp={howHelp} />
          ))}
        </Row>
      </div>
      <div className="service-details__faq">
        <Faqs faqs={faqs} />
      </div>
    </div>
  );
};

export default ServiceDetailsRight;
