const CodeDisplay = ({ text }: any) => {
  return (
    <div className="code-display">
      <div className="buttons">
        <div className="button"></div>
        <div className="button"></div>
        <div className="button"></div>
      </div>
      <div className="code-output">
        <p>{text}</p>
      </div>
    </div>
  )
}

export default CodeDisplay
