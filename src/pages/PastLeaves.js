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
    let leavedata=[
        {
            date:"2020-03-03",
            leavetype:"Medical Leave",
            status:"Class Advisor Approved"
        },
        {
            date:"2020-04-04",
            leavetype:"On Duty Leave",
            status:"Chairperson Approved"
        },
        {
            date:"2020-05-03",
            leavetype:"Ordinary Leave",
            status:"Class Advisor Approved"
        },
        {
            date:"2020-07-06",
            leavetype:"On Duty Leave",
            status:"Class Advisor Rejected"
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
                    {
                        // map json objects array in leave data to table
                        leavedata.map((data,index)=>{
                            return(
                                <Table>
                                    <Thead>
                                        <Tr>
                                            <Th>Date</Th>
                                            <Th>Leave Type</Th>
                                            <Th>Status</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        <Tr>
                                            <Td>{data.date}</Td>
                                            <Td>{data.leavetype}</Td>
                                            <Td>{data.status}</Td>
                                        </Tr>
                                    </Tbody>
                                </Table>
                            )
                        })
                    }
                </Box>
            </Box>
        </Flex>
    );
}