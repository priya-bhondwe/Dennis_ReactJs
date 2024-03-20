import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TinySlider from "tiny-slider-react";
import "../../node_modules/tiny-slider/dist/tiny-slider.css";

const settings = {
  lazyload: true,
  controls: false,
  mouseDrag: true,
  loop: true,
  rewind: true,
  autoplay: true,
  autoplayButtonOutput: false,
  autoplayTimeout: 3000,
  navPosition: "bottom",
  speed: 400,
  gutter: 12,
  responsive: {
    992: {
      items: 3,
    },
    767: {
      items: 2,
    },
    320: {
      items: 1,
    },
  },
};

export default function Clients() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
        );
        if (response.ok) {
          const data = await response.json();
          setTestimonials(data?.user?.testimonials || []);
        } else {
          console.error("Failed to fetch user data");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section
      className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800"
      id="testi"
    >
      <div className="container">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h3 className="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">
            Client's Review
          </h3>

          <p className="text-slate-400 max-w-xl mx-auto text-[15px]">
            {testimonials?.user?.about?.subTitle}
          </p>
        </div>
        <div className="grid relative grid-cols-1 mt-8">
          <div className="tiny-three-item">
            <TinySlider settings={settings}>
              {testimonials.map((item, index) => (
                <div className="tiny-slide" key={index}>
                  <div className="customer-testi">
                    <div className="content relative rounded shadow shadow-gray-200 dark:shadow-gray-800 m-2 p-6 bg-white dark:bg-slate-900">
                      <i className="mdi mdi-format-quote-open mdi-48px text-amber-500"></i>
                      <p className="text-slate-400 text-[15px]">
                        {item?.review}
                      </p>
                      <ul className="list-none mb-0 text-amber-400 mt-3">
                        <li className="inline">
                          <i className="mdi mdi-star"></i>
                        </li>
                        <li className="inline">
                          <i className="mdi mdi-star"></i>
                        </li>
                        <li className="inline">
                          <i className="mdi mdi-star"></i>
                        </li>
                        <li className="inline">
                          <i className="mdi mdi-star"></i>
                        </li>
                        <li className="inline">
                          <i className="mdi mdi-star"></i>
                        </li>
                      </ul>
                    </div>
                    <div className="text-center mt-5">
                      <img
                        src={item.image.url}
                        className="h-14 w-14 rounded-full shadow-md mx-auto mb-1"
                        alt=""
                      />
                      <Link
                        to=""
                        className="text-base font-medium h5 hover:text-amber-500 duration-500 ease-in-out"
                      >
                        {item?.name}
                      </Link>
                      <span className="text-slate-400 text-sm block">
                        {item?.position}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </TinySlider>
          </div>
        </div>
      </div>
    </section>
  );
}
