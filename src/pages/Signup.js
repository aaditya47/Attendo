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
    Switch
} from '@chakra-ui/react';

export default function Signup() {
    return (
        <Flex width="full" align="center" justify="center">
            <Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8}>
                <Box textAlign="center">
                    <Heading>
                        Signup
                    </Heading>
                </Box>
                <Box my={4} textAlign="left">
                    <form>
                        <FormControl>
                            <FormLabel>Student?</FormLabel>
                            <Switch id="student-or-teacher" />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Roll Number</FormLabel>
                            <Input type="text" placeholder="Roll Number" />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Email ID</FormLabel>
                            <Input type="text" placeholder="Email ID" />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Mobile Number</FormLabel>
                            <Input type="text" placeholder="Mobile Number" />
                        </FormControl>
                        <FormControl mt={6}>
                            <FormLabel>Password</FormLabel>
                            <Input type="password" placeholder="Password" />
                        </FormControl>
                        <FormControl mt={6}>
                            <FormLabel>Confirm Password</FormLabel>
                            <Input type="password" placeholder="Confirm Password" />
                        </FormControl>
                        <Button type="submit" colorScheme="teal" variant="outline" width="full" mt={4}>
                            <Link href="/">
                                Sign Up
                            </Link>
                        </Button>
                    </form>
                </Box>
            </Box>
        </Flex>
    );
}

