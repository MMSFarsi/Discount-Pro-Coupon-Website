import React from "react";
import Marquee from "react-fast-marquee";
import { Link, useLoaderData } from "react-router-dom";


const TopBrand = () => {
  const brands=useLoaderData()
  
 

  return (
    <div className="my-10 ">

      <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">Top Brands</h2>


      <Marquee pauseOnHover={true} speed={50} gradient={false} className="flex items-center">
        {brands.map((brand) => (
          <Link to="/brands"
            key={brand._id}
        
            className="mx-4 transition-transform transform hover:scale-110"
          >
            <img src={brand.brand_logo} alt={`Brand ${brand._id}`} className="h-20 mr-9 w-auto" />
          </Link>
        ))}
      </Marquee>
    </div>
  );
};

export default TopBrand;
