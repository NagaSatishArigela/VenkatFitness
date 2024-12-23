import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import bannerImage from '../assets/Venkat-Fitness-Transformations-scaled-e1704266804184-2048x734.jpeg';
import "./index.css";

const CategoryBlogs = ({ posts, categories }) => {
  const { name } = useParams();
  console.log(posts, 'posts', categories, 'ldd', name)
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  useEffect(() => {
    if (posts && categories) {
      // Find the category ID based on the category name from the URL parameter
      const category = categories.find(cat => cat.name === name);
      console.log(category, 'djk')
      if (category) {
        const filtered = posts.filter((post) => 
          post.categories.some(cat => cat.id === category.id)
        );
        console.log(filtered, 'filddv')
        setFilteredBlogs(filtered);
      } else {
        setFilteredBlogs([]);
      }
    }
  }, [name, posts, categories]);
console.log(filteredBlogs, 'fil')
  return (
    <>
      {/* <div
        className="banner-container"
        style={{
          height: "500px",
          width: "100%",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <img
          src={homes} // Replace with the path to your banner image
          alt="Banner"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div> */}
        <header className="bannerb">
          <div className="banner-overlay">
            <img src={bannerImage} alt="blogs" className="banner-image" loading="lazy"/>
            <div className="banner-text">
              <h1>{name}</h1>
            </div>
          </div>
        </header>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          position: "relative",
          paddingTop: "65px",
          alignItems: "center",
          paddingBottom: "40px",
          flexDirection: 'column',
        }}
      >
        {/* <h1 className="category-title">{name}</h1> */}
        <div className="blog-grid">
          {filteredBlogs.map((blog) => (
            <a
              key={blog.id}
              href={`${blog.slug}`}
              className="blog-card"
            >
              <div className="blog-card-inner">
                <img
                  className="blog-cover"
                  src={blog.bannerImage?.url}
                  alt="Blog Cover"
                  loading="lazy"
                />
                <div className="blog-content">
                  <h3 className="blog-title">{blog.title}</h3>
                  <p className="blog-description">{blog.description}</p>
                </div>
                <div style={{padding: '30px'}}>
                  <Link to={`/blog/${blog.slug}`} style={{color: '#FCB13E', textDecoration: 'none', fontWeight: 700}}>
                    <p>READ MORE...</p>
                  </Link>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryBlogs;
