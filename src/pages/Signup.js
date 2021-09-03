import React from 'react';
import {
    Flex,
    Box,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Link,
    Button,
    Switch,
    HStack,
    Grid,
    Image
} from '@chakra-ui/react';

import signUp from '../assets/signUp.svg'

export default function Signup() {
    return (
        <Grid templateColumns="repeat(2, 1fr)" gap={10}>
            <Flex width="full" align="center" justify="left">
                <Box p={8} borderWidth={1} borderRadius={8}>
                    <Box textAlign="center">
                        <Heading>
                            Signup
                        </Heading>
                    </Box>
                    <Box my={4} textAlign="left">
                        <form>
                            <FormControl>
                                <HStack spacing={3}>
                                    <FormLabel mt={1}>Student?</FormLabel>
                                    <Switch id="student-or-teacher" />
                                </HStack>
                            </FormControl>
                            <FormControl isRequired mt={4}>
                                <FormLabel>Roll Number</FormLabel>
                                <Input type="text" placeholder="Roll Number" />
                            </FormControl>
                            <FormControl isRequired mt={4}>
                                <FormLabel>Email ID</FormLabel>
                                <Input type="text" placeholder="Email ID" />
                            </FormControl>
                            <FormControl isRequired mt={4}>
                                <FormLabel>Mobile Number</FormLabel>
                                <Input type="text" placeholder="Mobile Number" />
                            </FormControl>
                            <FormControl isRequired mt={4}>
                                <FormLabel>Password</FormLabel>
                                <Input type="password" placeholder="Password" />
                            </FormControl>
                            <FormControl isRequired mt={4}>
                                <FormLabel>Confirm Password</FormLabel>
                                <Input type="password" placeholder="Confirm Password" />
                            </FormControl>
                            <Button type="submit" colorScheme="teal" variant="outline" width="full" mt={4}>
                                Sign Up
                            </Button>
                            <Button mt={4} colorScheme="teal" variant="link">
                                <Link href="/">
                                    Lost your Way? Click here
                                </Link>
                            </Button>
                        </form>
                    </Box>
                </Box>
            </Flex>
            <Box boxSize="md" style={{ paddingTop: "35%" }}>
                <Image src={signUp} />
            </Box>
        </Grid>
    );
}

