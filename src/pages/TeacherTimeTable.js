import React from 'react';
import {
    Heading,
    Box,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td
} from "@chakra-ui/react"

export default function TeacherTimeTable() {
    const attributes = ["Day", "8:50-9:40", "9:50-10:40", "11:00-11:50", "12:00-12:50", "2:00-3:50"]
    const timetable = [
        {
            Day: "Monday",
            work: ["NCP-CSE-E-22", "Free", "Network-CSE-B-23", "Free", 'NCPLAB-CSE-E-22']
        },
        {
            Day: "Tuesday",
            work: ["NCP-CSE-E-22", "Free", "Network-CSE-B-23", "Free", 'NCPLAB-CSE-E-22']
        },
        {
            Day: "Wednesday",
            work: ["NCP-CSE-E-22", "Free", "Network-CSE-B-23", "Free", 'NCPLAB-CSE-E-22']
        },
        {
            Day: "Thursday",
            work: ["NCP-CSE-E-22", "Free", "Network-CSE-B-23", "Free", 'NCPLAB-CSE-E-22']
        },
        {
            Day: "Friday",
            work: ["NCP-CSE-E-22", "Free", "Network-CSE-B-23", "Free", 'NCPLAB-CSE-E-22']
        },

    ]
    return (
        <Box>
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
                    {timetable.map((item) => {
                        return (
                            <Tr>
                                <Td>{item.Day}</Td>
                                {item.work.map((w) => {
                                    return (
                                        <Td>{w}</Td>
                                    )
                                })}
                            </Tr>
                        )
                    })}
                </Tbody>
            </Table>
        </Box>

    );
}