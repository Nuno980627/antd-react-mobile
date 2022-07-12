import React from 'react'
import { Link } from 'react-router-dom'
function Home(props: any) {
  return (
    <div className="test">
      <Link to="/test">其他页</Link>
    </div>
  )
}

export default Home
