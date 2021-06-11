export default class NewsApiService {
  getResource = async (url) => {
    var req = new Request(url);
    const res = await fetch(req);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }
    //json().body.articles
    return await res.json();
  };

  getNews = async (country, category, page = 1) => {
    // throw new Error("error errorr");
    var url =
      `https://newsapi.org/v2/top-headlines?` +
      `country=${country}&` +
      `category=${category}&` +
      `pageSize=12&` +
      `page=${page}&` +
      `apiKey=8d529f2f8411476681c7d9ae77f4d4f4`;
    const res = await this.getResource(url);
    // console.log("res");
    // console.log(res.articles);
    return res.articles;
  };

  getTestData = () => {
    return news;
  };
}

const news = [
  {
    categoryName: "sport",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/200821083635-sgt-elder-fernandes-super-tease.jpg",
    title:
      "Body believed to be that of a missing Fort Hood soldier has been found - CNN",
    publishedAt: "2020-08-26T13:38:00Z",
    url:
      "https://www.cnn.com/2020/08/26/us/fort-hood-soldier-missing-elder-fernandes-trnd/index.html",
  },
  {
    categoryName: "sport",
    urlToImage:
      "https://img.huffingtonpost.com/asset/5f457b371f0000ec04aa9ca7.jpeg?ops=1778_1000",
    title:
      "Experts Predict What Flu Season Will Be Like During The Pandemic - HuffPost",
    publishedAt: "2020-08-26T13:23:00Z",
    url:
      "https://www.huffpost.com/entry/experts-predict-flu-season-covid-19_l_5f455316c5b6c00d03b4d0e7",
  },
  {
    categoryName: "sport",
    urlToImage:
      "https://img.huffingtonpost.com/asset/5f457b371f0000ec04aa9ca7.jpeg?ops=1778_1000",
    title:
      "Experts Predict What Flu Season Will Be Like During The Pandemic - HuffPost",
    publishedAt: "2020-08-26T13:23:00Z",
    url:
      "https://www.huffpost.com/entry/experts-predict-flu-season-covid-19_l_5f455316c5b6c00d03b4d0e73",
  },
  {
    categoryName: "sport",
    urlToImage:
      "https://img.huffingtonpost.com/asset/5f457b371f0000ec04aa9ca7.jpeg?ops=1778_1000",
    title:
      "Experts Predict What Flu Season Will Be Like During The Pandemic - HuffPost",
    publishedAt: "2020-08-26T13:23:00Z",
    url:
      "https://www.huffpost.com/entry/experts-predict-flu-season-covid-19_l_5f455316c5b6c00d03b4d0e74",
  },
];
