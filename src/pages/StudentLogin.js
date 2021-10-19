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
    useToast
} from '@chakra-ui/react';
import studentLogin from '../assets/studentLogin.svg'


export default function StudentLogin() {
    const toast = useToast()
    const onSubmit=(RollNo,password)=>{
        if(RollNo && password){
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

    const [RollNo,setRollNo] = useState('');
    const [password,setPassword] = useState('');
    const  [allow , setAllow] =useState(false)

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
                            <Input type="text" value={RollNo} onChange={(event)=> setRollNo(event.target.value)} placeholder="Roll Number" />
                        </FormControl>
                        <FormControl mt={6}>
                            <FormLabel>Password</FormLabel>
                            <Input type="password"  value={password} onChange={(event)=> setPassword(event.target.value)} placeholder="Password" />
                        </FormControl>
                        <Button colorScheme="teal" variant="outline" width="full" mt={4}  onClick={()=>onSubmit(RollNo,password)}>
                            <Link href={allow?'/leaveform':'#'}>
                                Sign In
                            </Link>
                        </Button>
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