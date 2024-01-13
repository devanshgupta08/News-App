import React, {useState,useEffect } from 'react';
import axios from 'axios';
import NewsItem from './NewsItem';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ClipLoader from 'react-spinners/ClipLoader';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

export default function News (props) {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  
  useEffect(() => {
    (async () => {
      await getData(1);
    })();
    document.title = `News App - ${props.category === "general" ? "Top-Headline" : props.category.charAt(0).toUpperCase() + props.category.slice(1)}`;
  }, []);
  
  const override = {};
  const pageSize = props.pageSize;
  let maxPages = 0;

  const  getData = async (param) => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=${props.country}&page=${param}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${pageSize}`
      );
      setArticles( response.data.articles);
      setTotalResults(response.data.totalResults);
      maxPages = Math.ceil(response.data.totalResults / pageSize);
    } catch (error) {
      console.error('Error fetching data:', error);
      if (error.response.status === 429) {
        toast.error("API Request Limit Reached");
      }
      else {
        toast.error(error.message);
      }

    }
    setLoading(false);
  };
  
  const fetchMoreData = async () => {
    const nextPage = page + 1;
    setPage(nextPage);
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=${props.country}&page=${nextPage}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${pageSize}`
      );
      setArticles(articles.concat(response.data.articles) );
      setTotalResults(response.data.totalResults);
      maxPages = Math.ceil(response.data.totalResults / pageSize)
    } catch (error) {
      console.error('Error fetching data:', error);
      if (error.response.status === 429) {
        toast.error("API Request Limit Reached");
      }
      else {
        toast.error(error.message);
      }
    };
  }

    return (
      <>
        {loading ? (
          <div className="container d-flex justify-content-center align-items-center" style={{ height: '80vh' }}>
            <ClipLoader
              color={'#000000'}
              loading={true}
              cssOverride={override}
              size={100}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        ) : (
          <>
            <h1 className="mb-4 mt-5 text-center">News App - {props.category === "general" ? "Top-Headline" : props.category.charAt(0).toUpperCase() + props.category.slice(1)}</h1>
            <InfiniteScroll
              dataLength={articles.length}
              next={fetchMoreData}
              hasMore={articles.length !== totalResults}
              loader={
                <div className="container d-flex justify-content-center mb-4">
                  <ClipLoader
                    color={'#000000'}
                    loading={true}
                    cssOverride={override}
                    size={40}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                  />
                </div>}
            >
              <div className="container my-5 ">
                <div className="row">
                  {articles.map((element, index) => (
                    <div className="col-md-4 my-3" key={index}>
                      <NewsItem article={element} />
                    </div>
                  ))}
                </div>
              </div>
            </InfiniteScroll>

          </>
        )}
      </>
    )
}
News.defaultProps = {
  pageSize: 9,
  country: "in",
  category: "general",
};

News.propTypes = {
  pageSize: PropTypes.number,
  country: PropTypes.string,
  category: PropTypes.string,
  apiKey: PropTypes.string.isRequired,
};