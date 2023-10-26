"use client";

import NewsCard from "@components/news/NewsCard";
import axios from "axios";
import { Router } from "next/router";
import React, { useEffect, useState } from "react";

const page = () => {
  Router.events.on("routeChangeStart", (url) => {
    console.log("Routing started...");
  });
  const [news, setNews] = useState([]);
  useEffect(() => {
    const fetchAllNews = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
      );
      setNews(response.data.articles);
    };
    fetchAllNews();
  }, []);
  return (
    <div>
      <div className="events_header h-48 flex font-roboto text-yellow-400 text-5xl font-bold items-center">
        <p className="px-10 translate-x-10">NEWS</p>
      </div>
      
      <div className="bg-white min-h-screen flex flex-col text-black items-center">
      {news.map((news, index) => {
        return (
          <div key={index} className="w-3/4">
            <NewsCard 
                author={news.author}
                content={news.content}
                description={news.description}
                date={news.publishedAt}
                title={news.title}
                url={news.url}
                urlToImage={news.urlToImage}
            />
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default page;
