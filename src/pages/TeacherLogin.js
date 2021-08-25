import React from 'react';
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Link,
  Button
} from '@chakra-ui/react';

export default function TeacherLogin() {
    return(
        <Flex width="full" align="center" justify="center">
            <Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8}>
                <Box textAlign="center">
                    <Heading>
                        Teacher Login
                    </Heading>
                </Box>
                <Box my={4} textAlign="left">
                    <form>
                        <FormControl>
                            <FormLabel>Faculty ID</FormLabel>
                            <Input type="text" placeholder="Faculty ID" />
                        </FormControl>
                        <FormControl mt={6}>
                            <FormLabel>Password</FormLabel>
                            <Input type="password" placeholder="Password" />
                        </FormControl>
                        <Button type="submit" colorScheme="teal" variant="outline" width="full" mt={4}>
                            Sign In
                        </Button>
                    </form>
                    <Button mt={4} colorScheme="teal" variant="link">
                        <Link href="/">
                            Not a teacher? Click here to go back
                        </Link>
                    </Button>
                </Box>
            </Box>
        </Flex>
    );
}