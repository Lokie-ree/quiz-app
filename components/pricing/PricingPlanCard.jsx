import React from "react";

const PricingPlanCard = ({
  title,
  price,
  description,
  features,
  ctaText,
  popular,
}) => {
  return (
    <div className="border rounded-lg p-6 shadow-lg relative bg-white dark:bg-gray-800">
      {popular && (
        <span className="absolute top-0 right-0 bg-secondary text-white text-sx font-bold px-2 py-1 rounded-tr-lg">
          Most Popular
        </span>
      )}
      <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
      <p className="text-base">{description}</p>
      <div className="my-4">
        <span className="text-4xl font-bold">{price}</span>
        <span className="text-sm text-base-content">/month</span>
      </div>
      <ul className="text-sm mb-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="mr-2">✅</span>
            {feature}
          </li>
        ))}
      </ul>
      <button className="btn btn-accent w-full text-base py-2 rounded-lg">
        {ctaText}
      </button>
    </div>
  );
};

export default PricingPlanCard;
