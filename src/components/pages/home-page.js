import React from "react";
import Head from "../head";
import CarouselNewsBlog from "../carousel-news-blog";

const HomePage = () => {
  return (
    <div>
      <Head />
      <div className="blog">
        <CarouselNewsBlog />
      </div>
    </div>
  );
};

export default HomePage;
