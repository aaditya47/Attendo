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
    const [filterSubject,setFilterSubject]=useState(null)
    const [submit,setSubmit]=useState(false);
    const subjects=[
        {
            Year:"1",
            subject:['Fundamentals on computer Science']
        },
        {
            Year:"2",
            subject:['Datastructures and Algorithm']
        },
        {
            Year:"3",
            subject:['Networking']
        },
        {
            Year:"4",
            subject:['Big Data Analytics']        
        }
    ]
    const subjectStud=['Amit','Ravi','Hari','Aaditya']
    return (
                                    <VStack spacing={4}>
                                                  <Box style={{position:"absolute", top:5,left:5}}>
                                                    <Profile Name={'Shanmuga Priya'} RollNo={'CB.EN.TECSE17451'} student={false} Email={"ss_priya@cb.amrita.edu"} designation={'Assistant Professor, Computer Science Engineering, School of Engineering, Coimbatore'}/>
                                                    </Box>
                                            <Box align="center">
                                                <NavTeacher/>
                                            </Box>
                                    <Box>
                                            <Box textAlign="center" mb={5}>
                                                <Heading>
                                                    Update your Attendance Here!
                                                </Heading>
                                            </Box>
                                    <HStack spacing={4} mb={5}>
                                            <Text>Choose Year</Text>
                                            <Select variant="filled" value={filter} 
                                                    onChange={(event) => { setFilter(event.target.value)
                                                    setSubmit(false)
                                                    setFilterSubject(null)
                                                    }} placeholder="Select option">
                                                    <option value="1">1st Year</option>
                                                    <option value="2" >2nd Year</option>
                                                    <option value="3">3rd Year</option>
                                                    <option value="4">4th Year</option>
                                            </Select>
                                            <Button type="submit" onClick={()=>setSubmit(true)}colorScheme="teal" variant="outline">
                                                Proceed
                                            </Button>
                                    {
                                        filter&&submit? 
                                                <HStack spacing={4}>
                                        <Select variant="filled" value={filterSubject} width="full"
                                                    onChange={(event) => { setFilterSubject(event.target.value) }} placeholder="Select option">
                                                    {subjects.filter((el) => { return filter === el.Year }).map((item)=>{
                                                        return(<option>{item.subject}</option>)
                                                    })}
                                                </Select>
                                                <SingleDatepicker name="date-input" date={startDate} width="full" onDateChange={setStartDate} />
                                                </HStack>
                                                :null
                                    }
                                    </HStack>
                            </Box>
                            {filterSubject?
                                    <Table variant="striped" colorScheme="teal" mb={5}>
                                    <Thead>
                                        <Tr>
                                            <Th>Name</Th>
                                            <Th>Attended?</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                    {subjectStud.map((item) => {
                                            return (
                                                <Tr>
                                                    <Td>{item}</Td>
                                                    <Td><Checkbox colorScheme="green"/></Td>
                                                </Tr>
                                            )
                                    })}
                                    </Tbody>
                                </Table>
                            :null}
                            {filterSubject?
                                <Button type="submit" colorScheme="teal" variant="outline" >
                                                    Submit
                                </Button>:null
                            }
                            </VStack>
    );
}
/* setFilter(event.target.value) */