import ContactForm from "@/components/Global/ContactForm";
import TitleDivider from "@/components/Global/Divider";

export default function ContactPage() {
  return (
    <div className="w-full p-5">
      <div className="flex flex-col align-middle justify-center mt-8 mb-4 max-w-[80dvw] mx-auto">
        <div className="text-center max-w-xl mx-auto">
          <h1 className="text-gray-800 font-bold text-3xl">Contact</h1>
          <TitleDivider />
        </div>
        <div className="flex flex-col-reverse md:flex-row max-w-6xl mx-auto gap-24 mt-10">
          <div className="flex flex-col gap-4 w-full md:w-1/3 p-5 mb-10">
            {/* contact email */}
            <div className="flex flex-col gap-1">
              <h1 className="text-gray-800 font-semibold text-lg">Instagram</h1>
              <p className="text-gray-800 text-lg">
                <a
                  target="_blank"
                  href="https://www.instagram.com/_soul_space_67/"
                >
                  @_soul_space_67
                </a>
              </p>
            </div>
            {/* contact email */}
            <div className="flex flex-col gap-1">
              <h1 className="text-gray-800 font-semibold text-lg">Email</h1>
              <p className="text-gray-800 text-lg">
                <a target="_blank" href="mailto:contact@thesoulspace.in">
                  contact@thesoulspace.in
                </a>
              </p>
            </div>
            {/* support email */}
            <div className="flex flex-col gap-1">
              <h1 className="text-gray-800 font-semibold text-lg">Support</h1>
              <p className="text-gray-800 text-lg">
                <a target="_blank" href="mailto:support@thesoulspace.in">
                  support@thesoulspace.in
                </a>
              </p>
            </div>
            {/* address */}
            <div className="flex flex-col gap-1">
              <h1 className="text-gray-800 font-semibold text-lg">Address</h1>
              <p className="text-gray-800 text-md">
                Shree Radhe Shyam Nivas,
                <br /> Opp. Uttarsanda Railway Station Road, Uttarsanda, Gujarat
                388260
              </p>
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
