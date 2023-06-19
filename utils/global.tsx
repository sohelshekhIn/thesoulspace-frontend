const getStaticData = async (url: string, expiresIn: number = 60 * 60) => {
  //
  const { data } = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
    next: { revalidate: expiresIn }, // 1 hour
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "User-Agent": "*",
    },
  }).then(async (res) => res.json());

  return data;
};

export { getStaticData };
