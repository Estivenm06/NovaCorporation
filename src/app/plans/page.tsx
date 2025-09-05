import PlansPage from "@/app/ui/components/PlansPage";
import { plansArray, reviewsArray } from "@/app/ui/helpers/helper";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "NovaCorporation | Planes",
    description: "Pagina Planes de NovaCorporation",
  };

const Plans = () => {
  return (
    <>
      <PlansPage plansArray={plansArray} reviewsArray={reviewsArray} />
    </>
  );
};

export default Plans;
