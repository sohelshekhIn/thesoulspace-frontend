import { ContactDetailsComp } from "@/components/Checkout/Checkout";
import { getSavedCheckoutContactDetails } from "@/utils/checkoutDetailsCookies";
import { getServerSession } from "next-auth";
import { cookies } from "next/headers";

const CheckoutPage = async () => {
  const session = await getServerSession();
  const csrfToken =
    cookies().get("next-auth.csrf-token")?.value.split("|")[0] ||
    cookies().get("__Host-next-auth.csrf-token")?.value.split("|")[0] ||
    "";
  const checkoutContactDetails = await getSavedCheckoutContactDetails();

  return (
    <div className="w-full h-[60dvh]">
      <div className="w-full bg-white mx-auto py-10">
        <ContactDetailsComp
          session={session}
          csrfToken={csrfToken}
          checkoutContactDetails={checkoutContactDetails}
        />
      </div>
    </div>
  );
};

export default CheckoutPage;
