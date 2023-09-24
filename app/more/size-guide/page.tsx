const SizeGuidePage = () => {
  return (
    <div className="w-[90vw] max-w-4xl p-2 md:p-10 mx-auto">
      <h1 className="font-semibold text-4xl text-gray-800">Size Guide</h1>

      {/* Canvas Painting Artwork Size Guide */}
      <div className="mt-6">
        <h2 className="font-semibold text-xl">
          Canvas Painting Artwork Size Guide
        </h2>
        <p className="mb-4">Choose from a range of canvas painting sizes:</p>

        <ul className="list-disc pl-6">
          <li>
            <strong>Small Works (Table Canvas):</strong> Starting from 15 cm (6
            inches)
          </li>
          <li>
            <strong>Medium Works (Paper Back):</strong> Range from 20 cm (8
            inches) to 60 cm (24 inches)
          </li>
          <li>
            <strong>Large Works (Wall Painting):</strong> Range from 70 cm (28
            inches) to 100 cm (40 inches)
          </li>
          <li>
            <strong>Extra-Large Works (Wall Canvas):</strong> Starting from 101
            cm (40 inches)
          </li>
        </ul>
      </div>

      {/* Phone Case Size Guide */}
      <div className="mt-6">
        <h2 className="font-semibold text-xl">Phone Case Size Guide</h2>
        <p className="mb-4">
          Select the right phone case size based on your phone model:
        </p>

        <ul className="list-disc pl-6">
          <li>
            <strong>iPhone Models:</strong> Available for various iPhone models,
            including iPhone 6/6s, 7/8, 7 Plus/8 Plus, X/XS, XR, XS Max, 11, 11
            Pro, 11 Pro Max, 12, 12 Mini, 12 Pro, 12 Pro Max, and newer models.
          </li>
          <li>
            <strong>Custom Phone Cases:</strong> For custom phone cases, we may
            require precise measurements if sourcing exact dimensions for the
            phone becomes difficult. Please contact us for custom orders.
          </li>
          <li>
            <strong>Transparent Cases with Art Design:</strong> Our phone cases
            are transparent and feature an art design printed on an art paper
            inside the case.
          </li>
          <li>
            <strong>Camera Cutouts:</strong> Our phone cases have precise camera
            cutouts to ensure the camera's functionality is not obstructed.
            Choose a case that fits your specific phone model.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SizeGuidePage;
