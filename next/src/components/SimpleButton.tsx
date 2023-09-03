import React from 'react'

type SimpleButtonProps = {
  text: string
  onClick: () => void
}

const SimpleButton: React.FC<SimpleButtonProps> = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>
}

export default SimpleButton
