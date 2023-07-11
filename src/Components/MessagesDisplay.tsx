import MessageDisplay from './MessageDisplay'

const MessagesDisplay = ({ userMessages } : any) => {
  return (
    <div className='messages-display'>
      {userMessages.map((userMessage : any, _index : any) => <MessageDisplay key={_index} message={userMessage}  /> )}
    </div>
  )
}

export default MessagesDisplay
