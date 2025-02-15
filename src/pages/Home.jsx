import banner from "../assets/Fitness-Trainer-in-Hyderabad.jpg";
import mobileBanner from "../assets/Personal-Trainer-near-me-in-Hyderabad.jpg";
import ProgressBar from "../utils/ProgressBar";
import Slider from "react-slick";
import { Box, Typography } from "@mui/material";
import { gymArea, servicesData, videoTestimonals } from "../utils/Data";
import profile from "../assets/profile.svg";
import list from "../assets/list.svg";
import people from "../assets/people.svg";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import SliderArrow from "../components/SlideArrow";
import SingleAccordion from "../components/Accordion";

  
const Home = () => {

  const sliderConfig = {
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SliderArrow type="prev" />,
    nextArrow: <SliderArrow type="next" />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // This will animate the scroll to the top
    });
  };

  return (
    <>
      <Helmet>
        <meta
          name="title"
          content="Venkat Fitness Trainer - Best Fitness Trainer in Hyderabad - India"
        />
        <meta
          name="description"
          content="Venkat Fitness Trainer is the Best Fitness Trainer in Hyderabad having 15+ Years experience in the field of fitness and has transformed over hundreds of clients through his training"
        />
        <meta name="keywords" content="Venkat Fitness Trainer" />

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

      <div className="top-[120px] relative">
        <div>
          <img
            src={banner}
            alt="Venkat Trainer"
            className="w-full hidden lg:block"
            loading="lazy"
          />
          <img
            src={mobileBanner}
            alt="Venkat Trainer"
            className="w-full lg:hidden"
            loading="lazy"
          />
        </div>
        <div className="flex m-8">
          <h1
            className="sm:text-5xl font-extrabold font-Poppins lg:p-8 p-2 m-auto"
            style={{ fontWeight: "bolder" }}
          >
            Venkat Fitness – Certified Celebrity Fitness Trainer
          </h1>
        </div>
        <div className="flex flex-col items-center px-2">
          <h4 className="text-4xl font-Poppins font-bold uppercase m-auto pb-20">
            Services
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Box 1 */}
            {servicesData.map((service) => (
              <div
                className="bg-Teal rounded-t-full p-6 h-auto"
                key={service.id}
              >
                <img
                  src={service.url}
                  alt="Service 1"
                  className="max-w-[95%] m-auto"
                  loading="lazy"
                />
                <h5 className="text-white text-center text-2xl py-2 font-Poppins font-semibold mb-2">
                  {service.title}
                </h5>
                <div className="py-12 flex justify-center">
                  <ul className="text-white flex flex-col justify-center items-start">
                    {service.list.map((item, index) => (
                      <li
                        key={index}
                        className="list-disc text-xl font-Poppins text-center"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gray-100 py-20 px-2">
          <div className="mx-auto text-center flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/4 mb-8 md:mb-0">
              <h2 className="text-5xl font-bold mb-8 font-Poppins">
                Our Trainer Skills
              </h2>
              <p className="text-xl mb-12 font-Poppins">
                Venkat Madamala is a certified online personal trainer with 15
                years of rich experience in fitness.
              </p>
            </div>
            <div className="w-full md:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Skill Boxes */}
                <div className="p-2 rounded-lg shadow-md flex flex-col justify-evenly items-center">
                  <img
                    src={profile}
                    alt="profile"
                    className="h-20 p-6 border-4 border-Teal"
                    loading="lazy"
                  />
                  <h3 className="text-2xl font-semibold mb-4 mt-4 font-Poppins">
                    Professional Trainer
                  </h3>
                </div>

                <div className="p-2 rounded-lg shadow-md flex flex-col justify-evenly items-center">
                  <img
                    src={list}
                    alt="list"
                    className="h-20 p-6 border-4 border-Teal"
                    loading="lazy"
                  />
                  <h3 className="text-2xl font-semibold mb-4 mt-4 font-Poppins">
                    Have Done Certification
                  </h3>
                </div>

                <div className="p-2 rounded-lg shadow-md flex flex-col justify-evenly items-center">
                  <img
                    src={people}
                    alt="people"
                    className="h-20 p-6 border-4 border-Teal"
                    loading="lazy"
                  />
                  <h3 className="text-2xl font-semibold mb-4 mt-4 font-Poppins">
                    Friendly Personal Trainer
                  </h3>
                </div>
              </div>

              {/* Progress Bars */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                <ProgressBar title="Weight Lost" percentage={85} />
                <ProgressBar title="Client Consultation" percentage={75} />
                <ProgressBar title="Exercise Training" percentage={95} />
                <ProgressBar title="Junior Training" percentage={90} />
                <ProgressBar title="Yoga Training" percentage={92} />
                <ProgressBar title="Old Health Training" percentage={65} />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 py-20">
          <div className="container px-4 mx-auto text-center">
            <h2 className="text-5xl font-bold mb-12">Reviews</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {videoTestimonals.map((video) => (
                <div key={video.id} className="flex justify-center p-2">
                  <iframe
                    width="100%"
                    height="380px"
                    src={video.url}
                    title={video.name}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ maxWidth: "730px", maxHeight: "360px" }} // Adjust as needed
                  ></iframe>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <h2 className="container mx-auto text-center font-bold text-4xl mb-10">
            HIGH PERFORMANCE FACILITIES <br />
            GYM In Hyderabad
          </h2>
          <div className="relative p-2 shadow-lg rounded-lg">
            <Slider {...sliderConfig}>
              {gymArea.map((gallery) => (
                <Box
                  key={gallery.id}
                  sx={{
                    lineHeight: 0,
                    overflow: "hidden",
                    borderRadius: 3,
                    mb: 2,
                  }}
                >
                  <img
                    src={gallery.url}
                    alt={gallery.name}
                    style={{ width: "100%", margin: "0 8px" }}
                    loading="lazy"
                  />
                </Box>
              ))}
            </Slider>
          </div>
        </div>
        <SingleAccordion page="Home"/>
        <div className="bg-Teal flex flex-col md:flex-row justify-center items-center mt-20 border-b-2">
          <div className="lg:py-[50px] py-[10px] m-auto">
            <Typography
              variant="h2"
              sx={{ fontFamily: "Poppins", fontSize: "32px", padding: "20px" }}
            >
              Achieve Your Fitness Goals
            </Typography>
            <Typography
              variant="h2"
              sx={{ fontFamily: "Poppins", fontSize: "18px", padding: "20px" }}
            >
              Flexible membership packages to suit all levels of training to
              help achieve your fitness goals
            </Typography>
          </div>
          <div className="lg:py-[50px] py-[10px] m-auto">
            <Link to="/contact-us">
              <button
                onClick={scrollToTop}
                className="border-2 p-4 text-xl font-semibold bg-primary"
              >
                Join Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
