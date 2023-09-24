"use server";

const getStaticData = async (
  url: string,
  expiresIn: number = 3600,
  jwt: string | null = null
) => {
  const { data } = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
    next: { revalidate: expiresIn }, // 1 hour
    method: "GET",
    // if jwt is provided, add it to the headers
    headers: jwt
      ? {
          "Content-Type": "application/json",
          Accept: "application/json",
          "User-Agent": "*",
          Authorization: `Bearer ${jwt}`,
        }
      : {
          "Content-Type": "application/json",
          Accept: "application/json",
          "User-Agent": "*",
        },
  })
    .then(async (res) => res.json())
    .catch((error) => console.log(error));

  return data;
};

async function getCityDistrictState(pincode: string) {
  try {
    const response = await fetch(
      `https://www.postpincode.in/api/getCityName.php?pincode=${pincode}`,
      {
        next: { revalidate: 0 }, // 1 hour
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "User-Agent": "*",
        },
      }
    );
    const data = await response.json();
    if (data.error) {
      return data;
    } else {
      return data[0];
    }
  } catch (error) {
    console.log(error);

    return error;
  }
}

export { getStaticData, getCityDistrictState };
