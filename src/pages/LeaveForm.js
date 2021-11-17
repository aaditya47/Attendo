import React, { useState,useEffect } from 'react';
import axios from 'axios';
import {
    Flex,
    Box,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Button,
    HStack,
    Checkbox,
    VStack,
    useToast,
    Select
} from '@chakra-ui/react';

// todo: work on file input button
import { SingleDatepicker } from 'chakra-dayzed-datepicker';
import NavStudent from '../components/NavStudent'
import Profile from '../components/Profile';
import {PastLeavesURI,TeacherDetailsURI} from '../api/urls'

export default function LeaveForm() {
<<<<<<< HEAD
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [isDoc, setIsDoc] = useState(false)
    const [reason,setReason] = useState('')
    const [certLink ,setcertLink] = useState('');
     const[teachers,setTeachers]=useState(null);
    const [filterTeacher, setFilterTeacher] = useState(null)
    const toast= useToast()
=======
    const toast = useToast()
>>>>>>> cd39e2e71372aee59dddfcd929efc4afbb4c7b03
    const checkCurrDate = (dosFunc, doeFunc, aliasFunc) => {
        var today = new Date().setHours(0, 0, 0, 0);
        var newDos = new Date(dosFunc).setHours(0, 0, 0, 0);
        var newDoe = new Date(doeFunc).setHours(0, 0, 0, 0);
        console.log(aliasFunc, today, newDoe, newDos)
        if (aliasFunc && ((today < newDos && today > newDoe) || (today > newDoe && today < newDos))) {
            return false
        }
        else if (!aliasFunc && newDos < today) {
            return false
        }
        else if (newDos > newDoe) {
            return false
        }
        return true
    }
<<<<<<< HEAD
    useEffect(() => { getTeacherList() },[]);
    const getTeacherList = () => {
        axios.get(TeacherDetailsURI).then(res => {
            if (res.status===200) { 
                console.log(res);
                setTeachers(res.data) }
            else {
                setTeachers([{ TeacherId: "Choose" }])
            }
        }).catch(error => {
            toast({
                status: 'error',
                title: 'Error in Fetching teacher details',
            })
        })
    }
    const onSubmit=(dos,doe,haveAlias,reason,certLink,filterTeacher)=>{
        if(dos && doe && reason!=='' && filterTeacher!=="Choose"){
=======
    const onSubmit = (dos, doe, haveAlias, reason) => {
        if (dos && doe && reason !== '') {
>>>>>>> cd39e2e71372aee59dddfcd929efc4afbb4c7b03
            let res = checkCurrDate(dos, doe, haveAlias)
            if (res === false) {
                toast({
                    position: 'top',
                    title: "Form Error",
                    description: "Please re-check the dates",
                    status: "error",
                    duration: 9000,
                    isClosable: true,
                })
            }
            axios.post(PastLeavesURI,{ 
            StudentId:localStorage.getItem('suserid'),
            TeacherId:filterTeacher.split(",")[0],
            DOS:dos,
            DOE:doe,
            Reason:reason,
            Approval:"Pending",
            CertLink:certLink}).then(res => {;
                if ((res.status)===200) {
                    if(res.data!=='Already Present Leave Form'){
                        toast({
                            title: 'Leave Applied Successfully',
                            status: 'success',
                            duration: 9000,
                            isClosable: true
                        })
                    }
                    else{
                        toast({
                            title: 'Leave Request Already Present',
                            status: 'warning',
                            duration: 9000,
                            isClosable: true
                        })
                    }
                           
                }
            }
        ).catch(err => {
            toast({
                title: 'Login Error',
                description: 'Error applying for leave please check your details again',
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
                title: "Form Error",
                description: "Enter the complete details",
                status: "error",
                duration: 9000,
                isClosable: true,
            })
        }
    }
<<<<<<< HEAD
=======
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [isDoc, setIsDoc] = useState(false)
    const [reason, setReason] = useState('')
>>>>>>> cd39e2e71372aee59dddfcd929efc4afbb4c7b03
    return (
        <VStack spacing={5}>
            <Box style={{ position: "absolute", top: 5, left: 5 }}>
                <Profile Name={'Samyukth'} RollNo={'CB.EN.U4CSE18451'} student={true} dept={'CSE'} section={'E'} />
            </Box>
            <Box align="center">
                <NavStudent />
            </Box>
            <Flex width="full" align="center" justify="center">
                <Box p={8} textAlign="center">
                    <Box textAlign="center">
                        <Heading>
                            Apply for leave
                        </Heading>
                    </Box>
                    <Box my={4} textAlign="left">
                        <form>
                            <HStack>
                                <FormControl>
                                    <FormLabel>Start date</FormLabel>
                                    <SingleDatepicker name="date-input" date={startDate} onDateChange={setStartDate} />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>End date</FormLabel>
                                    <SingleDatepicker name="date-input" date={endDate} onDateChange={setEndDate} />
                                </FormControl>
                            </HStack>
                            <FormControl mt={6}>
                            <Select variant="filled" value={filterTeacher} width="full"
                                    onChange={(event) => { setFilterTeacher(event.target.value) }} placeholder="Select option">
                                    { teachers? teachers.map((item) => {
                                        return (<option>{item.TeacherId},{item.Name}</option>)
                                    }):null}
                                </Select>
                            </FormControl>
                            <FormControl mt={6}>
                                <FormLabel>Reason of leave</FormLabel>
                                <Input type="text" value={reason} onChange={(event) => { setReason(event.target.value) }} placeholder="State the reason of leave" />
                            </FormControl>
                            <FormControl mt={6}>
                                <Checkbox value={isDoc} onChange={() => setIsDoc(!isDoc)}>Supporting Document?</Checkbox>
                            </FormControl>
                            {isDoc ? <FormControl mt={6}>
                                <Input placeholder="Shareable google doc" value={certLink} onChange={(event) => setcertLink(event.target.value)}/>
                            </FormControl> : null}
<<<<<<< HEAD
                            <Button colorScheme="teal" variant="outline" width="full" mt={4} onClick={()=>onSubmit(startDate,endDate,isDoc,reason,certLink,filterTeacher)}>
=======
                            <Button colorScheme="teal" variant="outline" width="full" mt={4} onClick={() => onSubmit(startDate, endDate, isDoc, reason)}>
>>>>>>> cd39e2e71372aee59dddfcd929efc4afbb4c7b03
                                Submit Form
                            </Button>
                        </form>
                    </Box>
                </Box>
            </Flex>
        </VStack>
    );
}