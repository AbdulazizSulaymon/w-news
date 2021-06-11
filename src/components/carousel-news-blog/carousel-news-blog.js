import React, { Component } from "react";
import { connect } from "react-redux";

import {
  newsRequested,
  newsError,
  newsItemChoosed,
  newsHomeAdded,
} from "../../actions";
import { compose } from "../../utils";
import { WithNewsApiService } from "../hoc";
import NewsBlogItem from "./../news-blog/news-blog-item";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator/error-indicator";
import "./carousel-news-blog.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { menuList } from "../../consts";
import { Link } from "react-router-dom";

class CarouselNewsBlog extends Component {
  GetBlogItems = (news, category) => {
    const { newsItemChoosed } = this.props;
    const res = news.map((item, index) => {
      return (
        <SwiperSlide key={index}>
          <NewsBlogItem
            key={item.url}
            details={item}
            categoryName={category}
            id={index}
            newsItemChoosed={newsItemChoosed}
          ></NewsBlogItem>
        </SwiperSlide>
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
      newsRequested,
      newsError,
      newsHomeAdded,
      country,
    } = this.props;

    newsRequested();

    menuList.map((category, i) => {
      return newsapiService
        .getNews(country, category, 1)
        .then((data) => {
          newsHomeAdded(category, data);
        })
        .catch((error) => {
          newsError(error);
        });
    });

    return true;
  };

  GetCarouselNews = (newsHome) => {
    return menuList.map((category, i) => {
      const item = newsHome.find((item) => {
        return item.category === category;
      });
      if (!item) return <div key={category}></div>;
      const news = item.news;
      return (
        <section className="carousel-news-blog blog-item" key={category}>
          <Link to={`/news/${category}`} className="text-primary section-name">
            {category}
          </Link>
          <Swiper
            spaceBetween={30}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              540: {
                slidesPerView: 2,
              },
              960: {
                slidesPerView: 3,
              },
              1140: {
                slidesPerView: 4,
              },
            }}
          >
            {this.GetBlogItems(news, category)}
          </Swiper>
        </section>
      );
    });
  };

  render() {
    const { newsHome, loading, error } = this.props;
    if (loading) return <Spinner />;
    if (error) return <ErrorIndicator />;
    return this.GetCarouselNews(newsHome);
  }
}

const mapStateToProps = ({ newsHome, loading, error, country }) => {
  return { newsHome, loading, error, country };
};

const mapDispatchToProps = {
  newsRequested,
  newsError,
  newsHomeAdded,
  newsItemChoosed,
};

export default compose(
  WithNewsApiService(),
  connect(mapStateToProps, mapDispatchToProps)
)(CarouselNewsBlog);
