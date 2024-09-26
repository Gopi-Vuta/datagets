import Home from './libs/home/home';
import { Navigate, Route, Routes } from 'react-router-dom';
import NavBar from './libs/nav/nav-bar';
import Services from './libs/services/services';
import ContactUs from './libs/contact-us/contact-us';
import Login from './libs/login/login';
import { AuthProvider } from './libs/auth/authorisation-provider';
import ProtectedRoute from './libs/auth/protected-route';
import Analytics from './libs/analytics/analytics';
import { ThemeProvider } from '@emotion/react';
import useCustomTheme from './libs/hooks/useCustomTheme';


function App() {
  const theme = useCustomTheme({mode: 'light'});
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <NavBar/>
        <div>
          <Routes>        
            <Route path="/home"  element={<Home/>} />
            <Route path="/services"  element={<Services />}/>
            <Route path="/contact"  element={<ContactUs/>}/>
            <Route
              path="/analytics"
              element={
                <ProtectedRoute>
                  <Analytics />
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<Login/>}/>
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
        </div>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
