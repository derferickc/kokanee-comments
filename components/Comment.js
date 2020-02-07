import React from "react"
import PersonIcon from '@material-ui/icons/Person';

export default function Comment (props) {

  // styling
  const individualComment = {
    display: "flex",
    paddingBottom: '20px',
    paddingTop: '20px',
    borderBottom: '2px solid #cccccc'
  }
  const personIcon = {
    fontSize: '80px'
  }
  const message = {
    marginTop: '10px'
  }

  return (
    <div className='individual-comment' style={individualComment}>
      <div className="avatar">
        <PersonIcon style={personIcon}/>
      </div>
      <div className="commentInfo">
        <div className="authorDate">
          <div><strong>{props.comment.author}</strong></div>
          <div>Posted on {props.comment.time.toLocaleDateString("en-US")}</div>
        </div>
        <div className="message" style={message}>
          {props.comment.message}
        </div>
      </div>
    </div>
  )
}