import { React, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
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
    useToast,
    HStack,
    VStack,
    InputGroup,
    InputRightElement
} from '@chakra-ui/react';
import { StudentLoginURI } from '../api/urls';
import studentLogin from '../assets/studentLogin.svg';

export default function StudentLogin() {
    const toast = useToast()
    const history = useHistory()
    const onSubmit = (RollNo, password) => {
        if (RollNo && password) {
            axios.post(StudentLoginURI, /*TODO: fill in {json data}*/).then(
                res => {
                    if ((res.data.status).length > 0) {
                        history.push('/student/dashboard');
                    }
                }
            ).catch(err => {
                toast({
                    title: 'Login Error',
                    description: 'Invalid credentials! Please double check your username and password!',
                    status: 'error',
                    duration: 9000,
                    isClosable: true
                })
            }
            )
        }
        else {
            toast({
                position: 'top',
                title: "Login Error",
                description: "Please enter the complete credentials",
                status: "error",
                duration: 9000,
                isClosable: true,
            })
            //alert("Please enter the credentials");

        }
    }
    const handleClick = () => setShow(!show)
    const [show, setShow] = useState(false)
    const [RollNo, setRollNo] = useState('');
    const [password, setPassword] = useState('');
    const [allow, setAllow] = useState(false)

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
                                <Input type="text" value={RollNo} onChange={(event) => setRollNo(event.target.value)} placeholder="Roll Number" />
                            </FormControl>
                            <FormControl mt={4}>
                                <FormLabel>Password</FormLabel>
                                <InputGroup>
                                    <Input type={show ? "text" : "password"} placeholder="Password" value={password} onChange={(event) => { setPassword(event.target.value) }} />
                                    <InputRightElement width="4.5rem">
                                        <Button h="1.75rem" size="sm" onClick={handleClick}>
                                            {show ? "Hide" : "Show"}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                            </FormControl>
                            <Button colorScheme="teal" variant="outline" width="full" mt={4} onClick={() => onSubmit(RollNo, password)}>
                                <Link href={allow ? '/leaveform' : '#'}>
                                    Sign In
                                </Link>
                            </Button>
                            <VStack>
                                <Button mt={4} colorScheme="teal" variant="ghost">
                                    <Link href="/">
                                        Return to Home Page
                                    </Link>
                                </Button>
                                <HStack>
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
                                </HStack>
                            </VStack>
                        </form>
                    </Box>
                </Box>
            </Flex>
            <Box boxSize="sm" mt={10}>
                <Image src={studentLogin} alt="image" />
            </Box>
        </Grid>
    );
}