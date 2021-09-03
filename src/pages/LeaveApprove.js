import React from "react";
import {
    Flex,
    Box,
    Heading,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    IconButton,
    VStack,
    Alert,
    AlertIcon,
} from "@chakra-ui/react";

import {
    CheckIcon,
    CloseIcon
} from "@chakra-ui/icons";

import Profile from "../components/Profile";
import NavTeacher from "../components/NavTeacher";

// Todo: Handle delete button

export default function LeaveApprove() {
    let leavedata = [
        {
            studentname: "Samyukth",
            studentrollnumber: "CB.EN.U4CSE18451",
            daysLeave: 2,
            date: "2020-07-06",
            leavetype: "Medical Leave"
        },
        {
            studentname: "Swaran",
            studentrollnumber: "CB.EN.U4CSE18461",
            daysLeave: 2,
            date: "2020-07-06",
            leavetype: "Medical Leave"
        },
        {
            studentname: "Shri Hari Nithin",
            studentrollnumber: "CB.EN.U4CSE18455",
            date: "2020-07-06",
            daysLeave: 2,
            leavetype: "Medical Leave"
        },
        {
            studentname: "Samyukth",
            studentrollnumber: "CB.EN.U4CSE18451",
            date: "2020-08-06",
            daysLeave: 2,
            leavetype: "On Duty Leave"
        }
    ];
    return (
        <VStack spacing="50px">
            <Box style={{ position: "absolute", top: 5, left: 5 }}>
                <Profile Name={'Shanmuga Priya'} RollNo={'CB.EN.TECSE17451'} student={false} Email={"ss_priya@cb.amrita.edu"} designation={'Assistant Professor, Computer Science Engineering, School of Engineering, Coimbatore'} />
            </Box>
            <Box align="center">
                <NavTeacher />
            </Box>
            <Flex width="full" align="center" justify="center">
                <Box p={8}>
                    <Box textAlign="center">
                        <Heading>
                            Here are the details of leave applications by your students.
                        </Heading>
                    </Box>
                    <Box textAlign="center" mt={4}>
                        <Alert status="info">
                            <AlertIcon />
                            Click on the check icon to approve the leave. Alternatively, click on the close icon to reject the leave.
                        </Alert>
                    </Box>
                    <Box my={4} textAlign="left">
                        <Table>
                            <Thead>
                                <Tr>
                                    <Th>Student Name</Th>
                                    <Th>Student Roll Number</Th>
                                    <Th>Date</Th>
                                    <Th>Days of Leave</Th>
                                    <Th>Leave Type</Th>
                                </Tr>
                            </Thead>
                            { // map json objects array in leave data to table
                                leavedata.map((data, index) => {
                                    return (
                                        <Tbody>
                                            <Tr>
                                                <Td>{data.studentname}</Td>
                                                <Td>{data.studentrollnumber}</Td>
                                                <Td>{data.date}</Td>
                                                <Td>{data.daysLeave}</Td>
                                                <Td>{data.leavetype}</Td>
                                                <Td><IconButton icon={<CheckIcon />} color="green.500" /></Td>
                                                <Td><IconButton icon={<CloseIcon />} color="red.500" /></Td>
                                            </Tr>
                                        </Tbody>
                                    )
                                })
                            }
                        </Table>
                    </Box>
                </Box>
            </Flex>
        </VStack>
    );
}