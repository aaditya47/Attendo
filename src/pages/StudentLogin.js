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
    Grid,
    Image,
} from '@chakra-ui/react';
import studentLogin from '../assets/studentLogin.svg'

export default function StudentLogin() {
    return (
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <Flex width="full" align="center" justify="left">
            <Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8}>
                <Box textAlign="center">
                    <Heading>
                        Student Login
                    </Heading>
                </Box>
                <Box my={4} textAlign="left">
                    <form>
                        <FormControl>
                            <FormLabel>Roll Number</FormLabel>
                            <Input type="text" placeholder="Roll Number" />
                        </FormControl>
                        <FormControl mt={6}>
                            <FormLabel>Password</FormLabel>
                            <Input type="password" placeholder="Password" />
                        </FormControl>
                        <Button type="submit" colorScheme="teal" variant="outline" width="full" mt={4}>
                            <Link href="/leaveform">
                                Sign In
                            </Link>
                        </Button>
                    </form>
                    <Button mt={4} colorScheme="teal" variant="link">
                        <Link href="/">
                            Not a student? Click here to go back
                        </Link>
                    </Button>
                </Box>
            </Box>
        </Flex>
        <Box boxSize="sm" mt={10}>
            <Image src={studentLogin} alt="Segun Adebayo" />
        </Box>
        </Grid>
    );
}