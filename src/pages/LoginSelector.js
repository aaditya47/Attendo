import React from 'react';

import {
    Flex,
    Box,
    Heading,
    Text,
    Link,
    Button
} from '@chakra-ui/react';

export default function LoginSelector() {
    return(
        <Flex width="full" align="center" justify="center">
            <Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8}>
                <Box textAlign="center">
                    <Heading>
                        Welcome!
                    </Heading>
                    <Text mt={2}>
                        Please select your login method
                    </Text>
                </Box>
                <Box my={4} textAlign="center">
                    <Button colorScheme="teal" variant="ghost">
                        <Link href="/studentlogin">
                            Student
                        </Link>
                    </Button>
                </Box>
                <Box my={4} textAlign="center">
                    <Button colorScheme="teal" variant="ghost">
                        <Link href="/teacherlogin">
                            Teacher
                        </Link>
                    </Button>
                </Box>
            </Box>
        </Flex>
    );
}