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

import teacherLogin from '../assets/teacherLogin.svg'

export default function TeacherLogin() {
    return (
        <Grid templateColumns="repeat(2, 1fr)" gap={8}>
            <Flex width="full" align="center" justify="center">
                <Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8}>
                    <Box textAlign="center">
                        <Heading>
                            Teacher Login
                        </Heading>
                    </Box>
                    <Box my={4} textAlign="left">
                        <form>
                            <FormControl isRequired>
                                <FormLabel>Faculty ID</FormLabel>
                                <Input type="text" placeholder="Faculty ID" />
                            </FormControl>
                            <FormControl isRequired mt={6}>
                                <FormLabel>Password</FormLabel>
                                <Input type="password" placeholder="Password" />
                            </FormControl>
                            <Button type="submit" colorScheme="teal" variant="outline" width="full" mt={4}>
                                <Link href="/teachertimetable">
                                    Sign In
                                </Link>
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
            <Box boxSize="sm" mt={10}>
                <Image src={teacherLogin} alt="Segun Adebayo" />
            </Box>
        </Grid>
    );
}