import React, { Component } from "react";
import { connect } from "react-redux";

import {
  newsLoaded,
  newsRequested,
  newsError,
  newsItemChoosed,
} from "../../actions";
import { compose } from "../../utils";
import { WithNewsApiService } from "../hoc";
import NewsBlogItem from "./news-blog-item";
import "./news-blog.css";
import ErrorIndicator from "../error-indicator/error-indicator";

class NewsBlog extends Component {
  GetBlogItems = (news, categoryName) => {
    const { newsItemChoosed } = this.props;
    const res = news.map((item, index) => {
      return (
        <div className="col-md-6 col-lg-3 mb-4" key={index}>
          <NewsBlogItem
            key={item.url}
            details={item}
            categoryName={categoryName}
            id={index}
            newsItemChoosed={newsItemChoosed}
          ></NewsBlogItem>
        </div>
      );
    });
    return res;
  };

  componentDidMount() {
    this.update();
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.country !== this.props.country ||
      prevProps.category !== this.props.category
    ) {
      this.update();
    }
  }

  update = () => {
    const {
      context: { newsapiService },
      category,
      newsRequested,
      newsLoaded,
      newsError,
      country,
    } = this.props;

    newsRequested();

    newsapiService
      .getNews(country, category, 1)
      .then((data) => {
        newsLoaded(data);
      })
      .catch((error) => {
        newsError(error);
      });
  };

  render() {
    const { news, loading, error, category } = this.props;
    // if (loading) return <Spinner />;
    if (error) return <ErrorIndicator />;

    return (
      <section className="container-fluid ">
        <div className="news-blog blog-item">
          <p className="text-primary section-name">{category}</p>
          <div className="row mb-4">{this.GetBlogItems(news, category)}</div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = ({ news, loading, error, country }) => {
  return { news, loading, error, country };
};

const mapDispatchToProps = {
  newsRequested,
  newsLoaded,
  newsError,
  newsItemChoosed,
};

export default compose(
  WithNewsApiService(),
  connect(mapStateToProps, mapDispatchToProps)
)(NewsBlog);
