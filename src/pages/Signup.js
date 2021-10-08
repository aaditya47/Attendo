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
    Switch,
    HStack,
    Grid,
    Image
} from '@chakra-ui/react';

import signUp from '../assets/signUp.svg'

const checkEmail=(email)=>{
    var regexp = /\S+@\S+\.\S+/;
    return regexp.test(String(email).toLowerCase());
}

export default function Signup() {
    const onSubmit=(stud,id,email,mobile,password)=>{
        if(id && email && mobile && password){
            let res = checkEmail(email)
            if(res===false){
                alert("Enter a valid email ID");
            }
            if(mobile.toString().length!==10){
                alert("Enter a valid Mobile Number");
            }
            if(password.length<8){
                alert("Please enter a password with atleast 8 characters")
            }
        }
    else{
        alert("Please enter the details");
    }}

    const [id,setID] = useState('');
    const [password,setPassword] = useState('');
    const [email,setEmail] = useState('');
    const [mobile,setMobile] = useState(0);
    const [stud,setStud] =useState(false);
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
                                <Switch id="student-or-teacher" value={stud} onChange={()=>{setStud(!stud)}}/>
                            </HStack>
                        </FormControl>
                        <FormControl  mt={4}>
                            <FormLabel>Roll Number</FormLabel>
                            <Input type="text" placeholder="Roll Number" value={id} onChange={(event)=>{setID(event.target.value)}} />
                        </FormControl>
                        <FormControl  mt={4}>
                            <FormLabel>Email ID</FormLabel>
                            <Input type="text" placeholder="Email ID" value={email} onChange={(event)=>{setEmail(event.target.value)}} />
                        </FormControl>
                        <FormControl  mt={4}>
                            <FormLabel>Mobile Number</FormLabel>
                            <Input type="text" placeholder="Mobile Number" value={mobile} onChange={(event)=>{setMobile(event.target.value)}} />
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Password</FormLabel>
                            <Input type="password" placeholder="Password" value={password} onChange={(event)=>{setPassword(event.target.value)}} />
                        </FormControl>
                        <Button type="submit" colorScheme="teal" variant="outline" width="full" mt={4} onClick={()=>onSubmit(stud,id,email,mobile,password)}>
                            <Link href="#">
                                Sign Up
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
            <Box boxSize="md" style={{ paddingTop: "35%" }}>
                <Image src={signUp} />
            </Box>
        </Grid>
    );
}

