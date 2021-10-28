import React from "react";
import {
    Box,
    VStack,
    Text
} from '@chakra-ui/react';

const PasswordStrengthIndicator = (props) => {
    return (
        <Box>
            <VStack spacing={2}>
                <Text fontSize="lg">
                    Your password must contain:
                </Text>
                <PasswordStrengthIndicatorItem isValid={props.minChar} text="At least 8 characters" />
                <PasswordStrengthIndicatorItem isValid={props.number} text="At lease 1 number" />
                <PasswordStrengthIndicatorItem isValid={props.minChar} text="At lease 1 special character" />
            </VStack>
        </Box>
    );
}

const PasswordStrengthIndicatorItem = ({ isValid, text }) => {
    const highlight = isValid ? "tomato" : isValid !== null ? "teal" : "";
    return <Text color={highlight}>{text}</Text>;
}

export default PasswordStrengthIndicator;