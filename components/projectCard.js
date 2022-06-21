import Image from "next/image";
import { Tag, Stack, Button, LightMode } from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";
import { BsEyeglasses } from "react-icons/bs";
export default function ProjectCard({
  title,
  description,
  img,
  techs,
  githubUrl,
  demoUrl,
  demoExist,
}) {
  return (
    <div className="card">
      <div className="h-[38%] w-[100%]">
        <Image
          src={img}
          alt="gif"
          width="100%"
          height="100%"
          layout="fill"
          // objectFit="fill"
        />
      </div>
      <div className="content ">
        <h1 className="text-[27px] font-[700] ">{title}</h1>
        <p className="text-[15px] mb-[10px] pr-[10px] ">{description} </p>
        <div className="flex mb-[25px]">
          {techs.map((tech, i) => (
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
          <LightMode>
            <Button
              leftIcon={<AiFillGithub />}
              colorScheme="blackAlpha"
              // variant="outline"
              onClick={() => window.open(githubUrl)}
            >
              Github
            </Button>
          </LightMode>
         
          {demoExist ? (
            <LightMode>
              <Button
                leftIcon={<BsEyeglasses />}
                colorScheme="yellow"
                variant="solid"
                onClick={() => window.open(demoUrl)}
              >
                Live demo
              </Button>
            </LightMode>
          ) : (
            ""
          )}
        </Stack>
      </div>
    </div>
  );
}
