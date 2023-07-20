import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Jobs from './pages/Jobs/Jobs';
import ClientInfo from './pages/Apply/ClientInfo';
import ClientEdu from './pages/Apply/ClientEdu'
import ClientExp from './pages/Apply/ClientExp'
import ClientSkills from './pages/Apply/ClientSkills'
import ThankYou from './pages/Apply/ThankYou';
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
        element={<ClientInfo />}
      />

      <Route
        path='/apply/client_education'
        element={<ClientEdu />}
      />

      <Route
        path='/apply/client_experience'
        element={<ClientExp />}
      />

      <Route
        path='/apply/client_skills'
        element={<ClientSkills />}
      />

      <Route
        path='/apply/thank_you'
        element={<ThankYou />}
      />

      <Route
        path='/add-job'
        element={<AddJob />}
      />

    </Routes>
  )
}


export default App;
