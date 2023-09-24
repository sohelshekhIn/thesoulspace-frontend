import Link from "next/link";

const ShippingPolicyPage = () => {
  return (
    <div className="w-[90vw] max-w-4xl p-2 md:p-10 mx-auto">
      <h1 className="font-semibold text-4xl text-gray-800">
        Shipping & Delivery Policy
      </h1>
      <p className="font-sm py-4">Last updated: February 22, 2023</p>
      <p>
        Welcome to The SoulSpace's Shipping & Delivery Policy. We are delighted
        to have you here and want to ensure that your shopping experience with
        us is as smooth and informed as possible. Please take a moment to review
        this policy, which provides important information about shipping and
        delivery options for our custom artworks.
      </p>
      <h2 className="font-semibold mt-5 text-xl">Our Commitment to you</h2>
      <p>
        At The SoulSpace, we are committed to delivering your custom artworks
        with care and efficiency. Our goal is to make your shopping experience
        enjoyable and stress-free.
      </p>
      <h2 className="font-semibold mt-5 text-xl">
        What are my shipping & delivery options?
      </h2>
      <p>
        We offer a range of shipping and delivery options to suit your
        preferences: Free Shipping Enjoy free standard shipping on all orders
        above Rs. 1499. This option ensures your order will be delivered to your
        doorstep without any additional shipping fees. Expedited Shipping For
        those who prefer quicker delivery, we offer expedited shipping options.
        The rates for expedited shipping may vary based on your location and the
        weight of the product. You can select this option during the checkout
        process. Delivery Timeframes Standard Shipping: Our standard shipping
        typically takes 3-5 business days from the date the product is ready for
        dispatch. Please note that this timeframe may vary depending on your
        location. Expedited Shipping: If you choose expedited shipping, you can
        expect your order to arrive faster. Exact delivery times for expedited
        shipping will be communicated to you after placing your order.
      </p>
      <h2 className="font-semibold mt-5 text-xl">
        Do you delivery internationally?
      </h2>
      <p>
        We currently provide shipping services exclusively within India.
        Regrettably, we do not offer international shipping at this time.
        However, if you're located outside India and are interested in our
        products, please don't hesitate to reach out to us, and we'll explore
        alternative arrangements where possible.
      </p>
      <h2 className="font-semibold mt-5 text-xl">
        Are there other shipping restrictions?
      </h2>
      <p>
        Please be aware that certain shipping restrictions may apply to specific
        locations or delivery partners. These restrictions can impact the
        availability of certain shipping options. Rest assured, if there are any
        restrictions that affect your order, we will notify you promptly during
        the checkout process.
      </p>
      <h2 className="font-semibold mt-5 text-xl">
        What happens if my order is delayed?
      </h2>
      <p>
        While we strive to ensure that your orders are delivered promptly,
        unforeseen circumstances can occasionally lead to delays. In the event
        of a delay, we will promptly notify you and provide you with a revised
        estimated delivery date. Our commitment to transparency means that you
        will always be informed about the status of your order.
      </p>
      <h2 className="font-semibold mt-5 text-xl">
        How can you contact us about this policy?
      </h2>
      <p>
        If you have any questions or require further information about our
        Shipping & Delivery Policy, we are here to assist you. You can reach out
        to us using the following methods: <br />
        Email:{" "}
        <a href="mailto:contact@thesoulspace.in" target="_blank">
          contact@thesoulspace.in
        </a>{" "}
        <br />
        Online contact form:{" "}
        <Link href="/contact">www.thesoulspace.in/contact</Link> <br />
        The SoulSpace Contact We value your trust in The SoulSpace and are
        dedicated to ensuring that your custom artwork experience is
        exceptional.
        <br />
        <br /> Thank you for choosing The SoulSpace as your custom artwork
        destination.
      </p>
    </div>
  );
};

export default ShippingPolicyPage;
