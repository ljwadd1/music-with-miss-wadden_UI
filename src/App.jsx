import { useState } from 'react'
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <div>
        <h1>Welcome!</h1>
        <p>This is the parent page, "App"</p>
      </div>

      <div>
        <p>Below is where the child pages will render</p>
        <Outlet />
      </div>
    </>
  )
}

export default App
