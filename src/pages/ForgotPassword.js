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
    Image
} from '@chakra-ui/react';

import forgotPassword from '../assets/forgotPassword.svg'

export default function ForgotPassword() {
    return (
        <Grid templateColumns="repeat(2, 1fr)" gap={10}>
        <Flex width="full" align="center" justify="left">
            <Box p={8} borderWidth={1} borderRadius={8}>
                <Box textAlign="center">
                    <Heading>
                        Forgot Password
                    </Heading>
                </Box>
                <Box my={4} textAlign="left">
                    <form>
                        <FormControl  mt={6}>
                            <FormLabel>Roll Number</FormLabel>
                            <Input type="text" placeholder="Roll Number" />
                        </FormControl>
                        <FormControl  mt={6}>
                            <FormLabel>Email ID</FormLabel>
                            <Input type="text" placeholder="Email ID" />
                        </FormControl>
                        <Button type="submit" colorScheme="teal" variant="outline" width="full" mt={4}>
                            <Link href="#">
                                Get Password
                            </Link>
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
        <Box boxSize="sm" mt={10}>
            <Image src={forgotPassword}/>
        </Box>
        </Grid>
    );
}

