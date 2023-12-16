import { Button, Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

interface HeaderProps {
  onGeneratePortfolioClick: () => void;
  onYourPortfolioClick: () => void;
  isActive: string;
}
const Header: React.FC<HeaderProps> = ({
  onGeneratePortfolioClick,
  onYourPortfolioClick,
  isActive,
}) => {
  const router = useRouter();
  return (
    <Flex bg="white" py={5} boxShadow="md">
      <Flex maxW="7xl" mx="auto" px={4} w="full" justifyContent="space-between">
        <Text fontWeight={700} fontSize="2xl" color="#2A9EF4">
          Portfolio Builder
        </Text>
        <Flex gap={3}>
          <Button
            variant="outline"
            border="1px solid #2A9EF4"
            color={isActive === "edit" ? "white" : "#2A9EF4"}
            bg={isActive === "edit" ? "#2A9EF4" : ""}
            onClick={() => {
              onGeneratePortfolioClick();
              // router.push("/");
            }}
          >
            Generate Portfolio
          </Button>
          <Button
            variant="outline"
            border="1px solid #2A9EF4"
            color={isActive === "view" ? "white" : "#2A9EF4"}
            bg={isActive === "view" ? "#2A9EF4" : ""}
            onClick={() => {
              onYourPortfolioClick();
              // router.push("portfolio/view");
            }}
          >
            Your Portfolio
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
