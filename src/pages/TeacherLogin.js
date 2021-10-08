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
    Image
} from '@chakra-ui/react';

import teacherLogin from '../assets/teacherLogin.svg'

export default function TeacherLogin() {
    const onSubmit=(ID,password)=>{
        if(ID && password){
            //pass
            setAllow(true);

        }
    else{
        alert("Please enter the credentials");
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