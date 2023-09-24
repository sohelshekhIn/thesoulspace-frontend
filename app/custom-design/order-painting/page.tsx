import CustomPaintingForm from "@/components/CustomDesign/CustomPaintingForm";

export default function CustomOrderCase() {
  return (
    <div className="w-full p-2 md:p-10">
      <div className="w-[90vw] max-w-5xl p-0 md:p-2 mx-auto">
        <div className="bg-gray-100 rounded-md p-10">
          <h1 className="font-bold text-3xl md:text-5xl text-gray-800">
            Custom ArtWork
          </h1>
          <h2 className="font-bold text-4xl md:text-7xl text-gray-800">
            starting at Rs. 399
          </h2>
        </div>
        <div className="flex flex-col md:flex-row mt-10 md:mt-0">
          <div className="w-full md:w-3/4">
            <CustomPaintingForm />
          </div>
          <div className="font-bold w-full md:w-1/4">
            <div className="rounded-md p-10 bg-gray-800 mt-10">
              <h1 className="text-2xl text-gray-100">
                Get Customised Canvas Art
              </h1>
              <h1 className="text-xl text-gray-200">@ Rs 499</h1>
              <div className="mt-3">
                <p className="text-sm font-semibold text-gray-200">1 cover</p>
                <p className="text-sm font-semibold text-gray-200">3 designs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
