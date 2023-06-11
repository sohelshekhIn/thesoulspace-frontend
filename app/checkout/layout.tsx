import { CheckCartExists } from "@/components/Checkout/CheckOutFuncs";
import { CheckoutItemsContainer } from "@/components/Checkout/CheckoutItems";
import { CheckoutSteps } from "@/components/Checkout/CheckoutSteps";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-[90dvw] lg:w-[70dvw] mx-auto p-3">
      <CheckCartExists />
      <div className="">
        <CheckoutSteps />
      </div>
      <div className="w-full lg:max-w-[90dvw] mx-auto lg:w-2/4">{children}</div>
    </div>
  );
}
