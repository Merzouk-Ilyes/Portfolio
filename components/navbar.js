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
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
function Navbar() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { systemTheme, theme, setTheme } = useTheme();

  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <IconButton
          fontSize="22px"
          colorScheme="white"
          icon={<BsFillSunFill />}
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <IconButton
          fontSize="22px"
          icon={<MdDarkMode />}
          onClick={() => setTheme("dark")}
        />
      );
    }
  };
  return (
    <div className=" flex justify-between items-center py-[70px] px-[5%]  md:px-[10%]  	">
      <div className="text-black dark:text-white">Merzouk ilyes</div>
      <div className={navbar_links_lg}>
        <div className="flex  items-center">
          <a className={`${link}  text-gray-400  mx-5 `}>About</a>
          <a className={`${link}  text-gray-400  mx-5 `}>Projects</a>
          <a className={`${link}  text-gray-400  mx-5 `}>Skills</a>
          <a className={`${link}  text-gray-400  mx-5 `}>Contact</a>
          <div className="mx-5">{renderThemeChanger()}</div>
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
