/* eslint-disable react-hooks/exhaustive-deps */
import { React, useState ,useEffect} from "react";
import axios from 'axios';
import {
    VStack,
    HStack,
    Box,
    Heading,
    Select,
    Checkbox,
    Text,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    useToast
} from "@chakra-ui/react";
import NavStudent from '../components/NavStudent'
import Profile from "../components/Profile";
import { SubjectListURI, SubjectURI } from "../api/urls";

export default function StudentDashboard() {
    const toast=useToast();
    const [filter, setFilter] = useState("15CSE201")
    const [subjectWise, setSubjectWise] = useState(false)
    const[report,setReport]=useState({});
    const[overall,setOverall]=useState([]);
    const[subject,setSubject]=useState(null);
    useEffect(() => {
        getReport();
        getSubjectList();
    },[])


    const makeSubjectPair=(Slist)=>{
        var dict = {}
        for (var i = 0; i < Slist.length; i++) {
                dict[Slist[i].SubjectId] = Slist[i].Subject
        }
        return dict
    }
    const getSubjectList=()=>{
        axios.get(SubjectListURI).then(res => {
            if (res.status===200) { 
                setSubject(makeSubjectPair(res.data))
             }
        }).catch(error => {
            toast({
                status: 'error',
                title: 'Error in Fetching Subject details',
                duration: 9000,
                isClosable: true
            })
        })
    }

    const processReport=(init)=>{
        var dict = {}
        for (var i = 0; i < init.length; i++) {
            if(!(init[i] in dict)){ dict[init[i].Subject]=[init[i].Attendedhours,init[i].Noofhours]}
            else{
                dict[init[i].Subject][0]+=init[i].Attendedhours
                dict[init[i].Subject][1]+=init[i].Noofhours
            }

        }
        return dict
    }
    const getReport=()=>{
        axios.get(SubjectURI+'/'+localStorage.getItem('suserid')).then(res => {
            console.log(res)
            if (res.status===200) { 
                let initReport=res.data;
                setReport(processReport(initReport))
                setOverall(initReport)
            }
        }).catch(e => {
            toast({
                status: 'error',
                title: 'Error in Fetching Leave details',
            })
        })
    }
    return (
        <Box>
            <VStack spacing={4}>
                <Box style={{ position: "absolute", top: 5, left: 5 }}>
                    <Profile Name={localStorage.getItem('name')} RollNo={localStorage.getItem('suserid')} student={true} dept={'CSE'} section={'E'} />
                </Box>
                <Box align="center">
                    <NavStudent />
                </Box>
                <Box p={8} textAlign="left">
                    <Heading alignItems="left">
                       Attendance Dashboard
                    </Heading>
                </Box>
                <HStack>
                    <Text color="gray.500">
                        Subject Wise Attendance ?
                    </Text>
                    <Checkbox id="attendanceSummary" value={subjectWise} onChange={() => { setSubjectWise(!subjectWise) }} />
                    {subjectWise && subject? 
                    <Select variant="filled" value={filter}
                        onChange={(event) => { setFilter(event.target.value) }} placeholder="Select option">
                        {Object.keys(report).map((key, index) => ( 
                                   <option value={key}>{key} {subject[key]}</option>
                                   ))}</Select> 
                    : null}
                </HStack>
                <Box my={4} textAlign="left">
                            {!(subjectWise)? 
                                <Table>
                                <Thead>
                                <Tr>
                                    <Th>Subject Code</Th>
                                    <Th>Subject</Th>
                                    <Th>Attendance</Th>
                                </Tr>
                                </Thead>
                               {report && subject?Object.keys(report).map((key, index) => ( 
                                    <Tbody>
                                            <Tr>
                                                <Td>{key}</Td>
                                                <Td>{subject[key]}</Td>
                                                <Td>{((report[key][0]/report[key][1])*100)}%</Td>
                                            </Tr>
                                        </Tbody>)):null}
                                        </Table>:
                                       <Table>
                                            <Thead>
                                                <Tr>
                                                    <Th>Date</Th>
                                                    <Th>Attended Hours</Th>
                                                    <Th>Total No of Hours</Th>
                                                </Tr>
                                            </Thead>
                                                {overall.filter((el)=> {return filter===el.Subject}).map((data) => (
                                                    <Tbody>
                                                            <Tr>
                                                                <Td>{data.Ddate}</Td>
                                                                <Td>{data.Attendedhours}</Td>
                                                                <Td>{data.Noofhours}</Td>
                                                            </Tr>
                                                        </Tbody>
                                                ))}
                                                        </Table>
                                         }
                    </Box>
            </VStack>
        </Box>
    );
}