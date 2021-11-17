<<<<<<< HEAD
import {React,useState} from 'react';
import axios from 'axios';
=======
import { React, useState } from 'react';
>>>>>>> cd39e2e71372aee59dddfcd929efc4afbb4c7b03
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
    useToast
} from '@chakra-ui/react';

import forgotPassword from '../assets/forgotPassword.svg'
import { ForgotPasswordURI } from '../api/urls';

export default function ForgotPassword() {
    const toast = useToast()
    const checkEmail = (email) => {
        var regexp = /\S+@\S+\.\S+/;
        return regexp.test(String(email).toLowerCase());
    }

    const onSubmit = (id, email) => {
        if (id && email) {
            let res = checkEmail(email)
            if (res === false) {
                toast({
                    position: 'top',
                    title: "Forgot Password Error",
                    description: "Enter a valid email ID",
                    status: "error",
                    duration: 9000,
                    isClosable: true,
                })
            }
        axios.post(ForgotPasswordURI,{GId:id,emailId:email}).then(res => {
                if((res.status)===200) {
                    toast({
                        title: 'Password',
                        description: 'Password Sent to Registered Mail',
                        status: 'success',
                        duration: 9000,
                        isClosable: true
                    })
                }
            }
        ).catch(err => {
            toast({
                title: 'Error',
                description: 'Invalid credentials!',
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
                title: "Forgot Password Error",
                description: "Enter the complete credentials",
                status: "error",
                duration: 9000,
                isClosable: true,
            })
        }
    }
    const [id, setID] = useState('');
    const [email, setEmail] = useState('');
    return (
        <Grid templateColumns="repeat(2, 1fr)" gap={10}>
<<<<<<< HEAD
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
                            <Input type="text"  value={id} onChange={(event)=>{setID(event.target.value)}}  placeholder="Roll Number" />
                        </FormControl>
                        <FormControl  mt={6}>
                            <FormLabel>Email ID</FormLabel>
                            <Input type="text" placeholder="Email ID" value={email} onChange={(event)=>{setEmail(event.target.value)}} />
                        </FormControl>
                        <Button colorScheme="teal" variant="outline" width="full" mt={4} onClick={()=>{onSubmit(id,email)}}>
                                Get Password
                        </Button>
                        <Button mt={4} colorScheme="teal" variant="link">
                        <Link href="/">
                            Lost your Way? Click here
                        </Link>
                    </Button>                       
                    </form>
                </Box>
=======
            <Flex width="full" align="center" justify="left">
                <Box p={8} borderWidth={1} borderRadius={8}>
                    <Box textAlign="center">
                        <Heading>
                            Forgot Password
                        </Heading>
                    </Box>
                    <Box my={4} textAlign="left">
                        <form>
                            <FormControl mt={6}>
                                <FormLabel>Roll Number</FormLabel>
                                <Input type="text" value={id} onChange={(event) => { setID(event.target.value) }} placeholder="Roll Number" />
                            </FormControl>
                            <FormControl mt={6}>
                                <FormLabel>Email ID</FormLabel>
                                <Input type="text" placeholder="Email ID" value={email} onChange={(event) => { setEmail(event.target.value) }} />
                            </FormControl>
                            <Button colorScheme="teal" variant="outline" width="full" mt={4} onClick={() => { onSubmit(id, email) }}>
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
>>>>>>> cd39e2e71372aee59dddfcd929efc4afbb4c7b03
                </Box>
            </Flex>
            <Box boxSize="sm" mt={10}>
                <Image src={forgotPassword} />
            </Box>
        </Grid>
    );
}

