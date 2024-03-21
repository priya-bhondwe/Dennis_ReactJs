import React from "react";
import useUserData from "./useUserData";

export default function Experience() {
  const userData = useUserData();
  return (
    <section
      className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800"
      id="experience"
    >
      <div className="container">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h3 className="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">
            Work Experience
          </h3>
          <p className="text-slate-400 max-w-xl mx-auto text-[15px]">
            Obviously I'm a Web Designer. Web Developer with over 7 years of
            experience. Experienced with all stages of the development.
          </p>
        </div>

        <div className="grid grid-cols-1 mt-8">
          {userData?.user?.timeline.map((item, index) => (
            <div
              key={index}
              className="relative after:content-[''] after:absolute after:top-0 ltr:md:after:right-0 ltr:md:after:left-0 rtl:md:after:left-0 rtl:md:after:right-0 after:w-px after:h-full md:after:m-auto after:border-s-2 after:border-dashed after:border-gray-200 dark:after:border-gray-700 ms-3 md:ms-0"
            >
              <div className="ms-8 md:ms-0 relative after:content-[''] after:absolute after:top-[9px] after:rounded-full after:z-10 after:w-2.5 after:h-2.5 after:bg-amber-500 md:after:mx-auto ltr:md:after:right-0 ltr:md:after:left-0 rtl:md:after:left-0 rtl:md:after:right-0 ltr:after:-left-9 rtl:after:-right-9 before:content-[''] before:absolute md:before:mx-auto ltr:md:before:right-0 ltr:md:before:left-0 ltr:before:-left-11 rtl:md:before:left-0 rtl:md:before:right-0 rtl:before:-right-11 before:rounded-full before:z-10 before:border-2 before:border-dashed before:border-gray-200 dark:before:border-gray-700 before:top-0 before:w-7 before:h-7 before:bg-white dark:before:bg-slate-900">
                <div className="grid md:grid-cols-2">
                  <div className="md:text-end md:me-8 relative">
                    {/* <img
                      src={item?.icon}
                      className="rounded-full h-9 w-9 md:ms-auto"
                      alt={item.company_name}
                    /> */}
                    <h5 className="my-2 font-semibold text-lg">
                      {item.company_name}
                    </h5>
                    <h5 className="font-semibold">
                      {item.startDate} - {item.endDate}
                    </h5>
                  </div>

                  <div className="ltr:float-left rtl:float-right text-start md:ms-8 mt-6 md:mt-0">
                    <h5 className="title mb-1 font-semibold">
                      {item.jobTitle}
                    </h5>
                    <h5 className="title mb-1 font-semibold">
                      {item.jobLocation}
                    </h5>
                    <p className="mt-3 mb-0 text-slate-400 text-[15px]">
                      {item.bulletPoints}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
