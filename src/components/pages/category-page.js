import React from "react";
import Head from "../head";
import NewsBlog from "../news-blog";
import Spinner from "../spinner/spinner";
import { connect } from "react-redux";
import BtnLoadMore from "../btn-load-more";

const CategoryPage = (props) => {
  const { loading, category } = props;
  const LoadingBlog = loading ? <Spinner /> : "";

  return (
    <div>
      <Head />
      <div className="blog">
        <NewsBlog category={category} />
        <div className="text-center">
          {LoadingBlog}
          <BtnLoadMore category={category} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ loading, country }) => {
  return { loading, country };
};

export default connect(mapStateToProps)(CategoryPage);
