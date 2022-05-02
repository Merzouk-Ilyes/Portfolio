import Navbar from "../components/navbar";
import BgText from "../components/bgText";
import Layout from "../components/layout";
function Contact() {
  return (
    <Layout>
      <div className="relative bg-white dark:bg-black ">
        <Navbar />
        <BgText text="Contact." />
        <h1 className=" mx-[5%] md:mx-[10%]  lg:ml-[20%] text-[40px]  md:text-[50px] lg:text-[60px] text-black dark:text-white font-[700] ">
          Contact.
        </h1>
      </div>
    </Layout>
  );
}

export default Contact;
