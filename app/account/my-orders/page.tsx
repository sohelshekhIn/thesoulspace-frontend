import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getStaticData } from "@/utils/global";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const AccountMyOrdersPage = async () => {
  const session: {
    id: string;
    jwt: string;
  } | null = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  const customerOrderData = await getStaticData(
    `/orders?filters[userId][$eq]=${session?.id}`,
    60,
    session?.jwt
  );

  return (
    <div className="w-[90vw] max-w-3xl mx-auto p-2 md:p-10">
      <h1 className="font-semibold text-xl text-gray-800">My Orders</h1>
      {/* my orders list */}
      <div className="flex flex-col gap-14 mt-6">
        {/* map through customerOrderData  */}
        {customerOrderData?.map((order: any) => (
          <div
            key={order.id}
            className="bg-white shadow-sm rounded-md p-6 mb-4"
          >
            <div className="flex justify-between">
              <div className="flex items-center">
                <h1 className="font-semibold text-base text-gray-800">
                  Order #{order.attributes.orderId}
                </h1>
                <span className="ml-4 text-sm text-gray-500">
                  {order.attributes.dateTime}
                </span>
              </div>
              <div className="flex items-center">
                <h1 className="font-semibold text-base text-gray-800">
                  Order Status: {order.attributes.orderStatus}
                </h1>
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <div className="flex items-center">
                <h1 className="text-base text-gray-800">
                  {/* name and address then contact */}
                  <p className="">{order.attributes.name},</p>
                  <p className="max-w-sm pr-10">{order.attributes.address}</p>
                  {order.attributes.contact}
                </h1>
              </div>
              <div className="text-right">
                <h1 className="text-base text-gray-800">
                  Quantity: 3{order.attributes.totalQty}
                </h1>
                <h1 className="text-base text-gray-800">
                  Total:{" "}
                  <span className="font-semibold">
                    Rs. {order.attributes.grandTotal}
                  </span>
                </h1>
              </div>
            </div>
            {/* loop through cartItemsJson */}
            <div className="flex flex-col mt-14 gap-2">
              {order.attributes.cartItemsJson.map((item: any) => (
                <div key={item.id} className="flex flex-col">
                  <div className="flex justify-between">
                    <h1 className="font-semibold text-base text-gray-800">
                      {item.name}
                    </h1>
                    <h1 className=" text-base text-gray-800">
                      x {item.quantity}
                    </h1>
                  </div>
                  <div className="flex justify-between">
                    <h1 className="text-base text-gray-800">
                      {item.sizeDescription}
                    </h1>
                    <h1 className="text-base text-gray-800">
                      Rs. {item.price}
                    </h1>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccountMyOrdersPage;
