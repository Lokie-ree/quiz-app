import React from "react";
import PricingPlanCard from "@/components/pricing/PricingPlanCard";
import { plans } from "@/lib/constants";

const PricingPlans = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto grid sm:grid-cols-2 gap-6 md:grid-cols-3">
      {plans.map((plan, index) => (
        <PricingPlanCard key={index} {...plan} />
      ))}
    </div>
  );
};

export default PricingPlans;
