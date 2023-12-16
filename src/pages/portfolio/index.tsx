import React from "react";
import EditPage from "../../app/components/page-module/edit";
import { Flex } from "@chakra-ui/react";
import Header from "../../app/components/header";
import Preview from "../../app/components/page-module/preview";
import ViewPage from "./view";
import { useForm } from "react-hook-form";

const Portfolio = () => {
  const methods = useForm();
  const { watch, handleSubmit, reset } = methods;
  const [activeTab, setActiveTab] = React.useState("edit");

  React.useEffect(() => {
    const storageItem = localStorage.getItem("portfolio");

    if (storageItem) {
      reset(JSON.parse(storageItem));
    }
  }, [reset]);

  const renderContent = () => {
    switch (activeTab) {
      case "edit":
        return (
          <>
            <EditPage
              methods={methods}
              watch={watch}
              handleSubmit={handleSubmit}
            />
            <Preview watch={watch} />
          </>
        );
      case "view":
        return <ViewPage />;
      default:
        return null;
    }
  };
  return (
    <Flex flexDir="column" w="full">
      <Header
        isActive={activeTab}
        onGeneratePortfolioClick={() => {
          setActiveTab("edit");
        }}
        onYourPortfolioClick={() => {
          setActiveTab("view");
        }}
      />
      <Flex
        flexDir={{ base: "column", lg: "row" }}
        maxW="7xl"
        mx="auto"
        py={10}
        px={{ base: 10, lg: 5 }}
        gap={5}
        w="full"
        flexGrow={1}
        justifyContent="space-between"
      >
        {renderContent()}
      </Flex>
    </Flex>
  );
};

export default Portfolio;
