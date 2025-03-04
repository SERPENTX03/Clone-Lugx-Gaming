const Subscribe = () => {
  return (
    <section className="sm:px-20 mt-32 w-full -z-20 flex">
      <div className="cat-bg relative hidden lg:block"></div>
      <div className="">
        <div className="bg-gray-100 p-8 w-full rounded-2xl">
          <h2 className="text-red-500 font-bold">OUR SHOP</h2>
          <div className="text-4xl font-bold mt-4">
            Go Pre-Order Buy & Get Best{" "}
            <span className="text-blue-500">Prices </span>
            For You!
          </div>
          <p className="mt-10 text-gray-700">
            Lorem ipsum dolor consectetur adipiscing, sed do eiusmod tempor
            incididunt.
          </p>
          <button className="py-3 px-4 rounded-full mt-10 bg-red-500 text-white">
            SHOP NOW
          </button>
        </div>

        <div className="bg-gray-100 p-8 w-full mt-10 rounded-xl">
          <h2 className="text-red-500 font-bold">OUR SHOP</h2>
          <div className="text-4xl font-bold mt-4">
            Get Up To $100 Off Just Buy{" "}
            <span className="text-blue-500">Subscribe </span>
            Newsletter!{" "}
          </div>

          <input
            className="mt-16 w-full py-3 px-5 rounded-full"
            placeholder="your email..."
            type="text"
          />
          <button className="py-3 px-4 w-full rounded-full mt-3 bg-red-500 text-white">
            SHOP NOW
          </button>
        </div>
      </div>
    </section>
  );
};
export default Subscribe;
