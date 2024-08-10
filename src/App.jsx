import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import "./react-slick.css";
import "slick-carousel/slick/slick.css";
import About from "./pages/About";
import Transformations from "./pages/Transformations";
import ContactUs from "./pages/ContactUs";
import Training from "./pages/Training";
import ThankYou from "./components/ThankYou";
import Blogs from "./pages/Blogs";
import {
  QUERY_SLUG_CATEGORIES,
  QUERY_SLUG_POSTS,
  grahcms,
} from "./utils/Queries";
import BlogContent from "./pages/BlogContent";
import CategoryBlogs from "./pages/CategoryBlogs";
import { Helmet } from "react-helmet";

function App() {
  const [categories, setCategories] = useState([]);
  const [posts, setPosts] = useState([]);
  const [postsPerPage] = useState(21);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await grahcms.request(QUERY_SLUG_CATEGORIES);
        setCategories(data.categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const query = QUERY_SLUG_POSTS(postsPerPage, currentPage);
        const data = await grahcms.request(query, {});
        setPosts(data.posts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, [postsPerPage, currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Helmet>
          <title>
            Venkat Fitness Trainer - #1 Best Fitness Trainer in Hyderabad -
            India
          </title>
          <meta
            name="title"
            content="Venkat Fitness Trainer - Best Fitness Trainer in Hyderabad - India"
          />
          <meta
            name="description"
            content="Venkat Fitness Trainer is the Best Fitness Trainer in Hyderabad having 15+ Years experience in the field of fitness and has transformed over hundreds of clients through his training"
          />
          <meta
            name="keywords"
            content="Venkat Fitness Trainer,  fitness trainer venkat, best fitness trainer in hyderabad, Personal Trainer near me in Hyderabad, Personal fitness trainer in Hyderabad,Celebrity fitness trainers in Hyderabad,  Best fitness trainer in hyderabad for ladies, Best fitness trainer in hyderabad for weight loss, venket fitness, venket fitness trainer,venkat madamala, Best gym in hyderabad, Top Gyms in Jubilee Hills, Best gym in jubilee hills hyderabad, Best gym in jubilee hills with price, Gyms in Banjara Hills"
          />

          <meta
            property="og:title"
            content="Venkat Fitness Trainer - Best Fitness Trainer in Hyderabad - India"
          />
          <meta
            property="og:description"
            content="Venkat Fitness Trainer is the Best Fitness Trainer in Hyderabad having 15+ Years experience in the field of fitness and has transformed over hundreds of clients through his training"
          />
          <meta property="og:image" content="" />
          <meta property="og:url" content="https://venketfitness.com/" />
        </Helmet>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about-me" element={<About />} />
          <Route path="/transformations" element={<Transformations />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/online-training" element={<Training />} />
          <Route
            path="/blogs"
            element={
              <Blogs
                Blogs={posts}
                onPageChange={handlePageChange}
                currentPage={currentPage}
              />
            }
          />
          <Route
            path="/blog/:slug"
            element={<BlogContent blogs={posts} categories={categories} />}
          />
          <Route
            path="/blog/category/:name"
            element={<CategoryBlogs posts={posts} categories={categories} />}
          />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
