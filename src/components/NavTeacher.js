import React from 'react';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
} from "@chakra-ui/react"

export default function NavTeacher() {
    return (
        <Breadcrumb spacing="8px" separator='-'>
            <BreadcrumbItem>
                <BreadcrumbLink href="/teachertimetable">Time Table</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <BreadcrumbLink href="/attendanceupdate">Update Attendance</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <BreadcrumbLink href="/leaveapprove">Approve Student Leave</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <BreadcrumbLink href="/teacherlogin">Sign out</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
    )
}