import React from 'react'
import StudentRegistartion from './StudentRegistration';
import {Link,useNavigate} from "react-router-dom" 
import FacultyHeader from './FacultyHeader';
function FacultyDashboard({children}) {
    const navigate = useNavigate();
//     const addStudent = () => {
// navigate("/studentRegister")
//     }
  return (
    <div>
       
        <div>{children}</div>
    </div>
  )
}

 export default FacultyDashboard