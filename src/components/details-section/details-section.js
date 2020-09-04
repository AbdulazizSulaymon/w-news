import React from "react";
import "./details-section.css";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const DetailsSection = (props) => {
  let res = <div>nothing</div>;
  try {
    const {
      title,
      description,
      urlToImage,
      content,
      url,
      category,
      publishedAt,
    } = props.newsItem;

    res = (
      <div className="details-section container py-5 text-center">
        <img src={urlToImage} className="w-75" alt={title} />
        <h5 className="published-date my-4">
          {category} - {publishedAt}
        </h5>
        <h3 className="title text-left my-4">{title}</h3>
        <h5 className="description text-left my-4">{description}</h5>
        <p className="content-news text-left">{content}</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary"
        >
          Go to Website
        </a>
      </div>
    );
  } catch (error) {
    props.history.push(`/`);
  }

  return res;
};

const mapStateToProps = ({ newsItem }) => {
  return { newsItem };
};

export default withRouter(connect(mapStateToProps)(DetailsSection));
