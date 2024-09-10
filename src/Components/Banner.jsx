const Banner = () => {
  return (
    <div className="bg-[#2f0b4c] flex justify-between min-h-[640px]">
      <div className="max-w-7xl mx-auto flex lg:flex-row flex-col items-center relative z-50">
        <div className="flex flex-col space-y-10">
          <p className="text-xl text-white font-light">EXPLORE THE UNIVERSE</p>
          <h1 className="text-white text-5xl">
            START EXPLORING <br /> ALL OVER THE SPACE
          </h1>
          <p className="text-xl text-white font-light">
            Start to Explore in the Space, Navigate and discover all the wonders
            of the universe.
          </p>
          <button className="btn bg-pink-500 w-44  rounded-3xl">
            Get Started
          </button>
        </div>

        <div>
          <img src="/rocket.svg" className="w-96 animate-shake" alt="" />
        </div>
      </div>
      <div className="absolute z-10 bottom-0 w-full  top-80">
        <img src="/cloud.svg" alt="" />
      </div>
      <div className="absolute inset-1 left-[700px] w-60 top-1/4 ">
        <img src="/earth.svg" alt="" />
      </div>
      <div className="absolute  right-40 top-20 w-20 ">
        <img src="/earth.svg" alt="" />
      </div>
    </div>
  );
};

export default Banner;
