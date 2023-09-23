// "use client";

// import { getStaticData } from "@/utils/global";
// import { useEffect, useState } from "react";
// import { useStateContext } from "@/context/StateContext";

// const SelectAvailableSizes = ({ categories }: { categories: any }) => {
//   const [availableData, setAvailableData] = useState<any>(null);
//   const { setSizeDescription, sizeDescription } = useStateContext();

//   useEffect(() => {
//     // Define the API endpoint based on the category
//     let apiUrl = "";
//     if (categories.some((category: any) => category.Name === "Phone Covers")) {
//       apiUrl = "/phone-cases-availables";
//     } else if (
//       categories.some((category: any) => category.Name === "Painting")
//     ) {
//       apiUrl = "/painting-sizes-availables";
//     }

//     if (apiUrl) {
//       // Fetch the data based on the category
//       const fetchData = async () => {
//         try {
//           const fetchedData = await getStaticData(apiUrl, 0);
//           setAvailableData(fetchedData);
//           console.log(fetchedData);
//         } catch (error) {
//           console.error("Error fetching data:", error);
//         }
//       };

//       fetchData();
//     }
//   }, [categories]);

//   const handleSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     if (event.target.value === "Select size") {
//       setSizeDescription("");
//     } else {
//       setSizeDescription(event.target.value);
//     }
//   };

//   return (
//     <div className="mt-5">
//       <label htmlFor="size" className="text-sm font-semibold">
//         {categories.some((category: any) => category.Name === "Phone Covers")
//           ? "Select Phone Model:"
//           : "Select Size:"}
//       </label>
//       <select
//         id="size"
//         className="block w-full mt-1 p-2 border rounded-md"
//         value={sizeDescription}
//         onChange={handleSizeChange}
//       >
//         <option value="Select size" className="text-sm">
//           {categories.some((category: any) => category.Name === "Phone Covers")
//             ? "Select phone model"
//             : "Select size"}
//         </option>
//         {availableData &&
//           availableData.map((item: any) => (
//             <option
//               key={item.id}
//               className="text-sm"
//               value={`${item.attributes.name} ${item.attributes.size || ""}`}
//             >
//               {categories.some((category: any) => category.Name === "Painting")
//                 ? `${item.attributes.name} ${item.attributes.size || ""}`
//                 : item.attributes.name}
//             </option>
//           ))}
//       </select>
//     </div>
//   );
// };

// export { SelectAvailableSizes };
"use client";

import { getStaticData } from "@/utils/global";
import { useEffect, useState } from "react";
import { useStateContext } from "@/context/StateContext";

const SelectAvailableSizes = ({ categories }: { categories: any }) => {
  const [availableData, setAvailableData] = useState<any>(null);
  const [isPhoneCovers, setIsPhoneCovers] = useState<boolean>(false);
  const [isPainting, setIsPainting] = useState<boolean>(false);
  const { setSizeDescription, sizeDescription } = useStateContext();

  useEffect(() => {
    // Define the API endpoint based on the category
    let apiUrl = "";

    setIsPhoneCovers(
      categories.some((category: any) => category.Name === "Phone Covers")
    );

    setIsPainting(
      categories.some((category: any) => category.Name === "Painting")
    );

    if (isPhoneCovers) {
      apiUrl = "/phone-cases-availables";
    } else if (isPainting) {
      apiUrl = "/painting-sizes-availables";
    }

    if (apiUrl) {
      // Fetch the data based on the category
      const fetchData = async () => {
        try {
          const fetchedData = await getStaticData(apiUrl, 60);
          setAvailableData(fetchedData);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchData();
    }
  }, [categories, isPhoneCovers, isPainting]);

  const handleSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSizeDescription(selectedValue === "Select size" ? "" : selectedValue);
  };

  const selectLabel = isPhoneCovers ? "Select Phone Model:" : "Select Size:";

  return (
    <div className="mt-5">
      <label htmlFor="size" className="text-sm font-semibold">
        {selectLabel}
      </label>
      <select
        id="size"
        className="block text-sm w-full max-w-sm mt-1 p-2 border rounded-md"
        value={sizeDescription}
        onChange={handleSizeChange}
      >
        <option value="Select size" className="text-sm">
          {isPhoneCovers ? "Select phone model" : "Select size"}
        </option>
        {availableData &&
          availableData.map((item: any) => (
            <option
              key={item.id}
              className="text-sm"
              value={`${item.attributes.name} ${item.attributes.size || ""}`}
            >
              {isPainting
                ? `${item.attributes.name} ${item.attributes.size || ""}`
                : item.attributes.name}
            </option>
          ))}
      </select>
    </div>
  );
};

export { SelectAvailableSizes };
