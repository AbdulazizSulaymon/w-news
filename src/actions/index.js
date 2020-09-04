const newsRequested = () => {
  return {
    type: "NEWS_REQUESTED",
  };
};

const newsLoaded = (news) => {
  return {
    type: "NEWS_LOADED",
    payload: news,
  };
};

const newsError = (error) => {
  return {
    type: "NEWS_ERROR",
    payload: error,
  };
};

const newsAdded = (news, page) => {
  return {
    type: "NEWS_ADDED",
    payload: news,
    page: page,
  };
};

const countryChanged = (country) => {
  return {
    type: "COUNTRY_CHANGED",
    payload: country,
  };
};

const newsItemChoosed = (item) => {
  return {
    type: "NEWS_ITEM_CHOOSED",
    payload: item,
  };
};

const newsHomeAdded = (category, news) => {
  return {
    type: "NEWS_HOME_ADDED",
    payload: { category, news },
  };
};

export {
  newsRequested,
  newsLoaded,
  newsError,
  newsAdded,
  countryChanged,
  newsItemChoosed,
  newsHomeAdded,
};
