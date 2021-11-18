import React from 'react';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
} from "@chakra-ui/react"

export default function NavStudent() {
    return (
        <Breadcrumb spacing="8px" separator='-'>
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
                <BreadcrumbLink href="/studentlogin" onClick={()=>{localStorage.clear()}}>Sign out</BreadcrumbLink>
            </BreadcrumbItem>

        </Breadcrumb>
    )
}