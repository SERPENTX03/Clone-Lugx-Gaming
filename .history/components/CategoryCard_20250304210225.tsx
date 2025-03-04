const CategoryCard = () => {
  const CardData = [
    {
      img: "/images/categories-01.jpg",
      title: "Action",
    },
    {
      img: "/images/categories-02.jpg",
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
    {
      img: "/images/categories-06.jpg",
      title: "Action",
    },
  ];
  return (
    <section className=" mt-32">
      <div className="text-center">
        <h5 className="uppercase text-red-500 font-semibold">categories</h5>
        <h1 className="text-3xl lg:text-4xl font-bold">Top Categories</h1>
      </div>
    </section>
  );
};
export default CategoryCard;
