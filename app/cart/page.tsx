import { CartContainer, CartHeader } from "@/components/Shop/CartPageComps";
import CartSummary from "@/components/Shop/CartSummaryComp";
import { OfferComp } from "@/components/Shop/OfferComp";

const Cart = () => {
  return (
    <div className="w-full lg:w-[90dvw] md:px-16 lg:px-16 mx-auto">
      <div className="w-full my-8">
        <div className="my-5">
          <h1 className="text-4xl font-semibold text-center">Your Bag</h1>
          <CartHeader />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row  w-full">
        <CartContainer />
        <div className="p-8 lg:w-1/3 lg:py-4 flex flex-col gap-10">
          <OfferComp />
          <CartSummary />
        </div>
      </div>
    </div>
  );
};

export default Cart;
