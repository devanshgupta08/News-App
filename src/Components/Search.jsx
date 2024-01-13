import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsItem from './NewsItem';
import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ClipLoader from 'react-spinners/ClipLoader';
import PropTypes from 'prop-types';

const Search = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const pageSize = props.pageSize;
  let maxPages = 0;

  const getData = async (param) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?page=${param}&apiKey=${props.apiKey}&pageSize=${pageSize}&q=${props.searchValue}`
      );
      setArticles(response.data.articles);
      maxPages = Math.ceil(response.data.totalResults / pageSize);
    } catch (error) {
      if (error.response.status === 429) {
        toast.error('API Request Limit Reached');
      } else {
        toast.error(error.message);
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      await getData(1);
    };
    fetchData();
  }, []); 

  const handleOnNext = async () => {
    const nextPage = page + 1;
    if (nextPage <= maxPages) {
      setPage(nextPage);
      await getData(nextPage);
    }
  };

  const handleOnPrev = async () => {
    if (page > 1) {
      const prevPage = page - 1;
      setPage(prevPage);
      await getData(prevPage);
    }
  };

  const handleGoBack = () => {
    props.setIsSearch(false);
  };

  return (
    <>
      {loading ? (
        <div className="container d-flex justify-content-center align-items-center" style={{ height: '80vh' }}>
          <ClipLoader
            color={'#000000'}
            loading={true}
            cssOverride={{}}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <>
          <h1 className="mb-4 mt-5 text-center">News App - Search Results</h1>
          <div className="container d-flex justify-content-between mb-2">
            <Button variant="primary" onClick={handleGoBack}>
              &larr; Go Back
            </Button>
          </div>
          <div className="container my-5 ">
            <div className="row">
              {articles.map((element, index) => (
                <div className="col-md-4 my-3" key={index}>
                  <NewsItem article={element} />
                </div>
              ))}
            </div>
          </div>
          <div className="container d-flex justify-content-between mb-2">
            <Button variant="primary" disabled={page <= 1} onClick={handleOnPrev}>
              &larr; Prev
            </Button>
            <Button variant="primary" disabled={page + 1 > maxPages} onClick={handleOnNext}>
              Next &rarr;
            </Button>
          </div>
        </>
      )}
    </>
  );
};

Search.defaultProps = {
  pageSize: 6,
};

Search.propTypes = {
  pageSize: PropTypes.number,
  apiKey: PropTypes.string.isRequired,
  searchValue: PropTypes.string.isRequired,
  setIsSearch: PropTypes.func.isRequired,
};

export default Search;
