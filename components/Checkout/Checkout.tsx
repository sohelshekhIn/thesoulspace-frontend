"use client";

import { useStateContext } from "@/context/StateContext";
import {
  CheckoutLogInForm,
  CheckoutRegisterForm,
} from "../Auth/CheckoutAuthForm";
import { ContactDetailForm } from "./CheckoutForms/ContactDetailForm";

const ContactDetailsComp = ({
  csrfToken,
  session,
  checkoutContactDetails,
}: {
  csrfToken: string;
  session: any;
  checkoutContactDetails: any;
}) => {
  const { checkoutAuthType, setCheckoutAuthType } = useStateContext();
  if (session && session.user) {
    return (
      <div className="mt-5">
        <ContactDetailForm
          session={session}
          checkoutContactDetails={checkoutContactDetails}
        />
      </div>
    );
  }
  return (
    <div className="">
      <div className="">
        <h1 className="text-3xl font-semibold">Contact Details</h1>
      </div>
      {checkoutAuthType === "login" ? (
        <div className="">
          <p className="mt-6 mb-4">Log In Now</p>
          <CheckoutLogInForm csrfToken={csrfToken} />
        </div>
      ) : (
        <div className="">
          <h5 className="mt-6 mb-4">
            Register Now, <br />
            For order tracking/history and faster checkout
          </h5>
          <CheckoutRegisterForm csrfToken={csrfToken} />
        </div>
      )}
      <div className="mt-5">
        {checkoutAuthType === "login" ? (
          <button onClick={() => setCheckoutAuthType("register")}>
            <p className="text-sm">
              {"Don't have an account! "}
              <span className="text-yellow-600">Register Now</span>
            </p>
          </button>
        ) : (
          <button onClick={() => setCheckoutAuthType("login")}>
            <p className="text-sm">
              Already have an account?{" "}
              <span className="text-yellow-600">Log in</span>
            </p>
          </button>
        )}
      </div>
    </div>
  );
};

export { ContactDetailsComp };
