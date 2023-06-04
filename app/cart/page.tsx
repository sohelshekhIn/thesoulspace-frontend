import { CartContainer, CartHeader } from "@/components/Shop/CartPageComps";

const Cart = () => {
  //   const { cartItems } = useStateContext();
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
          <div className="flex flex-col gap-4">
            {/* add coupan section */}
            <div className="">
              <h4 className="text-xl font-normal">Have a Coupan?</h4>
              <p className="text-sm text-gray-500">
                Unlock exclusive discounts with a coupon code.
              </p>
            </div>

            <div className="flex gap-3 text-sm">
              <input
                type="text"
                maxLength={13}
                placeholder="Enter Coupon Code"
                className="w-full border uppercase border-gray-200 rounded-lg p-3"
              />
              <button
                className="
              w-1/2 bg-gray-200 text-black text-sm
              px-4 py-2 rounded-lg"
              >
                Apply
              </button>
            </div>
          </div>
          <div className="">
            <div className="w-full">
              <h4 className="text-xl font-normal">Summary</h4>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <div className="w-full flex justify-between">
                <p>Subtotal</p>
                <p>₹ 13,425</p>
              </div>
              <div className="w-full flex justify-between">
                <p>Discount (10%)</p>
                <p>- ₹ 250</p>
              </div>
              <div className="w-full flex justify-between">
                <p>Shipping</p>
                <p>₹ 0</p>
              </div>
              <div className="w-full flex justify-between border-t-[2px] pt-3  border-t-gray-200 font-semibold">
                <p>Total</p>
                <p>₹ 13,175</p>
              </div>
            </div>
            <div className="mt-5 bg-white fixed lg:static lg:p-0 w-full bottom-0 right-0 p-3">
              <button className="w-full py-4 bg-black text-white rounded-lg">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
