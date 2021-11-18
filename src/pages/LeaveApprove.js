/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState , useEffect} from 'react';
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
    Alert,
    AlertIcon,
    useToast,
    Link
} from "@chakra-ui/react";

import {
    CheckIcon,
    CloseIcon
} from "@chakra-ui/icons";

import Profile from "../components/Profile";
import NavTeacher from "../components/NavTeacher";
import { ApprovalURI, FilteredLeaveURI } from "../api/urls";

export default function LeaveApprove() {

    const [leave,setLeave] = useState(null);

    const toast  = useToast();
    useEffect(() => { getLeaveList()},[]);
    const getLeaveList = () => {
        axios.get(FilteredLeaveURI+'/'+localStorage.getItem('tuserid')).then(res => {
            if (res.status===200) { 
                setLeave(res.data) 
            }
            else{
                setLeave(null);
            }
        }).catch(error => {
            toast({
                status: 'error',
                title: 'Error in Fetching teacher details',
            })
        })
    }

    const UpdateApproval=(decision,StudentId,DOS,DOE,Reason,CertLink)=>{
        console.log(decision,StudentId,DOS,DOE,Reason,CertLink)
        axios.put(ApprovalURI,{
            StudentId:StudentId,
	        TeacherId:localStorage.getItem('tuserid'),
            DOS:new Date(DOS),
	        DOE:new Date(DOE),
            Reason:Reason,
            Approval:decision,
            CertLink:CertLink
        }).then(res => {
            if (res.status===200) { 
                toast({
                    status: 'success',
                    title: 'Leave Status Updated',
                })
                getLeaveList();
            }
        }).catch(error => {
            toast({
                status: 'error',
                title: 'Error in Updating Status',
            })
        })
    }

    return (
        <VStack spacing="50px">
            <Box style={{ position: "absolute", top: 5, left: 5 }}>
            <Profile Name={localStorage.getItem('name')} RollNo={localStorage.getItem('tuserid')} student={false} Email={localStorage.getItem('email')} designation={localStorage.getItem('desig')+' Computer Science Engineering, School of Engineering, Coimbatore'} />
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
                                    <Th>Start Date</Th>
                                    <Th>End Date</Th>
                                    <Th>Leave Type</Th>
                                    <Th>CertLink</Th>
                                </Tr>
                            </Thead>
                            { // map json objects array in leave data to table
                                leave? leave.map((data, index) => {
                                    return (
                                        <Tbody>
                                            <Tr>
                                                <Td>{data.StudentId.Name}</Td>
                                                <Td>{data.StudentId.StudentId}</Td>
                                                <Td>{data.DOS}</Td>
                                                <Td>{data.DOE}</Td>
                                                <Td>{data.Reason}</Td>
                                                {data.CertLink?<Td><Link href={data.CertLink} isExternal>Click Here</Link></Td>:null}
                                                <Td><IconButton icon={<CheckIcon />} color="green.500" onClick={()=>{UpdateApproval('Approved',data.StudentId.StudentId,data.DOS,data.DOE,data.Reason,data.CertLink)}}/></Td>
                                                <Td><IconButton icon={<CloseIcon />} color="red.500" onClick={()=>{UpdateApproval('Rejected',data.StudentId.StudentId,data.DOS,data.DOE,data.Reason,data.CertLink)}}/></Td>
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