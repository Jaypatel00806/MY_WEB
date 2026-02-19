import { useState } from "react";
import SearchStep from "./steps/SearchStep";
import SelectRideStep from "./steps/SelectRideStep";
import PassengerStep from "./steps/PassengerStep";
import ReviewStep from "./steps/ReviewStep";
import PaymentStep from "./steps/PaymentStep";
import ConfirmationStep from "./steps/ConfirmationStep";

export default function BookingFlow() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({});

  const next = (values) => {
    setData({ ...data, ...values });
    setStep(step + 1);
  };

  const steps = [
    <SearchStep next={next} />,
    <SelectRideStep next={next} />,
    <PassengerStep next={next} />,
    <ReviewStep next={next} data={data} />,
    <PaymentStep next={next} />,
    <ConfirmationStep data={data} />,
  ];

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
      <div className="mb-4 font-semibold text-indigo-600">
        Step {step} / 6
      </div>

      {steps[step - 1]}
    </div>
  );
}
