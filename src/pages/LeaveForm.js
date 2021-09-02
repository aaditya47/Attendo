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
    VStack
} from '@chakra-ui/react';

// todo: work on file input button
import { SingleDatepicker } from 'chakra-dayzed-datepicker';
import NavStudent from '../components/NavStudent'
import Profile from '../components/Profile';

export default function LeaveForm() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [isDoc, setIsDoc] = useState(false)
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
                                    <FormLabel>Start Date</FormLabel>
                                    <SingleDatepicker name="date-input" date={startDate} onDateChange={setStartDate} />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>End Date</FormLabel>
                                    <SingleDatepicker name="date-input" date={endDate} onDateChange={setEndDate} />
                                </FormControl>
                            </HStack>
                            <FormControl mt={6}>
                                <FormLabel>Reason of leave</FormLabel>
                                <Input type="text" placeholder="State the reason of leave" />
                            </FormControl>
                            <FormControl mt={6}>
                                <Checkbox value={isDoc} onChange={() => setIsDoc(!isDoc)}>Supporting Document?</Checkbox>
                            </FormControl>
                            {isDoc ? <FormControl mt={6}>
                                <Input placeholder="Shareable google doc" />
                            </FormControl> : null}
                            <Button type="submit" colorScheme="teal" variant="outline" width="full" mt={4}>
                                Submit Form
                            </Button>
                        </form>
                    </Box>
                </Box>
            </Flex>
        </VStack>
    );
}