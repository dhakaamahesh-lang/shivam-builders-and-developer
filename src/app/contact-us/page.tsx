import Badge from "@/components/common/badge";
import ContactCards from "@/components/contact-us/contact-card";
import Form from "@/components/contact-us/form";
import { Typography } from "@/components/ui/typography";

const page = () => {
  return (
    <>
      <section className="container max-w-5xl! mx-auto pt-16 lg:pt-30">
        <Badge className="mx-auto" text="Contact us" />
        <Typography variant={"h1"} className="mx-auto text-center mt-3">
          Let’s bring your <br /> dream space to life
        </Typography>
        <Typography
          variant={"p20"}
          className="mx-auto text-white-70 text-center mt-5"
        >
          Reach out to discuss your ideas, ask a question, or request a quote.
        </Typography>
        <Form />
      </section>
      <ContactCards />
    </>
  );
};

export default page;
