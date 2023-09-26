const LoadingShopProducts = () => {
  return (
    <div className="">
      <div className="flex flex-col align-middle justify-center mt-8 mb-4 max-w-[80dvw] mx-auto">
        <h1 className="text-left text-gray-800 font-bold text-3xl">shop</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full lg:w-[90dvw] lg:mx-auto justify-items-center gap-10 p-3 sm:px-10">
        <ShopProductCardSkeleton />
        <ShopProductCardSkeleton />
        <ShopProductCardSkeleton />
        <ShopProductCardSkeleton />
        <ShopProductCardSkeleton />
        <ShopProductCardSkeleton />
        <ShopProductCardSkeleton />
        <ShopProductCardSkeleton />
        <ShopProductCardSkeleton />
        <ShopProductCardSkeleton />
        <ShopProductCardSkeleton />
        <ShopProductCardSkeleton />
        <ShopProductCardSkeleton />
        <ShopProductCardSkeleton />
        <ShopProductCardSkeleton />
        <ShopProductCardSkeleton />
      </div>
    </div>
  );
};

const ShopProductCardSkeleton = () => {
  return (
    <div className="w-[280px] noSelect">
      <div className="w-[280px] h-[350px] animate-pulse bg-gray-300 " />
      <div className="my-2 flex gap-4">
        <div className="flex gap-2">
          <span className="animate-pulse bg-gray-300 w-4 h-4" />
          <span className="h-4 w-6 p-1 animate-pulse bg-gray-300"></span>
        </div>
      </div>

      <div className="animate-pulse h-6 w-full bg-gray-300"></div>
      <div className="animate-pulse h-4 mt-2 w-1/2 bg-gray-300"></div>
      <div className="animate-pulse h-2 w-full mt-2 bg-gray-300"></div>
      <div className="animate-pulse h-2 mt-2 w-1/2 bg-gray-300"></div>
      <div className="animate-pulse h-6 w-10 bg-gray-300 mt-2"></div>
    </div>
  );
};

export default LoadingShopProducts;
