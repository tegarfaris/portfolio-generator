import React from "react";
import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const Splash: React.FC = () => {
  return (
    <Center w="100vw" h="100vh" justifyContent="center" alignItems="center">
      <Flex flexDir="column">
        {/* <motion.img
          src="/assets/loader/wool.svg"
          alt="wool"
          width="200px"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        /> */}
        <Text fontWeight={600} fontSize="xl" color="#2A9EF4">
          Welcome to
        </Text>
        <motion.text
          width="500px"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        <Box position="relative">
          <Text fontSize="2xl" fontWeight={600} color="#2A9EF4">
            Portfolio Builder by Tegar
          </Text>
          <motion.div
            style={{
              position: "absolute",
              width: "100%",
              height: "125px",
              backgroundColor: "#F8F9FA",
            }}
            initial={{ y: -50 }}
            animate={{ y: 25 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </Box>
      </Flex>
    </Center>
  );
};

export default Splash;
