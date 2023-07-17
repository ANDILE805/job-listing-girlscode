// import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home';
import Apply from './Apply/Apply';
import Jobs from './components/Jobs-Section/Jobs'
import Job from './components/JobSection/Job'
import { Route, Routes} from 'react-router-dom';
import JobsLayout from './pages/Jobs-Layout/JobsLayout';


function App() {

    return (
        <Routes>
            <Route
             path='/'
             element={<Home />}
      />
     
            <Route 
            path='/Job'
            element={<Job />}
            />

        <Route
        path='/'
        element={<Jobs/>}
        />

        <Route
        path='/JobsLayout'
        element={<JobsLayout/>}
        />

        <Route
        path='/'
        element={<JobsLayout/>}
        />

        <Route
        path='/Apply'
        element={<Apply/>}
        />

        </Routes>
        
       

    )
}


export default App;
