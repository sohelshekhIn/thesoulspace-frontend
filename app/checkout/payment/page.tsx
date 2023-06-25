import { VerifyDetails } from "@/components/Checkout/PaymentComps/VerifyDetails";
import { CartSummary } from "@/components/Checkout/PaymentComps/CartSummary";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import PlaceOrder from "@/components/Checkout/PaymentComps/PlaceOrder";
import {
  getSavedCheckoutContactDetails,
  getSavedShippingAddressDetails,
} from "@/utils/checkoutDetailsCookies";

const CheckoutPaymentPage = async () => {
  const session = getServerSession();
  if (!session) {
    redirect("/checkout");
  }
  const savedCheckoutContactDetails = await getSavedCheckoutContactDetails();
  const savedShippingAddressDetails = await getSavedShippingAddressDetails();

  return (
    <div className="flex flex-col gap-8 py-10">
      <VerifyDetails
        savedCheckoutContactDetails={savedCheckoutContactDetails}
        savedShippingAddressDetails={savedShippingAddressDetails}
      />
      <CartSummary />
      <PlaceOrder />
    </div>
  );
};

export default CheckoutPaymentPage;
