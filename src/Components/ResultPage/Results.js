import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { API_key } from "../../keys";
import "./Results.css";

function Results() {
  const [Newsdata, setData] = useState();
  const category = useSelector((state) => state.reducer);
  console.log(category);
  axios
    .get(
      `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${API_key}`
    )
    .then((res) => {
      console.log(res.data.articles);
      setData(res.data.articles);
    });

  return Newsdata?.map((item) => (
    <div className="container">
      <div className="image">
        <img alt="thumbnail" src={item.urlToImage} />
      </div>
      <div className="text-container">
        <div className="text-title">
          <a href={item.url}>{item.title}</a>
        </div>
        <div className="date">
          <b>short</b> by {item.author} / {item.publishedAt}
        </div>
        <div className="description">{item.description}</div>
        <div className="read-more">
          read more at <a href={item.url}>{item.source.name}</a>
        </div>
      </div>
    </div>
  ));
}

export default Results;
