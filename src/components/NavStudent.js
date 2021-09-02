import React from 'react';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
  } from "@chakra-ui/react"

import { ChevronRightIcon } from '@chakra-ui/icons'  

export default function NavStudent() {
    return(
        <Breadcrumb spacing="8px" separator={<ChevronRightIcon color="orange.500" />}>
                    <BreadcrumbItem>
                            <BreadcrumbLink href="/leaveform">Leave Form</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <BreadcrumbLink href="/pastleaves">Past Leaves</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <BreadcrumbLink href="/studentdashboard">Attendance Dashboard</BreadcrumbLink>
                    </BreadcrumbItem>
                    
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/studentlogin">Sign out</BreadcrumbLink>
                    </BreadcrumbItem>
                
                    </Breadcrumb>
    )
}