import image1 from "../assets/gym-trainer-in-hyderabad-600x400-1.webp";
import image2 from "../assets/gym-trainer-hyderabad-600x400-1.webp";
import image3 from "../assets/best-fitness-trainer-in-hyderabad-600x400-1.webp";
import image4 from "../assets/six-pack-gym-in-hyderabad-600x400-1.webp";
import personal from "../assets/PERSONAL-TRAINER-IN-HYDERABAD.webp";
import seminar from "../assets/venkatfitnesscorporatetraining-.webp";
import online from "../assets/online-consultation.webp";
import setup from "../assets/venkatgymconsulting.webp";
import Srikanth from "../assets/srikanth.webp";

export const navlinks = [
  {
    id: 1,
    link: "/home",
    name: "Home",
  },
  {
    id: 2,
    link: "/training",
    name: "Online Trianing",
  },
  {
    id: 3,
    link: "transformations",
    name: "Transformations",
  },
  {
    id: 4,
    link: "/about",
    name: "About Me",
  },
  {
    id: 5,
    link: "/contact",
    name: "Contact Us",
  },
];

export const gymArea = [
  {
    id: 1,
    name: "GYM1",
    url: image1,
  },
  {
    id: 2,
    name: "GYM2",
    url: image2,
  },
  {
    id: 3,
    name: "GYM3",
    url: image3,
  },
  {
    id: 4,
    name: "GYM4",
    url: image4,
  },
];

export const videoTestimonals = [
  {
    id: 1,
    name: "video1",
    url: "https://www.youtube.com/embed/1ul5cCOgoms",
  },
  {
    id: 2,
    name: "video2",
    url: "https://www.youtube.com/embed/sR3TjJaSHZA",
  },
  {
    id: 3,
    name: "video3",
    url: "https://www.youtube.com/embed/vARaF5e--Ms",
  },
  {
    id: 4,
    name: "video4",
    url: "https://www.youtube.com/embed/oyGTprBTWlg",
  },
];

export const servicesData = [
  {
    id: 1,
    title: "PERSONAL TRAINER IN HYDERABAD",
    url: personal,
    list: [
      "Fat Loss Program",
      "Weight Gain Program",
      "Sports Specific Fitness",
      "Injury Rehabilitation",
    ],
  },
  {
    id: 2,
    title: "SEMINARS FOR GYMS & CORPORATE",
    url: seminar,
    list: [
      "Customized Topics",
      "Series Of Seminars",
      "Practical Demonstration",
      "PP Presentation",
    ],
  },
  {
    id: 3,
    title: "ONLINE CONSULTATION",
    url: online,
    list: ["Whatsapp", "Skype", "Mobile", "SMS"],
  },
  {
    id: 4,
    title: "GYM SET UPS CONSULTATION",
    url: setup,
    list: ["Project Research", "Budgeting", "Implementing", "Management"],
  },
];
const breakpoints = [4320, 2160, 1080, 640, 384, 256, 128];
const unsplashLink = (id, width, height) =>
  `https://source.unsplash.com/${id}/${width}x${height}`;
export const tranformationImages = [
  // {
  //   src: image1,
  //   width: 320,
  //   height: 174,
  // },
  {
    src: Srikanth,
    width: 140,
    height: 174,
  },
  {
    src: image2,
    width: 1080,
    height: 1426,
  },
  {
    src: image3,
    width: 1080,
    height: 1440,
  },
  {
    src: image4,
    width: 1080,
    height: 716,
  },
];

export const slides = tranformationImages.map((photo) => {
  const width = photo.width * 4;
  const height = photo.height * 4;
  return {
    src: photo.src,
    width,
    height,
    srcSet: breakpoints.map((breakpoint) => {
      const breakpointHeight = Math.round((height / width) * breakpoint);
      return {
        src: photo.src,
        width: breakpoint,
        height: breakpointHeight,
      };
    }),
  };
});
