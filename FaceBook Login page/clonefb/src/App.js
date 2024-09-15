
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Form from './Component/Form';
import SignUp from './Component/SignUp';

function App() {
 return <>
    <Routes>
        <Route path="/" element={<Form/>}/>
        <Route path="/Signup" element={<SignUp/>}/>
    </Routes>
 {/* <h1>Aniket</h1> */}
 {/* <SignUp /> */}
 </>
}

export default App;
