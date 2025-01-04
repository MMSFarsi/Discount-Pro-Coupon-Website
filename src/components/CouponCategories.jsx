import { Link } from "react-router-dom";

const CouponCategories = () => {
  const categories = [
    { name: "Electronics", icon: "💻", link: "/brand/brand4" },
    { name: "Fashion", icon: "👗", link: "/brand/brand3" },
    { name: "Food", icon: "🍔", link: "/brand/brand6" },
    { name: "Reading", icon: "📖", link: "/brand/brand5" },
  ];

  return (
    <div className=" py-16">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-9">
        Explore Categories
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-lg shadow-md text-center transform transition duration-300 hover:scale-105 hover:shadow-lg"
          >
            <div className="text-5xl mb-4">{category.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800">{category.name}</h3>
            <Link
              to={category.link}
              className="text-blue-600 font-medium hover:underline mt-3 block"
            >
              View Coupons
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CouponCategories;
