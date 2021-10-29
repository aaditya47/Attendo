import React from "react";
import {
    Box,
    VStack,
    Text
} from '@chakra-ui/react';

const PasswordStrengthIndicator = (props) => {
    return (
        <Box>
            <VStack spacing={1}>
                <Text fontSize="medium">
                    Your password must contain:
                </Text>
                <PasswordStrengthIndicatorItem isValid={props.validity.minChar} text="At least 8 characters" />
                <PasswordStrengthIndicatorItem isValid={props.validity.number} text="At least 1 number" />
                <PasswordStrengthIndicatorItem isValid={props.validity.specialChar} text="At least 1 special character" />
            </VStack>
        </Box>
    );
}

const PasswordStrengthIndicatorItem = (props) => {
    const highlight = props.isValid ? "green" : props.isValid !== null ? "red" : "";
    return <Text fontSize="medium" color={highlight}>{props.text}{highlight!=='red'? '✔':'❌'}</Text>;
}

export default PasswordStrengthIndicator;