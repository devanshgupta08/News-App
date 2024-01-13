import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import News from './Components/News';
import About from './Components/About';
import ContactUs from './Components/ContactUs';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Search from './Components/Search';

const App = () => {
  const [selectedCountry, setSelectedCountry] = useState('in');
  const [hash, setHash] = useState(window.location.hash);
  const [searchValue, setSearch] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const apiKey = import.meta.env.VITE_API_KEY;
  useEffect(() => {
    const handler = () => {
      setHash((prev) => {
        const newHash = window.location.hash;
        if (prev !== newHash) {
          return newHash;
        }
        return prev;
      });
    };
    window.addEventListener("hashchange", handler);
    return () => {
      window.removeEventListener("hashchange", handler);
    };
  }, []);
  const handleCountryChange = (newCountry) => {
    setSelectedCountry(newCountry);
    setHash(`#${newCountry}/top-headlines`);
  };

  useEffect(() => {
    window.location.hash = `#${selectedCountry}/top-headlines`;
  }, [selectedCountry]);

  return (
    <>
      <Router>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {!isSearch &&<Navbar handleCountryChange={handleCountryChange} selectedCountry={selectedCountry} searchValue={searchValue} setSearch={setSearch} setIsSearch={setIsSearch} isSearch={isSearch} />}
        <>{isSearch && <Search apiKey={apiKey} key="search" pageSize={9} country={selectedCountry} searchValue={searchValue} setIsSearch={setIsSearch}/>}</>
        <Routes>
          <Route path={selectedCountry}>
            <>
              <Route path="top-headlines" element={!isSearch && <News key="general" pageSize={9} country={selectedCountry} category="general" apiKey={apiKey} />} />
              <Route path="business" element={!isSearch && <News  key="business" pageSize={9} country={selectedCountry} category="business" apiKey={apiKey} />} />
              <Route path="entertainment" element={!isSearch && <News  key="entertainment" pageSize={9} country={selectedCountry} category="entertainment" apiKey={apiKey} />} />
              <Route path="health" element={!isSearch && <News  key="health" pageSize={9} country={selectedCountry} category="health" apiKey={apiKey} />} />
              <Route path="science" element={!isSearch && <News  key="science" pageSize={9} country={selectedCountry} category="science" apiKey={apiKey} />} />
              <Route path="sports" element={!isSearch && <News key="sports" pageSize={9} country={selectedCountry} category="sports" apiKey={apiKey} />} />
              <Route path="technology" element={!isSearch && <News  key="technology" pageSize={9} country={selectedCountry} category="technology" apiKey={apiKey} />}/>
            </>
            <Route path="about" element={<About></About>}></Route>
            <Route path="contactus" element={<ContactUs></ContactUs>}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
