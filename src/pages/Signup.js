import { React, useState } from 'react';
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
    Checkbox,
    HStack,
    Grid,
    Image,
    useToast,
    Alert,
    InputGroup,
    InputRightElement,
    Select
} from '@chakra-ui/react';

import signUp from '../assets/signUp.svg'
import PasswordStrengthIndicator from "../components/PasswordStrengthIndicator";
import { TeacherDetailsURI,StudentDetailsURI } from "../api/urls";

const checkNumber = (number) => {
    const validator = /[2-9]{2}\d{8}/;
    const character = /[a-z]+/
    const spl=/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/;
    return validator.test(String(number)) && !character.test(String(number)) && !spl.test(String(number));
}

const checkEmail = (email) => {
    var regexp = /\S+@\S+\.\S+/;
    return regexp.test(String(email).toLowerCase());
}

const checkId=(id,stud)=>{
    if(stud===true){
        var regexpStud = /['S']/;
        return regexpStud.test(String(id));
    }
    else{
        var regexpTeach = /['T']+[0-9]+[0-9]+[0-9]/;
        return regexpTeach.test(String(id));
    }
}



export default function Signup() {
    const toast = useToast()
    const onSubmit = (stud, id,name,desig,email, mobile, password,validity) => {
        console.log(desig)
        if (id && email && mobile && password && name) {
            let idCheck = checkId(id,stud);
            if(idCheck===false){
                toast({
                    position: 'top',
                    title: "Signup Error",
                    description: "Enter a Valid Roll No",
                    status: "error",
                    duration: 9000,
                    isClosable: true,
                })
            }
            let res = checkEmail(email)
            if (res === false) {
                toast({
                    position: 'top',
                    title: "Signup Error",
                    description: "Enter a valid email ID",
                    status: "error",
                    duration: 9000,
                    isClosable: true,
                })
            }
            if (!checkNumber(mobile.toString()) || !(mobile.toString().length===10)) {
                toast({
                    position: 'top',
                    title: "Signup Error",
                    description: "Enter a valid mobile number",
                    status: "error",
                    duration: 9000,
                    isClosable: true,
                })
            }
            if(!validity.minChar || !validity.specialChar || !validity.number){
                toast({
                    position: 'top',
                    title: "Signup Error",
                    description: "Please Ensure Password Validity",
                    status: "error",
                    duration: 9000,
                    isClosable: true,
                })
            }
            if(stud===true){            
            axios.post(StudentDetailsURI,{    
            StudentId:id,
            Name:name,
            Phone:mobile,
            Email:email,
            Dept:"CSE",
            Cgpa:(Math.random() * (9.8-6) + 6).toFixed(2),
            Password:password}).then(res => {
                if (res.status===200) { 
                    toast({
                        status: 'success',
                        title: 'Sign Up Successful',
                    })
                    }
            }).catch(error => {
                toast({
                    status: 'error',
                    title: 'Error in Sign Up',
                })
            })}
            else{
                axios.post(TeacherDetailsURI,{
                    TeacherId:id,
                    Name:name,
                    Phone:mobile,
                    Email:email,
                    Dept:"CSE",
                    Desg:desig,
                    Password:password
                }).then(res => {
                    if (res.status===200) { 
                        toast({
                            status: 'success',
                            title: 'Sign Up Successful',
                        })
                    }
                }).catch(error => {
                    toast({
                        status: 'error',
                        title: 'Error in Sign Up',
                    })
                })
            }
        }
        else {
            //alert("Please enter the details");
            toast({
                position: 'top',
                title: "Signup Error",
                description: "Please enter the complete credentials",
                status: "error",
                duration: 9000,
                isClosable: true,
            })
        }
    }
    const handleClick = () => setShow(!show)
    const isNumberRegx = /\d/;
    const specialCharacterRegx=/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/;
    const [id, setID] = useState('');
    const [password, setPassword] = useState(null);
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState(0);
    const [stud, setStud] = useState(false);
    const [passwordFocused, setPasswordFocused] = useState(false);
    const [show, setShow] = useState(false)
    const[desig,setDesig]=useState('');
    const[name,setName]=useState('');
    const [passwordValidity, setPasswordValidity] = useState({
        minChar: null,
        number: null,
        specialChar: null
    });
    const onChangePassword = (password) => {
        setPassword(password);
        setPasswordValidity({
            minChar: password.length >= 8 ? true : false,
            number: isNumberRegx.test(password) ? true : false,
            specialChar: specialCharacterRegx.test(password) ? true : false
        });
    };


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
                                <HStack spacing={1}>
                                    <FormLabel mt={1}>Student?</FormLabel>
                                    <Checkbox id="student-or-teacher" value={stud} onChange={() => { setStud(!stud) }} />
                                </HStack>
                            </FormControl>
                            <FormControl mt={4}>
                                <FormLabel>Roll Number</FormLabel>
                                <Input type="text" placeholder="Roll Number" value={id} onChange={(event) => { setID(event.target.value) }} />
                            </FormControl>
                            <FormControl mt={4}>
                                <FormLabel>Name</FormLabel>
                                <Input type="text" placeholder="Name" value={name} onChange={(event) => { setName(event.target.value) }} />
                            </FormControl>
                            {!stud?
                                <FormControl mt={4}>
                                <FormLabel>Designation</FormLabel>
                                <Select variant="filled" value={desig} width="full"
                                    onChange={(event) => { setDesig(event.target.value)}} placeholder="Select option">
                                        <option value="Assistant Professor">Assistant Professor</option>
                                        <option value="Professor">Professor</option>
                                </Select>
                            </FormControl>
                            :null}
                            <FormControl mt={4}>
                                <FormLabel>Email ID</FormLabel>
                                <Input type="text" placeholder="Email ID" value={email} onChange={(event) => { setEmail(event.target.value) }} />
                            </FormControl>
                            <FormControl mt={4}>
                                <FormLabel>Mobile Number</FormLabel>
                                <Input type="text" placeholder="Mobile Number" value={mobile} onChange={(event) => { setMobile(event.target.value) }} />
                            </FormControl>
                            <FormControl mt={4}>
                            <FormLabel>Password</FormLabel>
                            <InputGroup>
                                <Input type={show ? "text" : "password"} placeholder="Password" value={password} onFocus={() => setPasswordFocused(true)} onChange={(event) => {onChangePassword(event.target.value) }} />
                            <InputRightElement width="4.5rem">
                                <Button h="1.75rem" size="sm" onClick={handleClick}>
                                {show ? "Hide" : "Show"}
                                </Button>
                            </InputRightElement>
                            </InputGroup>
                            </FormControl>
                                {passwordFocused && password && (
                                    <Alert mt={4} paddingLeft='12%'>
                                        <PasswordStrengthIndicator
                                            validity={passwordValidity}/>
                                    </Alert>
                                    )}
                            <Button type="submit" colorScheme="teal" variant="outline" width="full" mt={4} onClick={() => onSubmit(stud, id,name,desig,email, mobile, password,passwordValidity)}>
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

