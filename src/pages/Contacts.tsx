import Navigation from "@/components/Navigation";
import ContactHeader from "@/components/contacts/ContactHeader";
import ContactForm from "@/components/contacts/ContactForm";
import ContactInfo from "@/components/contacts/ContactInfo";

const Contacts = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <ContactHeader />

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
