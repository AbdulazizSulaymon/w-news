import React, { Component } from "react";
import "./news-blog-item.css";
import { Link } from "react-router-dom";

export default class NewsBlogItem extends Component {
  getDate = (date) => {
    const res = (date + "").substring(0, 10);
    return res;
  };

  render() {
    const {
      details: { urlToImage, title, publishedAt },
      categoryName,
      id,
      newsItemChoosed,
    } = this.props;
    const img = "url('" + (urlToImage ? urlToImage : "/img/poster.svg") + "')";
    return (
      <Link
        onClick={() => {
          newsItemChoosed({
            ...this.props.details,
            urlToImage: urlToImage ? urlToImage : "/img/poster.svg",
            category: categoryName,
            publishedAt: this.getDate(publishedAt),
          });
        }}
        to={`/news/${categoryName}/${id + 1}`}
        className="news-blog-item"
      >
        <div className="blog-item-img">
          <div
            className="item-img"
            style={{
              backgroundImage: img,
            }}
          ></div>
        </div>
        <p className="category-name">{categoryName}</p>
        <p className="title my-3 mx-2">{title}</p>
        <p className="published-date  mx-2">{this.getDate(publishedAt)}</p>
      </Link>
    );
  }
}
