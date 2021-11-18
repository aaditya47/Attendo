/* eslint-disable react-hooks/exhaustive-deps */
import React ,{useEffect,useState}from 'react';
import axios from 'axios';
import {
    Heading,
    Box,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    VStack,
    useToast
} from "@chakra-ui/react"
import NavTeacher from '../components/NavTeacher';
import Profile from '../components/Profile';
import { TeacherTimeTableURI } from '../api/urls';

export default function TeacherTimeTable() {
    const toast = useToast();
    useEffect(() => {getTimetable()},[])

    const getTimetable=()=>{
        axios.get(TeacherTimeTableURI+'/'+localStorage.getItem('tuserid')).then(res => {;
            if ((res.status)===200) {
                setTimetable(res.data);
            }
        }
    ).catch(err => {
        toast({
            title: 'Error',
            description: 'Unable to Fetch TimeTable',
            status: 'error',
            duration: 9000,
            isClosable: true
        })
    }
    )
    }
    const attributes = ["Day", "8:50-9:40", "9:50-10:40", "11:00-11:50", "12:00-12:50", "2:00-3:50"]
    const [Timetable , setTimetable]=useState(null);
    return (
        <VStack spacing="50px">
            <Box style={{ position: "absolute", top: 5, left: 5 }}>
            <Profile Name={localStorage.getItem('name')} RollNo={localStorage.getItem('tuserid')} student={false} Email={localStorage.getItem('email')} designation={localStorage.getItem('desig')+' Computer Science Engineering, School of Engineering, Coimbatore'} />
            </Box>
            <Box align="center">
                <NavTeacher />
            </Box>
            <Heading mb={5}>
                Here's your time table
            </Heading>
            <Table variant="striped" colorScheme="facebook">
                <Thead>
                    <Tr>
                        {attributes.map((item) => {
                            return (<Th>{item}</Th>)
                        })}
                    </Tr>
                </Thead>
                <Tbody>
                    {Timetable?Timetable.map((item) => {
                        return (
                            <Tr>
                                <Td>{item.Day}</Td>
                                {item.Class.map((w) => {
                                    return (
                                        <Td>{w}</Td>
                                    )
                                })}
                            </Tr>
                        )
                    }):null}
                </Tbody>
            </Table>
        </VStack>

    );
}