import React from "react";
import { Image } from "react-bootstrap";
import Link from "../Reuseable/Link";
import TextSplit from "../Reuseable/TextSplit";

const SingleServiceOne = ({ service = {} }) => {
  const { title, image, icon, href, text } = service;

  return (
    <div className="services-one__single">
      <div className="services-one__img">
        <Image src={require(`@/images/services/${image}`).default.src} alt="" />
      </div>
      <div className="services-one__content">
        <div className="services-one__title-box">
          <h3 className="services-one__title">
            <Link href={href}>
              <TextSplit text={title} />
            </Link>
          </h3>
        </div>

        <div className="services-one__bottom">
          <Link href={href} className="services-one__read-more">
            Daha Fazla Bilgi
          </Link>
          <Link href={href} className="services-one__arrow">
            <span className="icon-right-arrow"></span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleServiceOne;
