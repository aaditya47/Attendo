import React from "react";
import {
    Box,
    Badge,
} from "@chakra-ui/react";

export default function AttendanceDisplay(props) {
    return (
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" px={2}>
            <Box p={6}>
                <Box alignItems="center">
                    <Badge borderRadius="full" px={2} alignItems="center" colorScheme="teal">
                        Semester {props.semester}
                    </Badge>
                </Box>
            </Box>
            <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
                {props.subject}
            </Box>
            <Box>
                {props.attendance}%
            </Box>
        </Box>
    );
}