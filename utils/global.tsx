const getStaticData = async (url: string, expiresIn: number = 2) => {
  //
  const { data } = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
    next: { revalidate: expiresIn }, // 1 hour
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "User-Agent": "*",
    },
  }).then(async (res) => {
    console.log("Test here");
    console.log(res);

    let test = await res.json();
    console.log("Hola here");

    console.log(test);
    return test;
  });

  return data;
};

export { getStaticData };
