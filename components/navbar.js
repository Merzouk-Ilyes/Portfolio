import {
  IconButton,
  Show,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsFillSunFill } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";
import {
  navbar_links_lg,
  navbar_links_sm,
  link,
} from "../public/sass/navbar.module.sass";
function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className=" flex justify-between items-center py-[70px] px-[5%]  md:px-[10%]  	">
      <div className="text-black">Merzouk ilyes</div>
      <div className={navbar_links_lg}>
        <div className="flex  items-center">
          <p className={`${link}  text-gray-400  mx-5 `}>About</p>
          <p className={`${link}  text-gray-400  mx-5 `}>Projects</p>
          <p className={`${link}  text-gray-400  mx-5 `}>Skills</p>
          <p className={`${link}  text-gray-400  mx-5 `}>Contact</p>
          <div className="mx-5">
            {/* <IconButton
              variant="outline"
              
              fontSize="22px"
              icon={<BsFillSunFill />}
            /> */}
            <IconButton
              variant="outline"
              fontSize="22px"
              icon={<MdDarkMode />}
            />
          </div>
        </div>
      </div>

      <div className={navbar_links_sm}>
        <AiOutlineMenu className="text-[20px]" onClick={onOpen} />
        <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth="1px">Logo</DrawerHeader>
            <DrawerBody></DrawerBody>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
}

export default Navbar;
