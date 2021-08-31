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
    Td
} from "@chakra-ui/react";
// Todo: Fix the map function
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
                                        </Tr>
                                    </Tbody>
                                )
                            })
                        }
                    </Table>
                </Box>
            </Box>
        </Flex>
    );
}