import React from 'react';

import {
    Flex,
    Box,
    Heading,
    Text,
    Link,
    Button,
    VStack,
    Grid,
    Image
} from '@chakra-ui/react';
import Typist from 'react-text-typist';
import '../theme/Typist.css';
import '../theme/loginSelector.css'
import login from '../assets/loginselector.svg'

export default function LoginSelector() {
    return (
        <Grid templateColumns="repeat(2, 3fr)" gap={10}>
        <Flex width="full" align="center" justify="center">
            <VStack >
            <Box style={{position:"relative"}}>
            <Typist style={{'font-size':'2em','font-weight':'bold'}}className={'myTypist'} cursorClassName={'myCursor'} sentences={['Attendo 📜', 'Attendance Made Easy 🗓']} loop={false} />
            </Box>
            <Box p={8} maxWidth="500px">
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
            </VStack>
        </Flex>
        <Box boxSize="md" style={{ paddingTop: "20%" }}>
                <Image src={login} />
            </Box>
        </Grid>
    );
}
