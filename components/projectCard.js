import React from "react";
import Image from "next/image";
import { Button, Stack, Tag, TagLabel } from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";
import { BsEyeglasses } from "react-icons/bs";
function ProjectCard() {
  return (
    <>
      <div className="figure-container">
        <Image
          src="/../public/images/g1.gif"
          alt="gif"
          width="100%"
          height="100%"
          layout="responsive"
          objectFit="fill"
        />

        <div className="figcaption-container">
          <h3 className="text-[30px] font-bold">E Commerce </h3>
          <div className="grid  gap-2 grid-cols-5 my-3">
            <CustomTag title="React" />
            <CustomTag title="React" />
            <CustomTag title="React" />
          </div>
          <Stack direction="row" spacing={4}>
            <Button
              leftIcon={<AiFillGithub />}
              colorScheme="teal"
              variant="outline"
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
    </>
  );
}

export default ProjectCard;

const CustomTag = ({ title }) => {
  return (
    <Tag
      size={"md"}
     
      // borderRadius="full"
      variant="solid"
      colorScheme="gray"
    >
      {title}
    </Tag>
  );
};
