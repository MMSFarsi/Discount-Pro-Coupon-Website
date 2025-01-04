const HowItWorks = () => {
    const steps = [
      {
        step: "1. Browse Stores",
        description: "Explore coupons from your favorite brands and stores.",
        icon: "https://cdn-icons-png.flaticon.com/512/1170/1170576.png",
      },
      {
        step: "2. Copy the Coupon",
        description: "Click the 'Copy' button to copy the coupon code to your clipboard.",
        icon: "https://cdn-icons-png.flaticon.com/512/732/732200.png",
      },
      {
        step: "3. Use & Save",
        description: "Paste the code at checkout on the store's website and enjoy the discount.",
        icon: "https://cdn-icons-png.flaticon.com/512/1251/1251942.png",
      },
    ];
  
    return (
      <div className="container mx-auto px-4 py-10 bg-gray-50">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-9">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="bg-white shadow-lg p-6 text-center rounded">
              <img src={step.icon} alt={step.step} className="h-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{step.step}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default HowItWorks;