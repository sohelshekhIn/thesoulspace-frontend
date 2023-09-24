import Link from "next/link";

const PrivacyPolicyPage = () => {
  return (
    <div className="w-[90vw] max-w-4xl p-2 md:p-10 mx-auto">
      <h1 className="font-semibold text-4xl text-gray-800">Privacy Policy</h1>
      <p className="font-sm py-4">Last updated: February 23, 2023</p>
      <p>
        Welcome to The SoulSpace's Privacy Policy. We value your trust and are
        committed to protecting your privacy. This policy explains how we
        collect, use, disclose, and safeguard your personal information. By
        using our website, you consent to the practices described in this
        Privacy Policy.
      </p>

      <h2 className="font-semibold mt-5 text-xl">Information We Collect</h2>
      <p>We may collect the following types of personal information:</p>
      <ul>
        <li>Name</li>
        <li>Email Address</li>
        <li>Physical Address</li>
        <li>Phone Number</li>
        <li>Location Data (Address for Delivery)</li>
        <li>Cart Details</li>
        <li>Payment Information</li>
      </ul>

      <h2 className="font-semibold mt-5 text-xl">How We Collect Information</h2>
      <p>We collect your personal information through:</p>
      <ul>
        <li>Forms on our website</li>
        <li>Third-party payment processor (Instamojo)</li>
      </ul>

      <h2 className="font-semibold mt-5 text-xl">Why We Collect Information</h2>
      <p>
        We collect and use your personal information for the following purposes:
      </p>
      <ul>
        <li>Order Processing</li>
        <li>Analytics to Improve User Experience</li>
      </ul>

      <h2 className="font-semibold mt-5 text-xl">
        Sharing Information with Third Parties
      </h2>
      <p>
        We may share your personal information with our payment processor
        (Instamojo) to process payments securely.
      </p>

      <h2 className="font-semibold mt-5 text-xl">Data Protection</h2>
      <p>
        We take data protection seriously and implement various security
        measures, including encryption, secure servers, and access controls, to
        protect your personal information.
      </p>

      <h2 className="font-semibold mt-5 text-xl">Use of Cookies</h2>
      <p>
        We may use cookies to enhance user experience and for essential
        functions like storing cart and user data temporarily. We only access
        cookies on our own domain and do not access cookies from other websites.
      </p>

      <h2 className="font-semibold mt-5 text-xl">Your Rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li>Access your personal information</li>
        <li>Correct inaccuracies in your personal information</li>
        <li>Delete your personal information</li>
      </ul>

      <h2 className="font-semibold mt-5 text-xl">Contact Us</h2>
      <p>
        If you have any questions or concerns about our Privacy Policy, please
        contact us at:
        <br />
        Email:{" "}
        <a href="mailto:contact@thesoulspace.in" target="_blank">
          contact@thesoulspace.in
        </a>
      </p>

      <p>
        We are committed to ensuring your privacy and providing a secure online
        shopping experience. Thank you for choosing The SoulSpace.
      </p>
    </div>
  );
};

export default PrivacyPolicyPage;
