import React from 'react'
import { Link } from 'react-router-dom'
function StudentHeader() {
  return (
    <div> <div>
    <nav className="bg-gray-800 text-white p-4">
  <div className="container mx-auto flex justify-between">
    <Link to="/" className="text-lg font-bold"></Link>
    <div className="space-x-4">
      <Link to="/take-test" className="hover:bg-gray-700 px-3 py-2 rounded">Take Test</Link>
      <Link to="/student-report" className="hover:bg-gray-700 px-3 py-2 rounded">Scores</Link>
      {/* <Link to="/validate-test" className="hover:bg-gray-700 px-3 py-2 rounded">Test Reports</Link> */}
      {/* <Link to="/generate-score" className="hover:bg-gray-700 px-3 py-2 rounded">Generate Score</Link> */}
      <Link to="/logout" className="hover:bg-gray-700 px-3 py-2 rounded" >Logout</Link>
    </div>
  </div>
</nav>
</div></div>
  )
}

export default StudentHeader