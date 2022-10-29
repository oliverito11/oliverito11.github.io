import '../styles/List.css'
import NavBar from '../components/NavBar';
import SearchBox from '../components/SearchBox';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import { useState, useEffect } from 'react';
import BlogList from '../components/BlogList';
import NextPage from '../components/NextPage';

function List({ list, page, changePage }) {
  const [searchStr, setSearchStr] = useState("");
  const [date1, setDate1] = useState(null);
  const [date2, setDate2] = useState(null);
  const [blogs, setBlogs] = useState(list);
  const [pages, setPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    setBlogs(list);
    fetch("https://weboliver.fly.dev/entries/" + page.toLowerCase() + "/count")
      .then((res) => res.json())
      .then((json) => setPages(Math.floor(json / 10)))

    window.scrollTo(0, 0)
  }, [list]);


  const valueChanged = (str, d1, d2) => {
    setSearchStr(str);
    setDate1(d1);
    setDate2(d2);
  };

  return (
    <>
      <NavBar active={page} page={page} />
      <div className='container-fluid'>
        <div className='row row-cols-12'>
          <SearchBox valueChanged={valueChanged} />
          <div className='pagesTop'>
            {
              pages > 0 ?
                <NextPage pages={pages} page={page} changePage={changePage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                :
                null
            }
          </div>
          <div className='col-2'></div>
          {
            blogs != null ?
              <>
                <div className='listContainer col-12 col-lg-10 p-5'>
                  <BlogList blogs={blogs} searchStr={searchStr} date1={date1} date2={date2} />
                </div>
                <div className='pagesBot'>
                  {
                    pages > 0 ?
                      <NextPage pages={pages} page={page} changePage={changePage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                      :
                      null
                  }
                </div>
              </>
              : null
          }
        </div>
      </div>
      {
        blogs != null ?
        <Footer />
        : null
      }
      <BackToTop />
    </>
  );
}

export default List;
