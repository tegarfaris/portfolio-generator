import React from "react";
import { Avatar, Box, Flex, Image, Text } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";
import { startCase } from "lodash";
import dayjs from "dayjs";

interface IPortfolio {
  portfolioName: string;
  position: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
}

const ViewPage = () => {
  const { watch, getValues } = useFormContext();
  const portfolios = watch("portfolios") || [];

  return (
    <Flex
      w="full"
      flexDir="row-reverse"
      flexGrow={1}
      gap={5}
      justifyContent="space-between"
    >
      {/* <Text fontWeight={700} fontSize="xl" color="#2A9EF4" mb={3}>
        Preview Realtime
      </Text> */}
      <Flex bg="white" borderRadius="10px" flexDir="column" gap={2} w="xl">
        <Flex
          pos="relative"
          flexDir="column"
          // border="5px solid red"
          alignItems="center"
          justifyContent="center"
        >
          <Image
            src={
              watch("backgroundImage")
                ? watch("backgroundImage").map((img: any) => img.preview)
                : "https://images.unsplash.com/photo-1503480207415-fdddcc21d5fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJhY2tncm91bmQlMjBibHVlfGVufDB8MHwwfHx8MA%3D%3D" ||
                  "https://images.unsplash.com/photo-1503480207415-fdddcc21d5fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJhY2tncm91bmQlMjBibHVlfGVufDB8MHwwfHx8MA%3D%3D"
            }
            w="full"
            objectFit="cover"
            aspectRatio={3}
            alt="bg-image"
            borderRadius="10px 10px 0 0"
          />
          <Avatar
            src={
              watch("profileImage")
                ? watch("profileImage").map((img: any) => img.preview)
                : ""
            }
            name={watch("fullName") ? watch("fullName") : ""}
            mt={{ base: "-15px", lg: "-50px" }}
            h={{ base: "30px", lg: "100px" }}
            w={{ base: "30px", lg: "100px" }}
          />
        </Flex>
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDir="column"
          // maxW="md"
        >
          <Text fontWeight={600} fontSize="xl">
            {watch("profileName")
              ? startCase(watch("profileName"))
              : "Your Name"}
          </Text>
          <Text fontWeight={600} color="#B1B2B3" fontSize="lg">
            {watch("title") ? startCase(watch("title")) : "Your Title"}
          </Text>
          <Text textAlign="center" w="md">
            {watch("descriptionProfile")
              ? startCase(watch("descriptionProfile"))
              : "Deskripsi, lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet"}
          </Text>
        </Flex>
        <Flex flexDir="column" p="40px" gap={3}>
          <Text fontWeight={600} fontSize="lg">
            Portfolio
          </Text>
          {portfolios.length > 0 ? (
            portfolios.map((portfolio: IPortfolio, index: number) => (
              <Flex
                key={index}
                flexDir="column"
                gap={2}
                boxShadow="md"
                p={5}
                borderRadius="10px"
                border="1px solid #E3E3E3"
              >
                <Flex flexDir="column">
                  <Text fontWeight={600} fontSize="md">
                    {`${portfolio.position} | ${portfolio.portfolioName}`}
                  </Text>
                  <Text color="#B1B2B3">{portfolio.company}</Text>
                  <Text color="#B1B2B3">{`${dayjs(portfolio.startDate).format(
                    "DD MMM YYYY"
                  )} - ${dayjs(portfolio.endDate).format(
                    "DD MMM YYYY"
                  )}`}</Text>
                </Flex>
                <Text textAlign="justify">{portfolio.description}</Text>
              </Flex>
            ))
          ) : (
            <Flex
              flexDir="column"
              gap={2}
              boxShadow="md"
              p={5}
              borderRadius="10px"
              border="1px solid #E3E3E3"
            >
              <Flex flexDir="column">
                <Text fontWeight={600} fontSize="md">
                  Position
                </Text>
                <Text color="#B1B2B3">Company</Text>
                <Text color="#B1B2B3">startDate - EndDate</Text>
              </Flex>
              <Text textAlign="justify">Description</Text>
            </Flex>
          )}
        </Flex>
      </Flex>
      <Flex flexDir="column" gap={3}>
        <Flex
          bg="white"
          p={5}
          h="fit-content"
          borderRadius="10px"
          alignItems="center"
          justifyContent="center"
          boxShadow="lg"
          flexDir="column"
        >
          <Text fontSize="3xl" fontWeight={600} color="#2A9EF4">
            Congrats.. This is your final Portfolio 👉
          </Text>
        </Flex>
        <Text color="#B1B2B3" textAlign="left">
          *You can change by click generate portfolio
        </Text>
      </Flex>
    </Flex>
  );
};

export default ViewPage;
