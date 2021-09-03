import React, { useState } from 'react';
import {
    Box,
    Button,
    HStack,
    Select,
    Text,
    VStack,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Checkbox,
    Heading
} from '@chakra-ui/react';
import { SingleDatepicker } from 'chakra-dayzed-datepicker';
import NavTeacher from '../components/NavTeacher';
import Profile from '../components/Profile';
export default function AttendanceUpdate() {
    const [startDate, setStartDate] = useState(new Date());
    const [filter, setFilter] = useState(null)
    const [filterSubject, setFilterSubject] = useState(null)
    const [submit, setSubmit] = useState(false);
    const subjects = [
        {
            Year: "1",
            subject: ['Fundamentals on computer Science']
        },
        {
            Year: "2",
            subject: ['Datastructures and Algorithm']
        },
        {
            Year: "3",
            subject: ['Networking']
        },
        {
            Year: "4",
            subject: ['Big Data Analytics']
        }
    ]
    const subjectStud = [
        {
            Name: 'Amit',
            Roll: 'CB.EN.U4CSE18451'
        },
        {
            Name: 'Ravi',
            Roll: 'CB.EN.U5CSE18402'
        },
        {
            Name: 'Hari',
            Roll: 'CB.EN.U4CSE18471'
        },
        {
            Name: 'Aaditya',
            Roll: 'CB.EN.U4CSE18434'
        }
    ]
    return (
        <VStack>
            <Box>
                <Box style={{ position: "absolute", top: 5, left: 5 }}>
                    <Profile Name={'Shanmuga Priya'} RollNo={'CB.EN.TECSE17451'} student={false} Email={"ss_priya@cb.amrita.edu"} designation={'Assistant Professor, Computer Science Engineering, School of Engineering, Coimbatore'} />
                </Box>
                <Box align="center">
                    <NavTeacher />
                </Box>
                <Box textAlign="center" my={5}>
                    <Heading>
                        Update attendance here!
                    </Heading>
                </Box>
                <HStack spacing="50px" mb={5}>
                    <Text>Choose Year</Text>
                    <Select variant="filled" value={filter}
                        onChange={(event) => {
                            setFilter(event.target.value)
                            setSubmit(false)
                            setFilterSubject(null)
                        }} placeholder="Select option">
                        <option value="1">1st Year</option>
                        <option value="2" >2nd Year</option>
                        <option value="3">3rd Year</option>
                        <option value="4">4th Year</option>
                    </Select>
                    <Button type="submit" onClick={() => setSubmit(true)} colorScheme="teal" variant="outline" width="30%">
                        Proceed
                    </Button>
                    {
                        filter && submit ?
                            <HStack spacing="50px">
                                <Select variant="filled" value={filterSubject} width="full"
                                    onChange={(event) => { setFilterSubject(event.target.value) }} placeholder="Select option">
                                    {subjects.filter((el) => { return filter === el.Year }).map((item) => {
                                        return (<option>{item.subject}</option>)
                                    })}
                                </Select>
                                <SingleDatepicker name="date-input" date={startDate} width="full" onDateChange={setStartDate} />
                            </HStack>
                            : null
                    }
                </HStack>
            </Box>
            {filterSubject ?
                <Table variant="striped" colorScheme="teal" mb={5}>
                    <Thead>
                        <Tr>
                            <Th>Roll No</Th>
                            <Th>Name</Th>
                            <Th>Attended?</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {subjectStud.map((item) => {
                            return (
                                <Tr>
                                    <Td>{item.Roll}</Td>
                                    <Td>{item.Name}</Td>
                                    <Td><Checkbox colorScheme="green" defaultIsChecked /></Td>
                                </Tr>
                            )
                        })}
                    </Tbody>
                </Table>
                : null}
            {filterSubject ?
                <Button type="submit" colorScheme="teal" variant="outline" >
                    Submit
                </Button> : null
            }
        </VStack>
    );
}
/* setFilter(event.target.value) */