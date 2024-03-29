import { CheckCartExists } from "@/components/Checkout/CheckOutFuncs";
import { CheckoutSteps } from "@/components/Checkout/CheckoutSteps";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-[90dvw] lg:w-[70dvw] min-h-[90vh] mx-auto p-3">
      <CheckCartExists />
      <div className="">
        <CheckoutSteps />
      </div>
      <div className="w-full lg:max-w-[90dvw] mx-auto lg:w-2/4">{children}</div>
    </div>
  );
}

export const dynamic = "force-dynamic";
