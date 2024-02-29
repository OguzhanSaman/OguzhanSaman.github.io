import React from "react";
import { Image } from "react-bootstrap";
import Link from "../Reuseable/Link";

const NewsDetailsLeft = ({ news = {} }) => {
  const {
    subtitle,
    date,
    title,
    text,
    dynamicContent,
    author,
    tags,
  } = news;

  const renderDynamicContent = () => {
    return dynamicContent.map((item, index, title) => {
      if (item.type === "paragraph") {
        return <p key={index} className="news-p">{item.content}</p>;
      } else if (item.type === "list") {
        return (
          <ul key={index} className="news-ul">
            {item.content.map((listItem, idx) => (
              <li key={idx}>{listItem}</li>
            ))}
          </ul>
        );
      } else if (item.type === "header") {
        return <h4 key={index} className="news-h4">{item.content}</h4>;
      } else if (item.type === "subheader") {
        return <h5 key={index} className="news-h5">{item.content}</h5>;
      } else if (item.type === "image") {
        return <Image key={index} src={item.content.src} alt={title} className="news-img"/>;
      } else {
        // Handle other types if needed
        return null;
      }
      
    });
  };

  return (
    <div className="news-details__left">
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
        {renderDynamicContent()}
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
        <p className="news-details__author">
          <span>Yazar: </span>
          <a href="/ekip" style={{color: "black"}}>{author}</a>
        </p>
      </div>
    </div>
  );
};

export default NewsDetailsLeft;
