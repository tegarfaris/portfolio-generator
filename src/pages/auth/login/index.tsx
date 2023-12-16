import { Button, Flex, Input, Text } from '@chakra-ui/react'
import React from 'react'

const Login = () => {
  return (
    <Flex w="full">
        <Flex w="full" flexDir="column" gap={3} p={5} justifyContent="center" alignItems="center">
            <Text fontSize="xl" fontWeight={600}>Login</Text>
            <Input />
            <Input />
            <Input />
            <Button bg="#2A9EF4" color="white">Submit</Button>
        </Flex>
    </Flex>
  )
}

export default Login