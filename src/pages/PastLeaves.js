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
    IconButton
} from "@chakra-ui/react";

import {
    DeleteIcon
} from "@chakra-ui/icons";

// Todo: Handle delete button

export default function PastLeaves() {
    let leavedata = [
        {
            date: "2020-03-03",
            daysLeave: 2,
            leavetype: "Medical Leave",
            status: "Class Advisor Approved"
        },
        {
            date: "2020-04-04",
            daysLeave: 3,
            leavetype: "On Duty Leave",
            status: "Chairperson Approved"
        },
        {
            date: "2020-05-03",
            daysLeave: 1,
            leavetype: "Ordinary Leave",
            status: "Class Advisor Approved"
        },
        {
            date: "2020-07-06",
            daysLeave: 4,
            leavetype: "On Duty Leave",
            status: "Class Advisor Rejected"
        }
    ];
    return (
        <VStack spacing="50px">
            <Box style={{ position: "absolute", top: 5, left: 5 }}>
                <Profile Name={'Samyukth'} RollNo={'CB.EN.U4CSE18451'} student={true} dept={'CSE'} section={'E'} />
            </Box>
            <Box align="center">
                <NavStudent />
            </Box>
            <Flex width="full" align="center" justify="center">
                <Box p={8}>
                    <Box textAlign="center">
                        <Heading>
                            Here are your past leaves
                        </Heading>
                    </Box>
                    <Box my={4} textAlign="left">
                        <Table>
                            <Thead>
                                <Tr>
                                    <Th>Date</Th>
                                    <Th>No Of Days</Th>
                                    <Th>Leave Type</Th>
                                    <Th>Status</Th>
                                </Tr>
                            </Thead>
                            { // map json objects array in leave data to table
                                leavedata.map((data, index) => {
                                    return (
                                        <Tbody>
                                            <Tr>
                                                <Td>{data.date}</Td>
                                                <Td>{data.daysLeave}</Td>
                                                <Td>{data.leavetype}</Td>
                                                <Td>{data.status}</Td>
                                                <Td><IconButton icon={<DeleteIcon />} /></Td>
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