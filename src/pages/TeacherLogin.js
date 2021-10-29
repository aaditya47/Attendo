import {React,useState} from 'react';
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
    HStack
} from '@chakra-ui/react';

import teacherLogin from '../assets/teacherLogin.svg'

export default function TeacherLogin() {
    const toast = useToast()
    const onSubmit=(ID,password)=>{
        if(ID && password){
            //pass
            setAllow(true);
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

    const [facultyId,setID] = useState('');
    const [password,setPassword] = useState('');
    const  [allow , setAllow] =useState(false)

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
                        <FormControl mt={6}>
                            <FormLabel>Password</FormLabel>
                            <Input type="password" value={password} onChange={(event)=> setPassword(event.target.value)} placeholder="Password" />
                        </FormControl>
                        <Button colorScheme="teal" variant="outline" width="full" mt={4} onClick={()=>{onSubmit(facultyId,password)}}>
                            <Link href={allow?"/teachertimetable":'#'}>
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
                <Image src={teacherLogin} alt="Segun Adebayo" />
            </Box>
        </Grid>
    );
}