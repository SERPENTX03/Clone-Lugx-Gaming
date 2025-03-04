const Subscribe = () => {
  return (
    <section className="relative mt-32 w-full px-4 sm:px-20">
      {/* cat-bg: centered, only visible on lg screens with -z-20 */}
      <div className="hidden lg:block absolute top-0 left-1/2 transform -translate-x-1/2 -z-20 cat-bg"></div>

      {/* Container for blocks with flex layout */}
      <div className="relative flex flex-col lg:flex-row lg:justify-between lg:items-center gap-60">
        {/* Our Shop Block - Left Middle */}
        <div className="relative lg:w-[500px] lg:mt-[10%]">
          <div className="bg-gray-100 p-8 lg:p-12 rounded-2xl">
            <h2 className="text-red-500 font-bold">OUR SHOP</h2>
            <div className="text-4xl font-bold mt-4">
              Go Pre-Order Buy & Get Best{" "}
              <span className="text-blue-500">Prices</span> For You!
            </div>
            <p className="mt-10 text-gray-700">
              Lorem ipsum dolor consectetur adipiscing, sed do eiusmod tempor
              incididunt.
            </p>
            <button className="mt-10 py-3 px-4 rounded-full bg-red-500 text-white">
              SHOP NOW
            </button>
          </div>
        </div>

        {/* Newsletter Block - Right Middle */}
        <div className="relative lg:w-[500px] lg:mt-[20%]">
          <div className="bg-gray-100 p-8 rounded-xl">
            <h2 className="text-red-500 font-bold">NEWSLETTER</h2>
            <div className="text-4xl font-bold mt-4">
              Get Up To $100 Off Just Buy{" "}
              <span className="text-blue-500">Subscribe</span> Newsletter!
            </div>
            <input
              className="mt-10 w-full py-3 px-5 rounded-full border border-gray-300"
              placeholder="your email..."
              type="text"
            />
            <button className="mt-3 w-full py-3 px-4 rounded-full bg-red-500 text-white">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Subscribe;
