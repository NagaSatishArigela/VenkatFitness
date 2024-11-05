import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./index.css";
import Contact from "./Contact";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import parse from "html-react-parser";
import bannerImage from "../assets/Venkat-Fitness-Transformations-scaled-e1704266804184-2048x734.jpeg";
import { grahcms, QUERY_INDIVIDUAL_POST, QUERY_PRODUCTS } from "../utils/Queries";
import { BlogSkeleton, ProductSkeleton } from "../utils/Skelton";


const ProductCard = ({ product }) => {
  return (
    <a
      href={product.productUrl}
      className="block border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-white overflow-hidden"
      target="_blank"
      rel="noopener noreferrer"
      key={product.id}
    >
      <img
        src={product.productImage?.url}
        alt={product.title}
        className="w-full h-56 object-fill"
        loading="lazy"
      />
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-[#04897C]">
          {product.title}
        </h3>
      </div>
    </a>
  );
};

const BlogContent = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const data = await grahcms.request(QUERY_INDIVIDUAL_POST, { slug });
        const fetchedBlog = data?.posts[0];

        if (fetchedBlog) {
          setBlog(fetchedBlog);

          // Gather related posts from blog categories
          const relatedPosts = fetchedBlog.categories
            .flatMap((category) => category.posts)
            .filter((post) => post.id !== fetchedBlog.id);

          setRelatedPosts(relatedPosts);
        } else {
          console.warn(`No blog found for slug: ${slug}`);
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setIsLoading(false);
      }
    };
    const fetchProducts = async () => {
      try {
        const data = await grahcms.request(QUERY_PRODUCTS);
        setProducts(data.productCards); // Set the fetched products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchBlogData();
    fetchProducts();
    window.scrollTo(0, 0);
  }, [slug]);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  if (isLoading) {
    return (
      <div className="w-full pb-10 bg-gray-100">
        <div className="container mx-auto">
          <div className="grid-container">
            <BlogSkeleton />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
              {[...Array(4)].map((_, index) => (
                <ProductSkeleton key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full pb-10 bg-gray-100">
      <div className="container mx-auto">
        <div className="grid-container">
          {/* First Column */}
          <div className="blog-content">
            <img
              className="cover-image"
              src={blog?.bannerImage?.url ?? bannerImage}
              alt="Blog Cover"
              loading="lazy"
            />
            <h1 className="font-bold text-2xl my-1 pt-5">{blog?.title}</h1>
            <div className="pt-5">{parse(blog?.content?.html || "")}</div>
          </div>

          {/* Second Column */}
          <div className="contact-form">
            <Contact />
            <h1 className="text-xl font-bold mb-5">Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>

        {/* Related Posts Section */}
        {relatedPosts.length > 0 && (
          <div className="related-posts pt-[185px]">
            <h2 className="text-xl font-bold mb-5 ml-5">Related Posts</h2>
            {relatedPosts.length > 3 ? (
              <Carousel responsive={responsive}>
                {relatedPosts.map((post) => (
                  <Link
                    key={post.id}
                    to={`/${post.slug}`}
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                    <div className="related-post-card">
                      <img
                        src={post.bannerImage?.url ?? bannerImage}
                        alt={post.title}
                        className="related-post-image"
                        loading="lazy"
                      />
                      <h3 className="related-post-title">{post.title}</h3>
                    </div>
                  </Link>
                ))}
              </Carousel>
            ) : (
              <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
                style={{ marginBottom: "50px" }}
              >
                {relatedPosts.map((post) => (
                  <Link
                    key={post.id}
                    to={`/${post.slug}`}
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                    <div className="related-post-card">
                      <img
                        src={post.bannerImage?.url ?? bannerImage}
                        alt={post.title}
                        className="related-post-image"
                        loading="lazy"
                      />
                      <h3 className="related-post-title">{post.title}</h3>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      <style>{`
        .related-post-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 10px;
          border: 1px solid #e0e0e0;
          border-radius: 5px;
          background-color: white;
          margin: 20px;
        }

        .related-post-image {
          width: 100%;
          height: 150px;
          object-fit: cover;
          border-radius: 5px;
        }

        .related-post-title {
          margin-top: 10px;
          font-size: 1rem;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default BlogContent;
