import { Link, useLoaderData } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { FaStar } from "react-icons/fa";
import "animate.css";
import { Helmet } from "react-helmet-async";

const Brands = () => {
  const brands = useLoaderData();
  const { user } = useContext(AuthContext);
  const [search, setSearch] = useState("");

  const filteredBrands = brands.filter((brand) =>
    brand.brand_name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    
    <div className="container mx-auto px-6 py-8">
       <Helmet>
        <title>Discount Pro | Brands</title>
      </Helmet>
    
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
        Explore Top Brands
      </h1>


      <div className="mb-8">
        <input
          type="text"
          placeholder="Search for brands..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input input-bordered w-full md:w-1/2 mx-auto block shadow-lg"
        />
      </div>

  
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredBrands.map((brand) => (
          <div
            key={brand._id}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border p-6 flex flex-col items-center"
          >
        
            <img
              src={brand.brand_logo}
              alt={brand.brand_name}
              className="h-24 w-auto object-contain mb-4"
            />

            <div className="text-center">
              <h2 className="text-xl font-semibold text-gray-800">
                {brand.brand_name}
              </h2>
              <p className="text-gray-600 text-sm mb-3">
                {brand.description}
              </p>
              <div className="flex items-center justify-center text-yellow-500 mb-3">
                <FaStar className="mr-1" />
                <span>{brand.rating.toFixed(1)}</span>
              </div>
            </div>

   
            <div className="text-center">
              {brand.isSaleOn && (
                <p className="text-red-500 font-bold animate__animated animate__bounce animate__infinite mb-3">
                  Sale is on!
                </p>
              )}
              <Link
                to={`/brand/${brand._id}`}
                className="btn btn-primary btn-sm"
              >
                View Coupons
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
