import React from "react";
import EditPage from "./edit";
import { Flex } from "@chakra-ui/react";
import Header from "../../app/components/header";
import Preview from "./preview";
import ViewPage from "./view";

const Portfolio = () => {
  const [activeTab, setActiveTab] = React.useState("edit");

  const renderContent = () => {
    switch (activeTab) {
      case "edit":
        return (
          <>
            <EditPage />
            <Preview />
          </>
        );
      case "view":
        return <ViewPage />;
      default:
        return null;
    }
  };
  return (
    <>
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
        maxW="7xl"
        mx="auto"
        py={10}
        px={5}
        gap={5}
        w="full"
        justifyContent="space-between"
      >
        {renderContent()}
      </Flex>
    </>
  );
};

export default Portfolio;
