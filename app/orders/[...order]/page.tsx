import { FailedBtn, SuccessBtn } from "@/components/Orders/PaymentOrderBtns";

const Pay = (context: any) => {
  const orderCode = context.params.order[0];
  const orderId = orderCode.split("-")[0];
  const refferenceId = orderCode.split("-")[1];

  return (
    <div className="w-full h-[50vh]">
      <div className="w-full bg-white mx-auto py-10 text-center">
        <div className="font-semibold my-3">
          <h1>Order Id: {`${orderId}`}</h1>
          <h1>Refference Id: {`${refferenceId}`}</h1>
        </div>
        <h1>Payment Processor is pending</h1>
        <p>Click on below buttons to imidate payment</p>
        {/* two buttons, one for succesful payment, another for failed payment */}
        <div className="flex justify-center gap-4 mt-4">
          <SuccessBtn />
          <FailedBtn />
        </div>
      </div>
    </div>
  );
};

export default Pay;
