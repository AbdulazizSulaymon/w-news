import React from "react";
import "./btn-load-more.css";
import { newsAdded, newsRequested, newsError } from "../../actions";
import { connect } from "react-redux";
import { WithNewsApiService } from "../hoc";
import compose from "../../utils/compose";

class BtnLoadMore extends React.Component {
  click = () => {
    const {
      context: { newsapiService },
      category,
      newsRequested,
      newsAdded,
      country,
      page,
    } = this.props;

    newsRequested();
    newsapiService
      .getNews(country, category, page + 1)
      .then((data) => {
        newsAdded(data, page + (data.length === 0 ? 0 : 1));
      })
      .catch((error) => {
        newsError(error);
      });
  };

  render() {
    return (
      <button className="btn btn-primary" onClick={this.click}>
        Load more
      </button>
    );
  }
}

const mapStateToProps = ({ page, country }) => {
  return { page, country };
};

const mapDispatchToProps = {
  newsRequested,
  newsError,
  newsAdded,
};

export default compose(
  WithNewsApiService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BtnLoadMore);
