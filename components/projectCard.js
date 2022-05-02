import Image from "next/image";
import { Tag, Stack, Button } from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";
import { BsEyeglasses } from "react-icons/bs";
export default function ProjectCard() {
  return (
    <div className="card">
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
        <h1 className="text-[27px] font-[700] ">ShopNow</h1>
        <p className="text-[15px] mb-[10px] ">An ecommerce website</p>
        <div className="flex mb-[30px]">
          {["react", "firebase", "typescript"].map((tech, i) => (
            <Tag
              key={i}
              className="w-fit mr-1  "
              borderRadius="full"
              variant="solid"
            >
              {tech}
            </Tag>
          ))}
        </div>
        <Stack direction="row" spacing={4}>
          <Button
            leftIcon={<AiFillGithub />}
            colorScheme="blackAlpha"
            // variant="outline"
            onClick={() =>
              window.open("https://github.com/Merzouk-Ilyes/Shopnow")
            }
          >
            Github
          </Button>
          <Button
            leftIcon={<BsEyeglasses />}
            colorScheme="yellow"
            variant="solid"
            onClick={() => window.open("https://shopnow-commerce.netlify.app")}
          >
            Live demo
          </Button>
        </Stack>
      </div>
    </div>
  );
}
