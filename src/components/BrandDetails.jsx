import { useLoaderData, useNavigate } from "react-router-dom";
import { FaStar, FaClipboard } from "react-icons/fa";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BrandDetails = () => {
  const brand = useLoaderData();
  const navigate = useNavigate();
  const [copiedCoupon, setCopiedCoupon] = useState("");

  const handleCopyAlert = (couponCode) => {
    setCopiedCoupon(couponCode);
    toast.success(`Coupon code "${couponCode}" copied to clipboard!`);
  };

  return (
    <div className="min-h-screen  p-8">


      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 mb-8 flex flex-col sm:flex-row items-center">
        <img
          src={brand.brand_logo}
          alt={brand.brand_name}
          className="h-44  object-cover rounded-lg sm:mr-6 mb-4 sm:mb-0"
        />
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-indigo-700">{brand.brand_name}</h1>
          <p className="text-gray-700 mt-2">{brand.description}</p>
          <div className="flex items-center text-yellow-500 mt-3">
            <FaStar className="mr-1" />
            <span>{brand.rating.toFixed(1)}</span>
          </div>
        </div>
      </div>



      <h2 className="text-3xl font-semibold text-white mb-6">Available Coupons</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {brand.coupons.map((coupon, index) => (
          <div key={index} className="card bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition-all">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-800">{coupon.coupon_code}</h3>
              <div>
                <CopyToClipboard
                  text={coupon.coupon_code}
                  onCopy={() => handleCopyAlert(coupon.coupon_code)}
                >
                  <button className="btn btn-sm btn-primary flex items-center">
                    <FaClipboard className="mr-1" />
                    Copy
                  </button>
                </CopyToClipboard>
              </div>
            </div>
            <p className="text-gray-600 mb-3">{coupon.description}</p>
            <p className="text-sm text-gray-500 mb-2">
              <strong>Expiry Date:</strong> {coupon.expiry_date}
            </p>
            <p className="text-sm text-gray-500 mb-4">
              <strong>Conditions:</strong> {coupon.condition}
            </p>
            {copiedCoupon === coupon.coupon_code && (
              <a href={brand.shop_link} target="_blank" rel="noopener noreferrer">
                <button className="btn btn-sm btn-success w-full">Use Now</button>
              </a>
            )}
          </div>
        ))}
      </div>


      <ToastContainer />
    </div>
  );
};

export default BrandDetails;
