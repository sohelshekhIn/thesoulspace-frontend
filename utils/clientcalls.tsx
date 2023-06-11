"use client";
import axios from "axios";
const saveCheckoutContactDetails = (
  firstName: string,
  lastName: string,
  email: string,
  phone: string
) => {
  localStorage.setItem(
    "checkoutContactDetails",
    JSON.stringify({
      firstName,
      lastName,
      email,
      phone,
    })
  );
};

const getSavedCheckoutContactDetails = () => {
  const checkoutContactDetails = localStorage.getItem("checkoutContactDetails");
  if (checkoutContactDetails) {
    return JSON.parse(checkoutContactDetails);
  }
  return null;
};

const setShippingAddressDetails = (
  addressLine1: string,
  addressLine2: string,
  landmark: string,
  city: string,
  district: string,
  state: string,
  pincode: string
) => {
  localStorage.setItem(
    "shippingAddressDetails",
    JSON.stringify({
      addressLine1,
      addressLine2,
      landmark,
      city,
      district,
      state,
      pincode,
    })
  );
};

const getShippingAddressDetails = () => {
  const shippingAddressDetails = localStorage.getItem("shippingAddressDetails");
  if (shippingAddressDetails) {
    return JSON.parse(shippingAddressDetails);
  }
  return null;
};

const getCityDistrictState = async (pincode: string) => {
  // try {
  //   const response = await fetch(
  //     `https://www.postpincode.in/api/getCityName.php?pincode=${pincode}`
  //   );
  //   const data = await response.json();
  //   console.log(data);

  //   return data[0];
  // } catch (error) {
  //   console.log(error);
  //   return null;
  // }
  try {
    const response = await axios.get(
      `https://www.postpincode.in/api/getCityName.php?pincode=${pincode}`
    );

    console.log(response.data[0]);
    return response.data[0];
  } catch (error) {
    console.log(error);
    return null;
  }
};

export {
  saveCheckoutContactDetails,
  getSavedCheckoutContactDetails,
  getCityDistrictState,
  getShippingAddressDetails,
  setShippingAddressDetails,
};
