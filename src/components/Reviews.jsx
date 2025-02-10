import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [stats, setStats] = useState({
    averageRating: 0,
    totalReviews: 0,
    ratingCounts: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
    ratingPercentages: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
  });
  const [formData, setFormData] = useState({
    name: "",
    rating: 5,
    reviewTitle: "",
    reviewText: "",
    files: [],
  });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const dummyImages = [
    "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  ];

  const token =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InZlbmthdGZpdG5lc3MiLCJyb2xlIjoiYWRtaW4iLCJvcmciOiJ2ZW5rYXRmaXRuZXNzLW9yZyIsImlhdCI6MTczODkwNDk5OX0.1vaDlOyr2_ZMGqTt5Tc-LE6rhqRh1Hcyq3-p_Q60aw0";

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch(
          "https://venkat-fitness.skyhitmedia.website/api/reviews/stats",
          {
            method: "GET",
            headers: {
              Authorization: token,
            },
          }
        );
        const data = await response.json();
        setStats(data);
      } catch (error) {
        console.error("Error fetching review stats:", error);
      }
    };

    const fetchReviews = async () => {
      try {
        const response = await fetch(
          "https://venkat-fitness.skyhitmedia.website/api/reviews",
          {
            method: "GET",
            headers: {
              Authorization: token,
            },
          }
        );
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchStats();
    fetchReviews();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFormData((prev) => ({ ...prev, files: selectedFiles }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("name", formData.name);
    form.append("rating", formData.rating);
    form.append("reviewTitle", formData.reviewTitle);
    form.append("reviewText", formData.reviewText);

    formData.files.forEach((file) => {
      form.append("files", file);
    });

    try {
      const response = await fetch(
        "https://venkat-fitness.skyhitmedia.website/api/reviews",
        {
          method: "POST",
          headers: {
            Authorization: token,
          },
          body: form,
        }
      );

      if (response.ok) {
        const newReview = await response.json();
        setReviews((prev) => [
          {
            ...newReview,
            fileUrls: newReview.fileUrls.map((url) => `https://${url}`),
          },
          ...prev,
        ]);
        setFormData({
          name: "",
          rating: 5,
          reviewTitle: "",
          reviewText: "",
          files: [],
        });
      }
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  const nextSlide = () => {
    if (currentIndex + 1 < reviews.length - 2) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handlePrevClick = () => {
    setActiveImageIndex(
      (prevIndex) => (prevIndex - 1 + dummyImages.length) % dummyImages.length
    );
  };

  const handleNextClick = () => {
    setActiveImageIndex((prevIndex) => (prevIndex + 1) % dummyImages.length);
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-900 p-6 rounded-lg shadow-md">
        <div className="p-4 flex flex-col justify-between bg-gray-800 rounded-lg">
          <div>
            <div className="flex items-center mb-2">
              <h2 className="text-4xl font-bold text-gray-100">
                {Number(stats.averageRating).toFixed(1)}
              </h2>
              <span className="ml-2 text-lg text-gray-400">Out of 5 Stars</span>
            </div>
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, index) => (
                <span
                  key={index}
                  className={`text-2xl ${
                    index < Math.floor(stats.averageRating)
                      ? "text-yellow-500"
                      : "text-gray-400"
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
            <p className="text-gray-400 mb-4">
              Overall rating of {stats.totalReviews} 1st-party reviews
            </p>
            <div className="space-y-2">
              {Object.keys(stats.ratingCounts)
                .reverse()
                .map((star) => (
                  <div key={star} className="flex items-center">
                    <span className="w-16 text-gray-400 text-sm">
                      {star} Star{star > 1 ? "s" : ""}
                    </span>
                    <div className="flex-1 h-4 bg-gray-600 rounded-full mx-2">
                      <div
                        className="h-full bg-teal-400 rounded-full"
                        style={{
                          width: `${stats.ratingPercentages[star]}%`,
                        }}
                      ></div>
                    </div>
                    <span className="text-gray-400 text-sm">
                      {stats.ratingCounts[star]}
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-gray-800 rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-gray-100">
            Leave a Review
          </h2>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 border rounded-lg shadow-md"
          >
            <div>
              <label className="block text-gray-300 font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-2 py-1 border rounded-md bg-gray-700 text-black"
              />
            </div>

            <div>
              <label className="block text-gray-300 font-medium mb-1">
                Rating
              </label>
              <select
                name="rating"
                value={formData.rating}
                onChange={handleInputChange}
                className="w-full px-2 py-1 border rounded-md bg-gray-700 text-black"
              >
                {[5, 4, 3, 2, 1].map((star) => (
                  <option key={star} value={star}>
                    {star} Star{star > 1 ? "s" : ""}
                  </option>
                ))}
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-gray-300 font-medium mb-1">
                Review Title
              </label>
              <input
                type="text"
                name="reviewTitle"
                value={formData.reviewTitle}
                onChange={handleInputChange}
                required
                className="w-full px-2 py-1 border rounded-md bg-gray-700 text-black"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-gray-300 font-medium mb-1">
                Review Text
              </label>
              <textarea
                name="reviewText"
                value={formData.reviewText}
                onChange={handleInputChange}
                required
                rows="3"
                className="w-full px-2 py-1 border rounded-md bg-gray-700 text-black"
              ></textarea>
            </div>

            <div className="md:col-span-2">
              <label className="block text-gray-300 font-medium mb-1">
                Upload Photos
              </label>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleFileChange}
                className="w-full px-2 py-1 border rounded-md bg-gray-700 text-black"
              />
              <div className="mt-2 flex gap-2 flex-wrap">
                {formData.files.map((file, index) => (
                  <img
                    key={index}
                    src={URL.createObjectURL(file)}
                    alt="Selected"
                    className="w-16 h-16 object-cover rounded-md border"
                  />
                ))}
              </div>
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md"
              >
                Submit Review
              </button>
            </div>
          </form>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-white">
        Customer Reviews
      </h2>
      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out gap-4"
            style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
          >
            {reviews.map((review) => (
              <div
                key={review.id}
                className="min-w-[33.333%] p-4 border rounded-lg shadow-sm bg-gray-100 text-gray-800 mx-1"
              >
                <div className="relative w-80 h-60">
                  {/* Carousel Container */}
                  <div className="overflow-hidden rounded-md w-full h-full">
                    <div
                      className="flex transition-transform duration-500 ease-in-out"
                      style={{
                        transform: `translateX(-${activeImageIndex * 100}%)`,
                        width: `${dummyImages.length * 100}%`,
                      }}
                    >
                      {dummyImages.map((img, idx) => (
                        <img
                          key={idx}
                          src={img}
                          alt={`Image ${idx + 1}`}
                          className="w-full object-cover rounded-md"
                          style={{ flex: "0 0 100%" }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Navigation Buttons */}
                  <div className="absolute inset-y-1/2 -translate-y-1/2 flex justify-between w-full px-4">
                    <button
                      onClick={handlePrevClick}
                      className="bg-gray-800 text-white p-2 rounded-full"
                    >
                      <FaArrowLeft />
                    </button>
                    <button
                      onClick={handleNextClick}
                      className="bg-gray-800 text-white p-2 rounded-full"
                    >
                      <FaArrowRight />
                    </button>
                  </div>
                </div>

                <div className="flex items-center mb-1">
                  <span className="text-yellow-400 text-lg">
                    {"★".repeat(review.rating)}
                  </span>
                  <span className="text-gray-400 ml-1">
                    {"★".repeat(5 - review.rating)}
                  </span>
                </div>
                <p className="text-gray-600 font-medium mb-2">
                  {review.rating} out of 5 stars
                </p>
                <h3 className="font-bold text-gray-800 mb-1">
                  {review.name} -{" "}
                  {review.createdAt
                    ? new Date(review.createdAt).toLocaleDateString()
                    : "Unknown Date"}
                </h3>
                <p className="text-gray-700">{review.reviewText}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center mt-4">
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`p-2 bg-gray-700 text-white rounded-full ${
              currentIndex === 0
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-600"
            }`}
          >
            <FaArrowLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentIndex + 3 >= reviews.length}
            className={`p-2 bg-gray-700 text-white rounded-full ${
              currentIndex + 3 >= reviews.length
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-600"
            }`}
          >
            <FaArrowRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
