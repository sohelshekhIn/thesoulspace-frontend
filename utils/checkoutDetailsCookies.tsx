"use server";

import { cookies } from "next/headers";

async function saveCheckoutContactDetails(
  session: any,
  firstName: string,
  lastName: string,
  email: string,
  phone: string
) {
  let userEmail = session.user.email;
  cookies().set(
    "checkout-contact-details",
    JSON.stringify({
      userEmail,
      firstName,
      lastName,
      email,
      phone,
    }),
    {
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7), // 1 week
      path: "/",
      sameSite: "strict",
      httpOnly: true,
    }
  );
}

async function setShippingAddressDetails(
  session: any,
  addressLine1: string,
  addressLine2: string,
  landmark: string,
  city: string,
  district: string,
  state: string,
  pincode: string
) {
  let userEmail = session.user.email;
  cookies().set(
    "shipping-address-details",
    JSON.stringify({
      userEmail,
      addressLine1,
      addressLine2,
      landmark,
      city,
      district,
      state,
      pincode,
    }),
    {
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7), // 1 week
      path: "/",
      sameSite: "strict",
      httpOnly: true,
    }
  );
}

async function getSavedShippingAddressDetails(session: any) {
  const shippingAddressDetails = cookies().get("shipping-address-details");
  if (shippingAddressDetails != undefined) {
    const add = JSON.parse(shippingAddressDetails.value);
    if (add.userEmail === session.user.email) {
      return add;
    }
  }
  return null;
}

async function getSavedCheckoutContactDetails(session: any) {
  const checkoutContactDetails = cookies().get("checkout-contact-details");
  if (checkoutContactDetails != undefined) {
    const chDts = JSON.parse(checkoutContactDetails.value);
    if (chDts.userEmail === session.user.email) {
      return chDts;
    }
  }
  return null;
}

export {
  saveCheckoutContactDetails,
  getSavedCheckoutContactDetails,
  getSavedShippingAddressDetails,
  setShippingAddressDetails,
};
