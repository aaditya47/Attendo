import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

import LoginSelector from './pages/LoginSelector';
import StudentLogin from './pages/StudentLogin';
import TeacherLogin from './pages/TeacherLogin';
import StudentDashboard from './pages/StudentDashboard';
import LeaveForm from './pages/LeaveForm';
import PastLeaves from './pages/PastLeaves';
import TeacherTimeTable from './pages/TeacherTimeTable';
import AttendanceUpdate from './pages/AttendanceUpdate';

function App() {
  return (
    <Router>
      <ChakraProvider theme={theme}>
        <Box textAlign="center" fontSize="xl">
          <Grid minH="100vh" p={3}>
            <ColorModeSwitcher justifySelf="flex-end" />
            <VStack spacing={8}>
              <Switch>
                <Route exact path="/" component={LoginSelector} />
                <Route exact path="/studentlogin" component={StudentLogin} />
                <Route exact path="/teacherlogin" component={TeacherLogin} />
                <Route exact path="/studentdashboard" component={StudentDashboard} />
                <Route exact path="/leaveform" component={LeaveForm} />
                <Route exact path="/pastleaves" component={PastLeaves} />
                <Route exact path="/teachertimetable" component={TeacherTimeTable} />
                <Route exact path="/attendanceupdate" component={AttendanceUpdate} />
              </Switch>
            </VStack>
          </Grid>
        </Box>
      </ChakraProvider>
    </Router>
  );
}

export default App;
