import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles(theme => ({
  individualComment: {
    display: "flex",
    paddingBottom: '20px',
    paddingTop: '20px',
    borderBottom: '2px solid #cccccc'
  },
  personIcon: {
    fontSize: '80px'
  },
  message: {
    marginTop: '10px'
  },
}));

export default function Comment (props) {
  const classes = useStyles();

  return (
    <div className={classes.individualComment}>
      <div className="avatar">
        <PersonIcon className={classes.personIcon}/>
      </div>
      <div className="commentInfo">
        <div className="authorDate">
          <div><strong>{props.comment.author}</strong></div>
          <div>Posted on {props.comment.time.toLocaleDateString("en-US")}</div>
        </div>
        <div className={classes.message}>
          {props.comment.message}
        </div>
      </div>
    </div>
  )
}