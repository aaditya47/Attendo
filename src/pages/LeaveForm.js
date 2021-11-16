import React, { useState } from 'react';
import {
    Flex,
    Box,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Button,
    HStack,
    Checkbox,
    VStack,
    useToast
} from '@chakra-ui/react';

// todo: work on file input button
import { SingleDatepicker } from 'chakra-dayzed-datepicker';
import NavStudent from '../components/NavStudent'
import Profile from '../components/Profile';


export default function LeaveForm() {
    const toast = useToast()
    const checkCurrDate = (dosFunc, doeFunc, aliasFunc) => {
        var today = new Date().setHours(0, 0, 0, 0);
        var newDos = new Date(dosFunc).setHours(0, 0, 0, 0);
        var newDoe = new Date(doeFunc).setHours(0, 0, 0, 0);
        console.log(aliasFunc, today, newDoe, newDos)
        if (aliasFunc && ((today < newDos && today > newDoe) || (today > newDoe && today < newDos))) {
            return false
        }
        else if (!aliasFunc && newDos < today) {
            return false
        }
        else if (newDos > newDoe) {
            return false
        }
        return true
    }
    const onSubmit = (dos, doe, haveAlias, reason) => {
        if (dos && doe && reason !== '') {
            let res = checkCurrDate(dos, doe, haveAlias)
            if (res === false) {
                toast({
                    position: 'top',
                    title: "Form Error",
                    description: "Please re-check the dates",
                    status: "error",
                    duration: 9000,
                    isClosable: true,
                })
            }
        }
        else {
            toast({
                position: 'top',
                title: "Form Error",
                description: "Enter the complete details",
                status: "error",
                duration: 9000,
                isClosable: true,
            })
        }
    }
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [isDoc, setIsDoc] = useState(false)
    const [reason, setReason] = useState('')
    return (
        <VStack spacing={5}>
            <Box style={{ position: "absolute", top: 5, left: 5 }}>
                <Profile Name={'Samyukth'} RollNo={'CB.EN.U4CSE18451'} student={true} dept={'CSE'} section={'E'} />
            </Box>
            <Box align="center">
                <NavStudent />
            </Box>
            <Flex width="full" align="center" justify="center">
                <Box p={8} textAlign="center">
                    <Box textAlign="center">
                        <Heading>
                            Apply for leave
                        </Heading>
                    </Box>
                    <Box my={4} textAlign="left">
                        <form>
                            <HStack>
                                <FormControl>
                                    <FormLabel>Start date</FormLabel>
                                    <SingleDatepicker name="date-input" date={startDate} onDateChange={setStartDate} />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>End date</FormLabel>
                                    <SingleDatepicker name="date-input" date={endDate} onDateChange={setEndDate} />
                                </FormControl>
                            </HStack>
                            <FormControl mt={6}>
                                <FormLabel>Reason of leave</FormLabel>
                                <Input type="text" value={reason} onChange={(event) => { setReason(event.target.value) }} placeholder="State the reason of leave" />
                            </FormControl>
                            <FormControl mt={6}>
                                <Checkbox value={isDoc} onChange={() => setIsDoc(!isDoc)}>Supporting Document?</Checkbox>
                            </FormControl>
                            {isDoc ? <FormControl mt={6}>
                                <Input placeholder="Shareable google doc" />
                            </FormControl> : null}
                            <Button colorScheme="teal" variant="outline" width="full" mt={4} onClick={() => onSubmit(startDate, endDate, isDoc, reason)}>
                                Submit Form
                            </Button>
                        </form>
                    </Box>
                </Box>
            </Flex>
        </VStack>
    );
}