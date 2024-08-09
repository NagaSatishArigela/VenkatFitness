import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import bannerImage from "../assets/Venkat-Fitness-Transformations-scaled-e1704266804184-2048x734.jpeg";
import "./index.css";
import Paginate from "./Paginate";

const Blogs = ({ Blogs, currentPage, onPageChange }) => {

  const itemsPerPage = 20;

  const pages = [];
  for (let i = 1; i <= Math.ceil(Blogs.length / itemsPerPage); i++) {
    pages.push(i);
  }

  return (
    <>
      <div
        className="banner-container"
        style={{
          // height: "500px",
          width: "100%",
          position: "relative",
          overflow: "hidden",
          paddingTop: "70px",
        }}
      >
        <header className="bannerb">
          <div className="banner-overlay">
            <img
              src={bannerImage}
              alt="blogs"
              className="banner-image"
              loading="lazy"
            />
          </div>
        </header>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          position: "relative",
          paddingTop: "55px",
          alignItems: "center",
          paddingBottom: "40px",
          flexDirection: "column",
        }}
      >
        <div className="blog-grid">
          {Blogs.map((blog) => (
            <Link key={blog.id} to={`/blog/${blog.slug}`} className="blog-card">
              <div className="blog-card-inner">
                <img
                  className="blog-cover"
                  src={
                    blog?.bannerImage?.url ? blog.bannerImage.url : bannerImage
                  }
                  alt="Blog Cover"
                  loading="lazy"
                />
                <div className="blog-contents">
                  <h6 className="blog-title">{blog.title}</h6>
                  <p className="blog-description">{blog.description}</p>
                  <div style={{ position: "absolute", bottom: "0px" }}>
                    <Link
                      to={`/blog/${blog.slug}`}
                      style={{
                        color: "#04879C",
                        textDecoration: "none",
                        fontWeight: 700,
                      }}
                    >
                      <p className="pt-2 pb-2">READ MORE...</p>
                    </Link>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <Paginate
          postsPerPage={itemsPerPage}
          totalPosts={Blogs.length}
          paginate={onPageChange}
          previousPage={() => onPageChange(currentPage - 1)}
          nextPage={() => onPageChange(currentPage + 1)}
        />
      </div>
    </>
  );
};

Blogs.propTypes = {
  Blogs: PropTypes.array.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Blogs;
