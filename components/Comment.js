import React from "react"
 
export default function Comment (props) {

  return (
    <div className='individual-comment' style={{margin: "10px auto"}}>
      <div><strong>Author: </strong>{props.comment.author}</div>
      <div><strong>Message: </strong>{props.comment.message}</div>
      <div><strong>Time: </strong>{props.comment.time.toString()}</div>
    </div>
  )
}