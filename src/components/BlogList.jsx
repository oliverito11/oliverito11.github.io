import { useEffect, useState } from 'react';
import BlogItem from './BlogItem';

const BlogList = ({ blogs, searchStr, date1, date2 }) => {
  const [filteredList, setFileterdList] = useState([]);
  useEffect(() => {
    if(searchStr === null) {
      if(date1 === null || date2 === null) {
        setFileterdList(blogs);
      }
    }
    else {
      setFileterdList(blogs.filter((blog) => (searchStr.trim() === '' ? true : blog.title.includes(searchStr)) &&
      (date1 === null ? true :  blog.date > date1) && (date2 === null ? true : blog.date < date2)));
    }
  }, [blogs, searchStr, date1, date2])
  
  return (
    <>
      {
        filteredList.map((blog) => <BlogItem blog={blog} key={blog.id} />)
      }
    </>
  );
};

export default BlogList;