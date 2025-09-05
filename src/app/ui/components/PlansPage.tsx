"use client";
import Image from "next/image";

import type { PlansPageProps } from "../lib/definitions";

const PlansPage = ({ plansArray, reviewsArray }: PlansPageProps) => {

  const renderStars = (rating: number) => {
    const stars = [];
    const totalStars = 5;
    
    // Filled stars
    for (let i = 0; i < rating; i++) {
      stars.push(
        <span key={`filled-${i}`} className="text-yellow-500 text-3xl">
          ★
        </span>
      );
    }
    
    // Empty stars
    for (let i = 0; i < (totalStars - rating); i++) {
      stars.push(
        <span key={`empty-${i}`} className="text-gray-400 text-3xl">
          ☆
        </span>
      );
    }
    
    return stars;
  };

  return (
    <>
      {/* Plans Section */}
      <div className="mx-auto container grid md:grid-cols-2 lg:grid-cols-4 justify-center transition-all duration-300 mt-15">
        {plansArray.map((plan, index) => (
          <div
            key={index}
            className="px-10 py-5 bg-white border border-gray-200 rounded-lg shadow-sm transition-all duration-300 m-3 hover:shadow-lg"
          >
            <div className="flex flex-col justify-end mx-auto h-full">
              <div className="justify-start h-full">
                <h5 className="mb-4 text-xl font-medium">Plan {plan.name}</h5>
                <div className="flex items-baseline">
                  <span className="text-3xl font-semibold">$</span>
                  <span className="text-5xl font-extrabold tracking-tight">
                    {plan.value}
                  </span>
                  <span className="ms-1 text-xl font-normal text-gray-500">
                    /Mensual
                  </span>
                </div>
                <ul className="space-y-5 my-7">
                  {plan.advantages.map((advantage, advantageIndex) => (
                    <li key={advantageIndex} className="flex items-center">
                      <Image
                        src="/img/check.svg"
                        alt="check"
                        width={20}
                        height={20}
                        className="w-5 h-5"
                      />
                      <span className="text-base font-normal leading-tight ms-3">
                        {advantage}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 w-full transition-colors duration-300"
              >
                Escoger Plan
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Reviews Section */}
      <h2 className="text-center text-5xl mt-15" id="reviews">
        Reseñas
      </h2>
      <div className="mx-auto container grid lg:grid-cols-2 transition-all duration-300 mb-15">
        {reviewsArray.map((review, index) => (
          <div
            key={index}
            className="rounded-md border border-neutral-800 bg-gray-200 px-10 py-5 shadow-sm m-3 hover:shadow-lg transition-shadow duration-300"
          >
            {/* Star Rating */}
            <div className="flex gap-2">
              {renderStars(review.reviewStar)}
            </div>

            {/* Review Text */}
            <p className="my-4 mb-0 text-lg text-justify">{review.review}</p>

            {/* Reviewer Info */}
            <div className="mt-2 flex items-center gap-2">
              <div className="h-10 w-10 overflow-hidden rounded-full shadow-sm outline-neutral-800">
                <div className="relative inline-block overflow-hidden rounded-lg border-neutral-800">
                  <Image
                    src={review.photo}
                    alt={`${review.name} profile`}
                    width={50}
                    height={50}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <p className="leading-relaxed tracking-wide text-2xl">
                  {review.name}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PlansPage;
