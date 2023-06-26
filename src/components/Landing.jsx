import React from "react";

const Landing = () => {
  return (
    <div>
      <div className="top bg-hero-pattern h-screen flex justify-center flex-col items-center z-20 relative">
        <section className="max-w-screen-2xl	">
          <div className=" w-3/5 ">
            <h1 className=" text-8xl text-white font-syne ">
              If you can share you can sell
            </h1>
            <div>
              <label
                className=" mt-5 relative bg-white min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border overflow-hidden rounded-2xl gap-2 focus-within:border-gray-300"
                htmlFor="search-bar"
              >
                <input
                  id="search-bar"
                  placeholder="vodeoshops.com/YourMarketplaceName"
                  className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white"
                />
                <button className="w-full md:w-auto px-6 py-3 bg-primary border-primary text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all disabled:opacity-70">
                  <div className="relative">
                    <div className="flex items-center transition-all opacity-1 valid:">
                      <span className="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                        Get Started Free!
                      </span>
                    </div>
                  </div>
                </button>
              </label>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Landing;
