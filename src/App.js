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
  Image
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
import LeaveApprove from './pages/LeaveApprove';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import './theme/loginSelector.css';
import wave from './assets/wave.svg';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" pl={1} pr={1} pt={1}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Router>
              <Switch>
                <Route exact path="/" component={LoginSelector} />
                <Route exact path="/studentlogin" component={StudentLogin} />
                <Route exact path="/teacherlogin" component={TeacherLogin} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/studentdashboard" component={StudentDashboard} />
                <Route exact path="/leaveform" component={LeaveForm} />
                <Route exact path="/pastleaves" component={PastLeaves} />
                <Route exact path="/teachertimetable" component={TeacherTimeTable} />
                <Route exact path="/attendanceupdate" component={AttendanceUpdate} />
                <Route exact path="/leaveapprove" component={LeaveApprove} />
                <Route exact path="/forgotpassword" component={ForgotPassword} />
              </Switch>
            </Router>
          </VStack>
          <Image pt={1} alignSelf="flex-end" src={wave} alt="image" />
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
