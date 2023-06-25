"use server";

import { cookies } from "next/headers";

async function saveCheckoutContactDetails(
  firstName: string,
  lastName: string,
  email: string,
  phone: string
) {
  cookies().set(
    "checkout-contact-details",
    JSON.stringify({
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
  addressLine1: string,
  addressLine2: string,
  landmark: string,
  city: string,
  district: string,
  state: string,
  pincode: string
) {
  cookies().set(
    "shipping-address-details",
    JSON.stringify({
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

async function getSavedShippingAddressDetails() {
  const shippingAddressDetails = cookies().get("shipping-address-details");
  if (shippingAddressDetails != undefined) {
    return JSON.parse(shippingAddressDetails.value);
  }
  return null;
}

async function getSavedCheckoutContactDetails() {
  const checkoutContactDetails = cookies().get("checkout-contact-details");
  if (checkoutContactDetails != undefined) {
    return JSON.parse(checkoutContactDetails.value);
  }
  return null;
}

export {
  saveCheckoutContactDetails,
  getSavedCheckoutContactDetails,
  getSavedShippingAddressDetails,
  setShippingAddressDetails,
};
