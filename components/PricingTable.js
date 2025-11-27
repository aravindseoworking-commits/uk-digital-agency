const PricingTable = () => {
  return (
    <section className="pricing-table">
      <h3 className="text-2xl font-semibold text-center mb-8">Flexible UK-Friendly Pricing</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        
        {/* Basic Plan */}
        <div className="pricing-card bg-white shadow-lg rounded-lg p-6 text-center">
          <h4 className="text-xl font-semibold">Basic Plan</h4>
          <p className="text-gray-600">For startups and small businesses</p>
          <div className="price text-3xl font-bold">£199/month</div>
          <ul className="mt-4 text-left text-gray-600">
            <li>SEO Audit</li>
            <li>Basic SEO</li>
            <li>1-2 Keywords</li>
            <li>Email Support</li>
          </ul>
          <button className="cta mt-4">Get Started</button>
        </div>

        {/* Standard Plan */}
        <div className="pricing-card bg-white shadow-lg rounded-lg p-6 text-center">
          <h4 className="text-xl font-semibold">Standard Plan</h4>
          <p className="text-gray-600">For growing businesses</p>
          <div className="price text-3xl font-bold">£399/month</div>
          <ul className="mt-4 text-left text-gray-600">
            <li>SEO Audit</li>
            <li>On-page SEO</li>
            <li>5-10 Keywords</li>
            <li>Monthly Reports</li>
            <li>Priority Email Support</li>
          </ul>
          <button className="cta mt-4">Get Started</button>
        </div>

        {/* Premium Plan */}
        <div className="pricing-card bg-white shadow-lg rounded-lg p-6 text-center">
          <h4 className="text-xl font-semibold">Premium Plan</h4>
          <p className="text-gray-600">For established brands</p>
          <div className="price text-3xl font-bold">£799/month</div>
          <ul className="mt-4 text-left text-gray-600">
            <li>Complete SEO Audit</li>
            <li>Advanced On-page SEO</li>
            <li>15+ Keywords</li>
            <li>Weekly Reports</li>
            <li>24/7 Support</li>
          </ul>
          <button className="cta mt-4">Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
