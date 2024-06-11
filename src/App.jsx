import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import './react-slick.css';
import "slick-carousel/slick/slick.css";
import About from './pages/About';
import Transformations from './pages/Transformations';
import ContactUs from './pages/ContactUs';
import Training from './pages/Training';
import ThankYou from './components/ThankYou';
import Blogs from './pages/Blogs';
import { QUERY_SLUG_CATEGORIES, QUERY_SLUG_POSTS, grahcms } from './utils/Queries';
import BlogContent from './pages/BlogContent';

function App() {
  const [categories, setCategories] = React.useState([]);
  const [posts, setPosts] = React.useState([]);
  
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await grahcms.request(QUERY_SLUG_CATEGORIES);
        setCategories(data.categories);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await grahcms.request(QUERY_SLUG_POSTS);
        setPosts(data.posts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about-me" element={<About />} />
          <Route path="/transformations" element={<Transformations />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/online-training" element={<Training />} />
          <Route path='/blogs' element={<Blogs Blogs={posts}/>}/>
          <Route path="/blog/:blogID" element={<BlogContent blogs={posts} categories={categories}/>}/>
          <Route path="/thank-you" element={<ThankYou/>}/>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
