import {React,useState} from 'react';
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
    VStack,
    HStack,
    InputGroup,
    InputRightElement
} from '@chakra-ui/react';

import {TeacherLoginURI} from '../api/urls'
import teacherLogin from '../assets/teacherLogin.svg'

export default function TeacherLogin() {
    const toast = useToast()
    const history = useHistory()
    const onSubmit=(ID,password)=>{
        if (ID && password) {
            axios.post(TeacherLoginURI,{TeacherId: ID, Password: password}).then(res => {;
                    if ((res.status)===200) {
                        localStorage.setItem('tuserid',res.data.TeacherId);
                        localStorage.setItem('name',res.data.Name);
                        localStorage.setItem('desig',res.data.Desg);
                        localStorage.setItem('email',res.data.Email);
                        history.push('/teachertimetable');
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
    else{
        toast({
            position: 'top',
            title: "Login Error",
            description: "Please enter the complete credentials",
            status: "error",
            duration: 9000,
            isClosable: true,
          })
        //alert("Please enter the credentials");

    }}
    const handleClick = () => setShow(!show)
    const [show, setShow] = useState(false)
    const [facultyId,setID] = useState('');
    const [password,setPassword] = useState('');

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
                        <FormControl>
                            <FormLabel>Faculty ID</FormLabel>
                            <Input type="text"  value={facultyId} onChange={(event)=> setID(event.target.value)} placeholder="Faculty ID" />
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Password</FormLabel>
                            <InputGroup>
                                <Input type={show ? "text" : "password"} placeholder="Password" value={password} onChange={(event) => {setPassword(event.target.value) }} />
                            <InputRightElement width="4.5rem">
                                <Button h="1.75rem" size="sm" onClick={handleClick}>
                                {show ? "Hide" : "Show"}
                                </Button>
                            </InputRightElement>
                            </InputGroup>
                        </FormControl>
                        <Button colorScheme="teal" variant="outline" width="full" mt={4} onClick={()=>{onSubmit(facultyId,password)}}>
                                Sign In
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
                <Image src={teacherLogin} alt="Segun Adebayo" />
            </Box>
        </Grid>
    );
}