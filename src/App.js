// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Jobs from './pages/Jobs/Jobs';
import Apply from './pages/Apply/Apply';
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
        path='/apply'
        element={<Apply />}
      />

      <Route
        path='/add-job'
        element={<AddJob />}
      />

    </Routes>
  )
}


export default App;
