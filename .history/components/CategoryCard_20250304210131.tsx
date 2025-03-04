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
      <div>
        <h5 className="uppercase">categories</h5>
        <h1>Top Categories</h1>
      </div>
    </section>
  );
};
export default CategoryCard;
