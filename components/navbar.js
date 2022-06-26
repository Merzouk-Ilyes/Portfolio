import {
  IconButton,
  Show,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  useColorMode,
  useColorModeValue,
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
import Link from "next/link";
import Logo from "../components/logo";
function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("white", "black");
  const [logoDark, setLogoDark] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  console.log(theme);

  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;
    console.log("currentTheme: " + currentTheme + bg);
    if (currentTheme === "dark") {
      bg = "black";
      return (
        <IconButton
          fontSize="22px"
          colorScheme="blackAlpha"
          icon={<BsFillSunFill className="text-white" />}
          onClick={() => {
            setTheme("light");
            toggleColorMode();
            setLogoDark(false);
          }}
        />
      );
    } else {
      bg = "white";
      return (
        <IconButton
          fontSize="22px"
          colorScheme="whiteAlpha"
          icon={<MdDarkMode className="text-black" />}
          onClick={() => {
            setTheme("dark");
            toggleColorMode();
            setLogoDark(true);
          }}
        />
      );
    }
  };
  return (
    <div className=" flex justify-between items-center py-[70px] px-[5%]  md:px-[10%]  	">
      <Link href="/">
        <a className="text-black dark:text-white">
          <Logo dark={logoDark} setDark={setLogoDark} />
        </a>
      </Link>
      <div className={navbar_links_lg}>
        <div className="flex  items-center">
          <Link href="/about">
            <a
              className={`${link} dark:before:bg-slate-50 before:bg-[#000000bb] text-gray-400  mx-5 `}
            >
              About
            </a>
          </Link>

          <Link href="/projects">
            <a
              className={`${link} dark:before:bg-slate-50 before:bg-[#000000bb] text-gray-400  mx-5 `}
            >
              Projects
            </a>
          </Link>

          <div className="mx-5">{renderThemeChanger()}</div>
        </div>
      </div>

      <div className={navbar_links_sm}>
        <AiOutlineMenu
          className="text-[25px]  text-black  dark:text-white "
          onClick={onOpen}
        />
        <Drawer placement="top" bg={bg} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent bg={bg}>
            <DrawerHeader
              borderBottomWidth="1px"
              className="flex justify-between items-center"
            >
              <div>
                <Link href="/">
                  <a className="text-black dark:text-white">
                    <Logo dark={logoDark} setDark={setLogoDark} />
                  </a>
                </Link>
              </div>
              <div className="flex justify-center items-center">
                <div className="mx-5">{renderThemeChanger()}</div>
                <AiOutlineMenu
                  className="text-[25px] dark:text-white "
                  onClick={onClose}
                />
              </div>
            </DrawerHeader>
            <DrawerBody>
              <div className="flex flex-col jusify-center items-center">
                <Link href="/">
                  <a
                    className={`${link} dark:before:bg-slate-50 before:bg-[#000000bb] text-gray-400  mx-5 my-5 `}
                  >
                    Home
                  </a>
                </Link>
                <Link href="/about">
                  <a
                    className={`${link} dark:before:bg-slate-50 before:bg-[#000000bb] text-gray-400  mx-5 my-5 `}
                  >
                    About
                  </a>
                </Link>

                <Link href="/projects">
                  <a
                    className={`${link} dark:before:bg-slate-50 before:bg-[#000000bb] text-gray-400  mx-5 my-5 `}
                  >
                    Projects
                  </a>
                </Link>
              </div>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
}

export default Navbar;
