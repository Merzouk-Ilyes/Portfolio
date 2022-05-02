import Image from "next/image";
import { Tag, Stack, Button } from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";
import { BsEyeglasses } from "react-icons/bs";
export default function ProjectCard() {
  return (
    <div className="card ">
      <div className="h-[38%] w-[100%]">
        <Image
          src="/../public/images/g1.gif"
          alt="gif"
          width="100%"
          height="100%"
          layout="responsive"
          objectFit="fill"
        />
      </div>
      <div className="content ">
        <h2 className="text-[27px] font-[700] ">ShopNow</h2>
        <p className="text-[15px]">An ecommerce website</p>
        <div className="flex">
          {["react", "sass", "firebase", "typescript"].map((tech, i) => (
            <Tag
              key={i}
              className="w-fit mr-1 mb-2 bg-slate-500 "
              borderRadius="full"
              variant="solid"
            >
              {tech}
            </Tag>
          ))}
        </div>
        <Stack direction="row"   spacing={4}>
          <Button
            leftIcon={<AiFillGithub />}
            colorScheme="whiteAlpha"
            // variant="outline"
          >
            Github
          </Button>
          <Button
            leftIcon={<BsEyeglasses />}
            colorScheme="teal"
            variant="solid"
          >
            Live demo
          </Button>
        </Stack>
      </div>
    </div>
  );
}
