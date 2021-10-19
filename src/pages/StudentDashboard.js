import { React, useState } from "react";
import {
    VStack,
    HStack,
    Box,
    Heading,
    Select,
    Checkbox,
    Text,
    Grid
} from "@chakra-ui/react";
import AttendanceDisplay from "../components/AttendanceDisplay";
import NavStudent from '../components/NavStudent'
import Profile from "../components/Profile";

export default function StudentDashboard() {
    const [filter, setFilter] = useState('1')
    const [subjectWise, setSubjectWise] = useState(false)
    var attendance = [
        {
            sem: "1",
            subject: "Computer Essentials",
            attendance: "80"
        },
        {
            sem: "2",
            subject: "C programming",
            attendance: "75"
        },
        {
            sem: "3",
            subject: "Data Structures",
            attendance: "82"
        },
        {
            sem: "4",
            subject: "Design and Analysis of Algorithms",
            attendance: "90"
        },
        {
            sem: "5",
            subject: "Database Mangement",
            attendance: "79"
        },
        {
            sem: "6",
            subject: "Computer Networks",
            attendance: "84"
        },
        {
            sem: "7",
            subject: "Net Centric Programming",
            attendance: "80"
        },
        {
            sem: "8",
            subject: "Big Data Analytics",
            attendance: "80"
        },
    ]
    return (
        <Box>
            <VStack spacing={4}>
                <Box style={{ position: "absolute", top: 5, left: 5 }}>
                    <Profile Name={'Samyukth'} RollNo={'CB.EN.U4CSE18451'} student={true} dept={'CSE'} section={'E'} />
                </Box>
                <Box align="center">
                    <NavStudent />
                </Box>
                <Box p={8} textAlign="left">
                    <Heading alignItems="left">
                        Dashboard
                    </Heading>
                </Box>
                <HStack>
                    <Text color="gray.500">
                        Semester Wise Attendance ?
                    </Text>
                    <Checkbox id="attendanceSummary" value={subjectWise} onChange={() => { setSubjectWise(!subjectWise) }} />
                    {subjectWise ? <Select variant="filled" value={filter}
                        onChange={(event) => { setFilter(event.target.value) }} placeholder="Select option">
                        <option value="1">Semester 1</option>
                        <option value="2" >Semester 2</option>
                        <option value="3">Semester 3</option>
                        <option value="4">Semester 4</option>
                        <option value="5">Semester 5</option>
                        <option value="6">Semester 6</option>
                        <option value="7">Semester 7</option>
                        <option value="8">Semester 8</option>
                    </Select> : null}
                </HStack>
                <Box>
                    <Grid templateColumns="repeat(4, 1fr)" gap={6}>
                        {subjectWise ?
                            attendance.filter((el) => { return filter === el.sem }).map((item) => (
                                <Box>
                                    <AttendanceDisplay semester={item.sem} subject={item.subject} attendance={item.attendance} />
                                </Box>
                            )) :
                            attendance.map((item) => (
                                <Box>
                                    <AttendanceDisplay semester={item.sem} subject={item.subject} attendance={item.attendance} />
                                </Box>

                            ))
                        }
                    </Grid>
                </Box>
            </VStack>
        </Box>
    );
}