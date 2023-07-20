// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Jobs from './pages/Jobs/Jobs';
import Client_Info from './pages/Apply/Client_Info';
import Client_Edu from './pages/Apply/Client_Edu'
import Client_Exp from './pages/Apply/Client_Exp'
import JobDetails from './pages/JobDetails/JobDetails';
import AddJob from './pages/AddJob/AddJob';

function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={<Home />}
      />

      <Route
        path='/job'
        element={<JobDetails />}
      />

      <Route
        path='/jobs'
        element={<Jobs />}
      />

      <Route
        path='/apply/client_information'
        element={<Client_Info />}
      />

      <Route
        path='/apply/client_education'
        element={<Client_Edu />}
      />

      <Route
        path='/apply/client_experience'
        element={<Client_Exp />}
      />

      <Route
        path='/add-job'
        element={<AddJob />}
      />

    </Routes>
  )
}


export default App;
