import React from 'react'

import { CodeDisplay, MessagesDisplay } from '../Components/Index'

const MainLayout = () => {
  return (
    <div className='main-layout'>
      <MessagesDisplay />
      <input />
      <CodeDisplay />
      <div className="button-container">
        <button id="get-query">Get Query!</button>
        <button id="clear-chat">Clear Chat!</button>
      </div>
    </div>
  )
}

export default MainLayout
