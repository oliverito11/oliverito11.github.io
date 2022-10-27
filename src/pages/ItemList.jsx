import '../styles/ItemList.css'

import { LazyLoadImage } from "react-lazy-load-image-component";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import BackToTop from "../components/BackToTop";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

function ItemList({ list }) {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    if(list == null)
      return;
    let bl = list.find((b) => b.id === parseInt(id));

    if (bl) {
      setBlog(bl);
    }
  }, [list]);

  const renderData = () => {
    if (!blog) return null;
    let result = [];
    let cont = 0;
    blog.content.forEach(c => {
      if (c.startsWith("data:image")) {
        result.push(
          <LazyLoadImage key={"img" + cont++} src={c} className={"entryImages"} />
        );
      }
      else if (c.startsWith("link:")) {
        result.push(
          <a key={"a" + cont++} href={c.substring(c.indexOf('*') + 1)} target="_blank">{c.substring(c.indexOf(':') + 1, c.indexOf('*'))}</a>
        );
      }
      else {
        result.push(
          <p key={"text" + cont++} >{c}</p>
        );
      }
    });
    return result;
  };
  return !blog ? null : (
    <>
      <NavBar active="projects" page="Project" />

      <div className='cont'>
        <div className='headerTitle'>
          {blog.title}
        </div>
        <div className='title'>
          {blog.subtitle}
        </div>
        <div className='description'>
          {renderData()}
        </div>
        {
          blog.tryit === "" || blog.tryit === null ?
            null
            :
            <div>
              <a href={blog.tryit} target="__blank">Try it!</a>
            </div>
        }
      </div>
      <Footer />
      <BackToTop />
    </>
  );
}

export default ItemList;