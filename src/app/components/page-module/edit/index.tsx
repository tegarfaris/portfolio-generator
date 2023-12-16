import React from "react";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Divider,
  Flex,
  useToast,
} from "@chakra-ui/react";
import { TbArrowsDiagonalMinimize2 } from "react-icons/tb";
import { FiMaximize2 } from "react-icons/fi";
import {
  FieldValues,
  FormProvider,
  UseFormHandleSubmit,
  UseFormReturn,
  UseFormWatch,
} from "react-hook-form";
import { addLocalStorage } from "../../../redux/slice/portfolioSlice";
import { useDispatch } from "react-redux";
import AvatarSection from "../AvatarSection";
import FormProfile from "../../form/FormProfile";
import PortfolioSection from "../PortfolioSection";
import dynamic from "next/dynamic";
import BackgroundSection from "../BackgroundSection";

// const BackgroundSection = dynamic(
//   () => import("../../../app/components/page-module/BackgroundSection"),
//   {
//     ssr: false,
//   }
// );

const EditPage: React.FC<{
  watch: UseFormWatch<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues, undefined>;
  methods: UseFormReturn<FieldValues, any, undefined>;
}> = ({ handleSubmit, methods }) => {
  const dispatch = useDispatch();
  const toast = useToast();

  const onSubmit = (data: FieldValues) => {
    try {
      dispatch(addLocalStorage(data));
      toast({
        title: "Portfolio Saved",
        variant: "top-accent",
        position: "top",
        status: "success",
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <FormProvider {...methods}>
      <Flex flexDir="column" w={{ base: "full", lg: "fit-content" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Button
            type="submit"
            variant="solid"
            bg="#2A9EF4"
            borderRadius="10px"
            h="min-content"
            px={5}
            color="white"
            w="fit-content"
            mb={3}
          >
            Simpan Perubahan
          </Button>

          <Flex w="full" bg="white" borderRadius="10px" p={5}>
            <Accordion allowMultiple w={{ base: "full", lg: "lg" }}>
              <AccordionItem
                borderTop="none"
                border="1px solid #E3E3E3"
                borderRadius="10px"
              >
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton
                        _expanded={{
                          bg: "#EAF5FE",
                          color: "#2A9EF4",
                          borderRadius: "10px 10px 0 0",
                        }}
                      >
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          color="#2A9EF4"
                          p={3}
                          fontWeight={600}
                        >
                          Background Image
                        </Box>
                        {isExpanded ? (
                          <TbArrowsDiagonalMinimize2 />
                        ) : (
                          <FiMaximize2 />
                        )}
                      </AccordionButton>
                    </h2>

                    <AccordionPanel pb={4}>
                      {/* background section */}
                      <BackgroundSection />
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
              <Divider py={3} />
              <AccordionItem
                borderTop="none"
                border="1px solid #E3E3E3"
                borderRadius="10px"
                mt={3}
              >
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton
                        _expanded={{
                          bg: "#EAF5FE",
                          color: "#2A9EF4",
                          borderRadius: "10px 10px 0 0",
                        }}
                      >
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          color="#2A9EF4"
                          p={3}
                          fontWeight={600}
                        >
                          Profile Image
                        </Box>
                        {isExpanded ? (
                          <TbArrowsDiagonalMinimize2 />
                        ) : (
                          <FiMaximize2 />
                        )}
                      </AccordionButton>
                    </h2>

                    <AccordionPanel pb={4}>
                      {/* profile picture section */}
                      <AvatarSection />
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
              <Divider py={3} />
              <AccordionItem
                borderTop="none"
                border="1px solid #E3E3E3"
                borderRadius="10px"
                mt={3}
              >
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton
                        _expanded={{
                          bg: "#EAF5FE",
                          color: "#2A9EF4",
                          borderRadius: "10px 10px 0 0",
                        }}
                      >
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          color="#2A9EF4"
                          p={3}
                          fontWeight={600}
                        >
                          Profile
                        </Box>
                        {isExpanded ? (
                          <TbArrowsDiagonalMinimize2 />
                        ) : (
                          <FiMaximize2 />
                        )}
                      </AccordionButton>
                    </h2>

                    <AccordionPanel pb={4}>
                      {/* form profile section */}
                      <FormProfile />
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
              <Divider py={3} />
              <AccordionItem
                borderTop="none"
                border="1px solid #E3E3E3"
                borderRadius="10px"
                mt={3}
              >
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton
                        _expanded={{
                          bg: "#EAF5FE",
                          color: "#2A9EF4",
                          borderRadius: "10px 10px 0 0",
                        }}
                      >
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          color="#2A9EF4"
                          p={3}
                          fontWeight={600}
                        >
                          Portfolio
                        </Box>
                        {isExpanded ? (
                          <TbArrowsDiagonalMinimize2 />
                        ) : (
                          <FiMaximize2 />
                        )}
                      </AccordionButton>
                    </h2>

                    <AccordionPanel pb={4}>
                      <PortfolioSection />
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>
          </Flex>
        </form>
      </Flex>
    </FormProvider>
  );
};

export default EditPage;
