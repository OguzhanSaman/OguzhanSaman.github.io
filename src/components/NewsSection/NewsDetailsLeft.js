import React from "react";
import { Image } from "react-bootstrap";
import Link from "../Reuseable/Link";




const NewsDetailsLeft = ({ news = {} }) => {
  const {
    image,
    subtitle,
    date,
    title,
    text,
    text2,
    tags,
  } = news;

  return (
    <div className="news-details__left">
      <div className="news-details__img">
        <Image src={image.src} alt="" />
      </div>
      <div className="news-details__content">
        <p className="news-details__sub-title">{subtitle}</p>
        <ul className="list-unstyled news-details__meta">
          <li>
            <Link href="/blog-details">
              <i className="far fa-clock"></i> {date}
            </Link>
          </li>
          <li>
            <span>/</span>
          </li>

        </ul>
        <h3 className="news-details__title">{title}</h3>
        <p className="news-details__text-1">{text}</p>
        <p className="news-details__text-2">{text2}</p>
      </div>
      <div className="news-details__bottom">
        <p className="news-details__tags">
          <span>Tags</span>
          {tags.map((tag, i) => (
            <a href="#" key={i}>
              {tag}
            </a>
          ))}
        </p>
      </div>
    </div>
  );
};

export default NewsDetailsLeft;
