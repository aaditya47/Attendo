/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState , useEffect} from 'react';
import axios from 'axios';
import {
    Box,
    Button,
    HStack,
    Select,
    VStack,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Checkbox,
    Heading,
    Grid,
    useToast,
    Input
} from '@chakra-ui/react';
import { SingleDatepicker } from 'chakra-dayzed-datepicker';
import NavTeacher from '../components/NavTeacher';
import Profile from '../components/Profile';
import { StudentDetailsURI, SubjectListURI, TeacherDetailsURI , AttendanceURI} from '../api/urls';
export default function AttendanceUpdate() {


    const onSubmit=(attendance,hours,selectedTeacher,startDate,selectedSubject)=>{
        if(attendance && hours && selectedTeacher && startDate && selectedSubject){
            var response=[]
            console.log(attendance);
            for (var i = 0; i < student.length; i++) {
                response.push({
                    StudentId:student[i].StudentId,
                    Subject:selectedSubject.split(',')[0],
                    Ddate:startDate,
                    TId:selectedTeacher.split(',')[1],
                    Attendedhours:attendance[student[i].StudentId],
                    Noofhours:hours
                    })
        }

        axios.post(AttendanceURI,response).then(res => {
            if (res.status===200) { 
                toast({
                    status: 'success',
                    title: 'Attendance Updated Successfully',
                    duration: 9000,
                    isClosable: true
                })
                }
        }).catch(error => {
            toast({
                status: 'error',
                title: 'Error in Updating Attendance',
                duration: 9000,
                isClosable: true
            })
        })

        }
    }

    const toast = useToast()
    useEffect(() => {
        getTeachersList();
        getSubjectList();
        setAttendance(getStudentList());
    }, [])

    const getTeachersList=()=>{
        axios.get(TeacherDetailsURI).then(res => {
            if (res.status===200) { 
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

    const getSubjectList=()=>{
        axios.get(SubjectListURI).then(res => {
            if (res.status===200) { 
                setSubject(res.data) }
            else {
                setSubject([{ Subject: "Choose" }])
            }
        }).catch(error => {
            toast({
                status: 'error',
                title: 'Error in Fetching Subject details',
                duration: 9000,
                isClosable: true
            })
        })
    }

    const attendanceUpdate=(student,val)=>{
        var dict={}
        for (var i = 0; i < student.length; i++) {
            dict[student[i].StudentId]=val
    }
        return dict
    }

    const getStudentList=()=>{
        var dict={}
        axios.get(StudentDetailsURI).then(res => {
            if (res.status===200) { 
                setStudent(res.data) 
                if(student){
                        dict=attendanceUpdate(student,0);
                }
                }
        })
        .catch(error => {
            toast({
                status: 'error',
                title: 'Error in Fetching Students details',
                duration: 9000,
                isClosable: true
            })
        })
        return dict;
    }

    const updateHours=(event,StudentId,hours)=>{
            if(event.target.checked===true){
                attendance[StudentId]=hours
            }
            else{
                attendance[StudentId]=0
            }
    }

    const AttendanceHours=(event,student)=>{
      setHours(event.target.value)
      setAttendance(attendanceUpdate(student,event.target.value))
    }

    const [startDate, setStartDate] = useState(new Date());
    const [selectedTeacher, setSelectedTeacher] = useState(null)
    const [hours, setHours] = useState(null);
    const [selectedSubject, setSelectedSubject] = useState(null);
    const[teacher,setTeachers] = useState(null);
    const[subject,setSubject] = useState(null);
    const [student,setStudent] = useState(null);
    const [attendance,setAttendance] = useState(null);
    return (
        <VStack>
            <Box>
                <Box style={{ position: "absolute", top: 5, left: 5 }}>
                    <Profile Name={localStorage.getItem('name')} RollNo={localStorage.getItem('tuserid')} student={false} Email={localStorage.getItem('email')} designation={localStorage.getItem('desig')+' Computer Science Engineering, School of Engineering, Coimbatore'} />
                </Box>
                <VStack spacing={5}>
                    <Box align="center">
                        <NavTeacher />
                    </Box>
                    <Box textAlign="center">
                        <Heading>
                            Update attendance here!
                        </Heading>
                    </Box>
                    <Grid templateColumns="repeat(1, 2fr)" p={3} m={5}>
                            <HStack spacing="50px">
                                <Select variant="filled" value={selectedTeacher} width="full"
                                        onChange={(event) => { setSelectedTeacher(event.target.value) }} placeholder="Select option">
                                        {teacher?teacher.map((item) => {
                                            return (<option>{item.Name},{item.TeacherId}</option>)
                                        }):null}
                                    </Select>
                                    <Select variant="filled" value={selectedSubject} width="full"
                                        onChange={(event) => { setSelectedSubject(event.target.value) }} placeholder="Select option">
                                        {subject?subject.map((item) => {
                                            return (<option>{item.SubjectId},{item.Subject}</option>)
                                        }):null}
                                    </Select>
                                    <SingleDatepicker name="date-input" date={startDate} width="full" onDateChange={setStartDate} />
                                    <Input placeholder="total class hours" value={hours} onChange={(event) => AttendanceHours(event,student)}/>
                            </HStack>
                    </Grid>
                </VStack>
            </Box>
            {student?
                <Table variant="striped" colorScheme="teal" mb={5}>
                    <Thead>
                        <Tr>
                            <Th>Roll No</Th>
                            <Th>Name</Th>
                            <Th>Attended?</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {student.map((item) => {
                            return (
                                <Tr>
                                    <Td>{item.StudentId}</Td>
                                    <Td>{item.Name}</Td>
                                    <Td><Checkbox colorScheme="green" defaultIsChecked onChange={(event)=>{updateHours(event,item.StudentId,hours)}}/></Td>
                                </Tr>
                            )
                        })}
                    </Tbody>
                </Table>
                : null}
            {student ?
                <Button type="submit" colorScheme="teal" variant="outline" onClick={()=>onSubmit(attendance,hours,selectedTeacher,startDate,selectedSubject)}>
                    Submit
                </Button> : null
            }
        </VStack>
    );
}