import React, { useState } from 'react';
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Link,
  Button
} from '@chakra-ui/react';

// todo: work on file input button

import { SingleDatepicker } from 'chakra-dayzed-datepicker';

export default function LeaveForm() {
    const [date, setDate] = useState(new Date());
    return(
        <Flex width="full" align="center" justify="center">
            <Box p={8} textAlign="center">
                <Box textAlign="center">
                    <Heading>
                        Apply for leave
                    </Heading>
                </Box>
                <Box my={4} textAlign="left">
                    <form>
                        <FormControl>
                            <FormLabel>Date</FormLabel>
                            <SingleDatepicker name="date-input" date={date} onDateChange={setDate} />
                        </FormControl>
                        <FormControl mt={6}>
                            <FormLabel>Reason of leave</FormLabel>
                            <Input type="text" placeholder="State the reason of leave" />
                        </FormControl>
                        <FormControl mt={6}>
                            <FormLabel>Upload supporting documents</FormLabel>
                            <Button type="upload" colorScheme="teal" variant="outline" width="full" mt={4}>
                                <input hidden type="file" />Upload 
                            </Button>
                        </FormControl>
                        <Button type="submit" colorScheme="teal" variant="outline" width="full" mt={4}>
                            Submit Form
                        </Button>
                    </form>
                </Box>
            </Box>
        </Flex>
    );
}