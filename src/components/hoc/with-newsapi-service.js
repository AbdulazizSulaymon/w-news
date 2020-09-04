import React from "react";
import { NewsApiServiceConsumer } from "../newsapi-service-context";

const WithNewsApiService = () => (Wrapped) => {
  return (props) => {
    return (
      <NewsApiServiceConsumer>
        {(value) => {
          return <Wrapped {...props} context={value} />;
        }}
      </NewsApiServiceConsumer>
    );
  };
};

export default WithNewsApiService;
