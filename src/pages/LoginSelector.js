import React from 'react';

import {
    Flex,
    Box,
    Heading,
    Text,
    Link,
    Button,
    VStack
} from '@chakra-ui/react';
import Typist from 'react-text-typist';
import '../theme/Typist.css';
import '../theme/loginSelector.css'

export default function LoginSelector() {
    return (
        <Flex width="full" align="center" justify="center">
            <VStack>
            <Box style={{position:"absolute",top:'10%'}}>
            <Typist style={{'font-size':'2em','font-weight':'bold'}}className={'myTypist'} cursorClassName={'myCursor'} sentences={['Attendo 📜', 'Attendance Made Easy 🗓']} loop={false} />
            </Box>
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
                <Box my={4} textAlign="center">
                    <Button colorScheme="teal" variant="ghost">
                        <Link href="/signup">
                            New Around here?
                        </Link>
                    </Button>
                </Box>
                <Box my={4} textAlign="center">
                    <Button colorScheme="teal" variant="ghost">
                        <Link href="/forgotpassword">
                            Forgot Password?
                        </Link>
                    </Button>
                </Box>
            </Box>
            </VStack>
        </Flex>
    );
}
