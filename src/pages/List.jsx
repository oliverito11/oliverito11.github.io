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
    fetch("http://localhost:5000/entries/" + page.toLowerCase() + "/count")
      .then((res) => res.json())
      .then((json) => setPages(Math.floor(json / 10)))

    window.scrollTo(0, 0)
  }, [list]);


  const valueChanged = (str, d1, d2) => {
    setSearchStr(str);
    setDate1(d1);
    setDate2(d2);
  };

  if (blogs == null)
    return null
  else
    return (
      <>
        <NavBar active={page} page={page} />
        <div className='container-fluid'>
          <div className='row row-cols-12'>
            <SearchBox valueChanged={valueChanged} />
            <div className='pagesTop'>
            {
              pages > 0 ?
                <NextPage pages={pages} page={page} changePage={changePage} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
                :
                null
            }
            </div>
            <div className='col-2'></div>
            <div className='listContainer col-12 col-lg-10 p-5'>
              <BlogList blogs={blogs} searchStr={searchStr} date1={date1} date2={date2} />
            </div>
            <div className='pagesBot'>
            {
              pages > 0 ?
                <NextPage pages={pages} page={page} changePage={changePage} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
                :
                null
            }
            </div>
          </div>
        </div>
        <Footer />
        <BackToTop />
      </>
    );
}

export default List;
