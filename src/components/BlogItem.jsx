import { Link } from 'react-router-dom';
import '../styles/Card.css'
import { LazyLoadImage } from "react-lazy-load-image-component";

const BlogItem = ({
  blog: {
    title,
    summary,
    cover,
    id
  }
}) => {
  return (
    <Link className='cardLink' to={'./' + id}>
      <div className='cardContainer container mt-4'>
        <div className='container-fluid'>
          <div className="d-inline-flex fs-3 fw-bold header">{title}</div>
          <div className='row row-cols-1 row-cols-lg-2'>
            <div className='col-12 col-lg-3 d-flex align-items-center justify-content-center'><LazyLoadImage src={cover} alt="cover" /></div>
            <div className='col-12 col-lg-9'>{summary}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogItem;