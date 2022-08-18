import React from "react";
import { MdEmail } from "react-icons/md";
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { Tooltip,Tag } from "@chakra-ui/react";
import { FaFacebookF } from "react-icons/fa";
function Socials() {
  return (
    <div className="grid grid-cols-7 gap-2 w-[370px]  relative  z-10 dark:text-white text-[27px] text-gray-600 my-8  mx-[5%]  md:mx-[10%] lg:mx-[20%] ">
      <a href="mailto:i.merzouk@esi-sba.dz" className=" w-fit">
        {" "}
        <MdEmail />
      </a>
      <a
        href="https://www.facebook.com/ilyas.merzouk.90"
        target="_blank"
        rel="noopener noreferrer"
        className=" w-fit"
      >
        <FaFacebookF />{" "}
      </a>
      <a
        href="https://www.instagram.com/ilyes17_mk/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-fit"
      >
        <AiFillInstagram />{" "}
      </a>
      <a
        href="https://www.linkedin.com/in/merzouk-ilyes-reda/"
        target="_blank"
        rel="noopener noreferrer"
        className=" w-fit"
      >
        {" "}
        <AiFillLinkedin />{" "}
      </a>
      {/* <a
        href="https://twitter.com/IlyesReda17"
        target="_blank"
        rel="noopener noreferrer"
        className=" w-fit"
      >
        {" "}
        <AiOutlineTwitter />
      </a> */}
      <a
        href="https://github.com/Merzouk-Ilyes"
        target="_blank"
        rel="noopener noreferrer"
        className=" w-fit"
      >
        {" "}
        <AiFillGithub />
      </a>
      <div>
        <Tooltip
          label="+213 558 44 95 41"
          fontSize="large"
          // className="w-fit"
          placement="auto"
        >
          <CustomCard ></CustomCard>
        </Tooltip>
      </div>
    </div>
  );
}

export default Socials;

const CustomCard = React.forwardRef(({ children, ...rest }, ref) => (
  <div ref={ref} {...rest}>
    <BsFillTelephoneFill className="dark:text-white text-[27px] text-gray-600" />
    </div>
));

CustomCard.displayName = "CustomCard"