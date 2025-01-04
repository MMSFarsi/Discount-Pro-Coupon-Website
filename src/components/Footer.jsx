const Footer = () => {
    return (
      <footer className="bg-gray-800 text-gray-200 py-8">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-100 mb-4">Discount PRO</h2>
          <p className="text-gray-400 mb-6">
            Helping you save more with the best deals and coupons in Bangladesh. 💸
          </p>
          <div className="flex justify-center space-x-4 mb-6">
            <a
              href="https://facebook.com"
              target="_blank"
              className="text-gray-400 hover:text-gray-100"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com"
              target="_blank"           
              className="text-gray-400 hover:text-gray-100"
            >
              Twitter
            </a>
            <a
              href="https://instagram.com"
              target="_blank"        
              className="text-gray-400 hover:text-gray-100"
            >
              Instagram
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"         
              className="text-gray-400 hover:text-gray-100"
            >
              LinkedIn
            </a>
          </div>
          <p className="text-gray-500 text-sm">
            &copy; 2024 Discount PRO. All Rights Reserved.
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  