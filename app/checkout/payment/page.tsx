import { VerifyDetails } from "@/components/Checkout/PaymentComps/VerifyDetails";
import { CartSummary } from "@/components/Checkout/PaymentComps/CartSummary";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const CheckoutPaymentPage = () => {
  const session = getServerSession();
  if (!session) {
    redirect("/checkout");
  }
  return (
    <div className="flex flex-col gap-8">
      <VerifyDetails />
      <CartSummary />
    </div>
  );
};

export default CheckoutPaymentPage;
