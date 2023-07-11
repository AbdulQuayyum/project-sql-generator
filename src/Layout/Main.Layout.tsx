import React from 'react'

import { CodeDisplay, MessagesDisplay } from '../Components/Index'

const MainLayout = () => {
  const GetQuery = () => {
    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: 'create a table',
        }),
      }

      fetch('http://localhost:8080/v1/completions', options)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="main-layout">
      <MessagesDisplay />
      <input />
      <CodeDisplay />
      <div className="button-container">
        <button id="get-query" onClick={GetQuery}>
          Get Query!
        </button>
        <button id="clear-chat">Clear Chat!</button>
      </div>
    </div>
  )
}

export default MainLayout
