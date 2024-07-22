import React from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
function FacultyHeader() {
    const navigate = useNavigate();
    const handleLogout =(e)=>{ 
      alert("successfully logout")
        navigate("/")
    
      }
  return (
    <div>
        <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-lg font-bold"></Link>
        <div className="space-x-4">
            
          <Link to="/studentRegister" className="hover:bg-gray-700 px-3 py-2 rounded">Add New Student</Link>
          <Link to="/create-test" className="hover:bg-gray-700 px-3 py-2 rounded">Create New Test</Link>
          {/* <Link to="/validate-test" className="hover:bg-gray-700 px-3 py-2 rounded">Test Reports</Link> */}
          {/* <Link to="/generate-score" className="hover:bg-gray-700 px-3 py-2 rounded">Generate Score</Link> */}
          <Link to="/logout" className="hover:bg-gray-700 px-3 py-2 rounded" onClick={handleLogout}>Logout</Link>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default FacultyHeader