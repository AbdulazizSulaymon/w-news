import React from "react";

const {
  Provider: NewsApiServiceProvider,
  Consumer: NewsApiServiceConsumer,
} = React.createContext();

export { NewsApiServiceProvider, NewsApiServiceConsumer };
