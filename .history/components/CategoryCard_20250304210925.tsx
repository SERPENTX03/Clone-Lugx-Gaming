import Image from "next/image";

const CategoryCard = () => {
  const CardData = [
    {
      img: "/images/categories-01.jpg",
      title: "Action",
    },
    {
      img: "/images/categories-05.jpg",
      title: "Action",
    },
    {
      img: "/images/categories-03.jpg",
      title: "Action",
    },
    {
      img: "/images/categories-04.jpg",
      title: "Action",
    },
    {
      img: "/images/categories-05.jpg",
      title: "Action",
    },
  ];
  return (
    <section className=" mt-32">
      <div className="text-center">
        <h5 className="uppercase text-red-500 font-semibold">categories</h5>
        <h1 className="text-3xl lg:text-4xl font-bold">Top Categories</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {CardData.map((cat, index) => {
          return (
            <div key={index} className="border rounded-xl shadow-xl w-full">
              <p className="text-center">{cat.title}</p>
              <div className="relative">
                <Image
                  className="object-cover w-full"
                  src={cat.img}
                  alt={`${index} ${cat.title}`}
                  width={200}
                  height={200}
                  priority
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default CategoryCard;
