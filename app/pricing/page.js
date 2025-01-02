import React from "react";
import PricingPlanCard from "@/components/pricing/PricingPlanCard";
import { plans } from "@/lib/constants";

const PricingPlans = () => {
  return (
    <div className="min-h-screen p-6 max-w-2xl mx-auto grid sm:grid-cols-2 gap-6 md:grid-cols-3">
      {plans.map((plan, index) => (
        <PricingPlanCard key={index} {...plan} />
      ))}
    </div>
  );
};

export default PricingPlans;
