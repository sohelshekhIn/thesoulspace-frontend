import { ContactDetailsComp } from "@/components/Checkout/Checkout";
import { getServerSession } from "next-auth";
import { cookies } from "next/headers";

const CheckoutPage = async () => {
  const session = await getServerSession();
  const csrfToken =
    cookies().get("next-auth.csrf-token")?.value.split("|")[0] ||
    cookies().get("__Host-next-auth.csrf-token")?.value.split("|")[0] ||
    "";

  return (
    <div className="w-full h-[60dvh]">
      <p>{csrfToken}</p>
      <div className="w-full bg-white mx-auto py-10">
        <ContactDetailsComp session={session} csrfToken={csrfToken} />
      </div>
    </div>
  );
};

export default CheckoutPage;
