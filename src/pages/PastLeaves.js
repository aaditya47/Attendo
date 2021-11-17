import React,{useState,useEffect} from "react";
import axios from 'axios';
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
    useToast,
} from "@chakra-ui/react";

import {
    DeleteIcon
} from "@chakra-ui/icons";

import Profile from "../components/Profile";
import NavStudent from "../components/NavStudent";
import { PastLeavesURI } from "../api/urls";

// Todo: Handle delete button

export default function PastLeaves() {
    const [leave_data,setLeavedata]=useState(null);
    const toast= useToast();
    useEffect(() => {
        getLeaveData();
    }, [])

    const getLeaveData = () => {
        axios.get(PastLeavesURI+'/'+localStorage.getItem('suserid')).then(res => {
            if (res.status===200) { 
                console.log(res);
                setLeavedata(res.data) }
        }).catch(error => {
            toast({
                status: 'error',
                title: 'Error in Fetching Leave details',
            })
        })
    }
    
    return (
        <VStack spacing="50px">
            <Box style={{ position: "absolute", top: 5, left: 5 }}>
                <Profile Name={'Samyukth'} RollNo={localStorage.getItem('suserid')} student={true} dept={'CSE'} section={'E'} />
            </Box>
            <Box align="center">
                <NavStudent/>
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
                                    <Th>Start Date</Th>
                                    <Th>End Date</Th>
                                    <Th>Leave Type</Th>
                                    <Th>Status</Th>
                                </Tr>
                            </Thead>
                            { // map json objects array in leave data to table
                                leave_data?
                                leave_data.map((data) => {
                                    return (
                                        <Tbody>
                                            <Tr>
                                                <Td>{data.DOS}</Td>
                                                <Td>{(data.DOE)}</Td>
                                                <Td>{data.Reason}</Td>
                                                <Td>{data.Approval}</Td>
                                                <Td><IconButton icon={<DeleteIcon />} /></Td>
                                            </Tr>
                                        </Tbody>
                                    )
                                }):null
                            }
                        </Table>
                    </Box>
                </Box>
            </Flex>
        </VStack>
    );
}