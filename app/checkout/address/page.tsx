import { ShippingAddressForm } from "@/components/Checkout/CheckoutForms/ShippingAddressForm";
import { getSavedShippingAddressDetails } from "@/utils/checkoutDetailsCookies";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const CheckoutAddress = async () => {
  const session = await getServerSession();
  if (!session) {
    redirect("/checkout");
  }
  const shippingAddressDetails = await getSavedShippingAddressDetails(session);

  return (
    <div className="w-full">
      <div className="w-full bg-white mx-auto py-10">
        <ShippingAddressForm
          shippingAddressDetails={shippingAddressDetails}
          session={session}
        />
      </div>
    </div>
  );
};

export default CheckoutAddress;
