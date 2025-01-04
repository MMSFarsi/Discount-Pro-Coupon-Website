import React from "react";
import { useLoaderData } from "react-router-dom";

const BrandsOnSale = () => {
  const brands = useLoaderData();


  const saleBrands = brands.filter((brand) => brand.isSaleOn);

  return (
    <div className="p-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
        Brands on Sale
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {saleBrands.map((brand) => (
          <div
            key={brand._id}
            className="border bg-white rounded-lg shadow-sm transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg p-5"
          >
            <img
              src={brand.brand_logo}
              alt={brand.brand_name}
              className="w-full h-32 object-contain mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {brand.brand_name}
            </h3>
            <p className="text-sm text-gray-500 mb-3">
              Category: {brand.category}
            </p>
            <p className="text-sm text-green-600 font-medium">
              {brand.coupons.length} Coupons Available
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandsOnSale;
