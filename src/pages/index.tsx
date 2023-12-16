import React from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { Box } from "@chakra-ui/react";
import Splash from "../app/components/loader/Splash";

const Home: NextPage = () => {
  const router = useRouter();
  React.useEffect(() => {
    setTimeout(() => {
      router.replace("/portfolio");
    }, 1200);
  }, [router]);
  return (
    <Box>
      <Splash />
    </Box>
  );
};

export default Home;
