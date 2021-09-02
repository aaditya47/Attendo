import { React } from 'react';
import { useDisclosure, VStack } from "@chakra-ui/react"
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  IconButton,
  Text,
  Avatar,
  AvatarBadge,
  HStack,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup
} from "@chakra-ui/react"

import { Line } from 'react-chartjs-2'
import { InfoIcon } from '@chakra-ui/icons'
export default function Profile(props) {

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr'],
    datasets: [
      {
        label: 'Average Attendance Trend',
        data: [75, 80, 82, 85],
        borderColor: 'rgb(75, 192, 192)'
      }
    ]
  }
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <IconButton
        variant="outline"
        colorScheme="teal"
        aria-label="Send email"
        icon={<InfoIcon />}
        onClick={onOpen}
      />
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px" >Profile</DrawerHeader>
          <DrawerBody>
            <VStack spacing={4} align="left">
              <HStack spacing={2}>
                <Avatar>
                  <AvatarBadge boxSize="1.25em" bg="green.500" />
                </Avatar>
                <Text >
                  Welcome  {props.Name} !!
                </Text>
              </HStack>
              <Text >
                <b>Roll Number</b> : {props.RollNo}
              </Text>
              {props.student ? <Text >
                <b>Class/Section</b> : {props.dept} - {props.section}
              </Text> :
                <VStack align="left" spacing={3}>
                  <Text>
                    <b>Designation</b> : {props.designation}
                  </Text>
                  <Text>
                    <b>Email</b> : {props.Email}
                  </Text>
                </VStack>
              }
              {props.student ?
                <StatGroup>
                  <Stat>
                    <StatLabel>CGPA</StatLabel>
                    <StatNumber>9.61</StatNumber>
                    <StatHelpText>
                      <StatArrow type="increase" />
                      1.15%
                    </StatHelpText>
                  </Stat>
                  <Stat>
                    <StatLabel>Attendance Summary</StatLabel>
                    <Line data={data} />
                  </Stat>
                </StatGroup> : null}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}