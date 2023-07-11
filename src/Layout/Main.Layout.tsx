import { useState } from 'react'

import { CodeDisplay, MessagesDisplay } from '../Components/Index'

interface ChatItem {
  message: string
}

const MainLayout = () => {
  const [value, setValue] = useState('')
  const [chat, setChat] = useState<ChatItem[]>([])

  const GetQuery = async () => {
    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: value,
        }),
      }

      const response = await fetch('http://localhost:8080/v1/api', options)
      const data = await response.json()
      console.log(data)
      setChat((oldChat) => [...oldChat, data])
    } catch (error) {
      console.error(error)
    }
  }

  const ClearChat = () => {
    setValue('')
    setChat([])
  }

  const latestCode = chat.filter((message) => message).pop()

  return (
    <div className="main-layout">
      <MessagesDisplay userMessages={chat} />
      <input onChange={(e) => setValue(e.target.value)} value={value} />
      <CodeDisplay text={latestCode || ''} />
      <div className="button-container">
        <button id="get-query" onClick={GetQuery}>
          Get Query!
        </button>
        <button id="clear-chat" onClick={ClearChat}>
          Clear Chat!
        </button>
      </div>
    </div>
  )
}

export default MainLayout
