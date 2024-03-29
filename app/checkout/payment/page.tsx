import { VerifyDetails } from "@/components/Checkout/PaymentComps/VerifyDetails";
import { CartSummary } from "@/components/Checkout/PaymentComps/CartSummary";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import PlaceOrder from "@/components/Checkout/PaymentComps/PlaceOrder";
import {
  getSavedCheckoutContactDetails,
  getSavedShippingAddressDetails,
} from "@/utils/checkoutDetailsCookies";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const CheckoutPaymentPage = async () => {
  const session: {
    id: number;
  } | null = await getServerSession(authOptions);
  if (!session) {
    redirect("/checkout");
  }
  const savedCheckoutContactDetails = await getSavedCheckoutContactDetails(
    session
  );
  const savedShippingAddressDetails = await getSavedShippingAddressDetails(
    session
  );

  return (
    <div className="flex flex-col gap-8 py-10">
      <VerifyDetails
        savedCheckoutContactDetails={savedCheckoutContactDetails}
        savedShippingAddressDetails={savedShippingAddressDetails}
      />
      <CartSummary />
      <PlaceOrder
        userId={session?.id}
        contactDetails={savedCheckoutContactDetails}
        shippingAddress={savedShippingAddressDetails}
      />
    </div>
  );
};

export default CheckoutPaymentPage;
