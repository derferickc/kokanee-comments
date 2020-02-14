import React, { Component } from "react"
import { withStyles } from '@material-ui/core/styles';
import { subscribe, stopFollow, startFollow, createDupeComment } from '../models/Comment'
import { FixedSizeList as List } from 'react-window';
import Button from '@material-ui/core/Button';
import AutoSizer from "react-virtualized-auto-sizer";
import Comment from "./Comment"

const useStyles = theme => ({
  instructions: {
    textAlign: 'center'
  },
  inlineBlock: {
    display: 'inline-block',
    textAlign: 'center',
    width: '100%'
  },
  followButton: {
    display: 'inline-block',
    marginRight: '5px'
  },
  customButton: {
    display: 'inline-block',
    marginLeft: '5px'
  },
  autoSizerWrapper: {
    display: 'flex'
  },
  autoSizerInner: {
    flex: '1 1 auto',
    height: '50vh'
  },
});

class CommentList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      comments: props.initialComments || [],
      follow: true
    }

    this.handleFollow = this.handleFollow.bind(this)
    this.addCustomComment = this.addCustomComment.bind(this)
    this.handleDupeCheck = this.handleDupeCheck.bind(this)
  }

  componentDidMount() {
    this.subscribeInitiate()
  }

  subscribeInitiate() {
    subscribe(comment => {
      const dupeCheck = this.handleDupeCheck(comment)
      if(dupeCheck === -1) {
        this.setState({
          comments: [...this.state.comments, comment]
        })
      }
      console.log('received comment: ', comment)
    })
  }

  // method to handle follow / unfollow clicks
  handleFollow() {
    if(this.state.follow) {
      stopFollow()
    } else {
      startFollow()
      this.subscribeInitiate()
    }

    this.setState({
      follow: !this.state.follow
    })
  }

  // method to add a controlled comment in order to test for dupe handling
  addCustomComment() {
    const comment = createDupeComment()
    const dupeCheck = this.handleDupeCheck(comment)

    // if -1, comment is unique and is added to state
    if(dupeCheck === -1) {
      this.setState({
        comments: [...this.state.comments, comment]
      })
    }
  }

  // method to check if the current comment already exists in the state (returns index or -1)
  handleDupeCheck(val) {
    const indexOfComment = this.state.comments.findIndex((comment) => (comment.author === val.author) && (comment.message === val.message))

    return indexOfComment
  }

  render() {
    const { comments, follow } = this.state
    const { classes } = this.props;

    // Comment component loaded for each index in comments variable
    const commentReactWindow = ({ index, style }) => (
      <div style={style}>
          <Comment comment={comments[index]} key={index}/>
      </div>
    )

    return (
      <div className="commentlist-container">
        <div className={classes.inlineBlock}>
          <div className={classes.followButton}>
              {follow == true
                ? <Button
                    variant="contained"
                    color="primary"
                    onClick={this.handleFollow}>
                    Unfollow</Button>
                : <Button
                    variant="contained"
                    color="secondary"
                    onClick={this.handleFollow}>
                    Follow</Button>
              }
          </div>

          <div className={classes.customButton}>
            <Button 
              variant="contained"
              color="primary"
              onClick={this.addCustomComment}>
              Add Custom Comment</Button>
          </div>
        </div>

        <div className={classes.instructions}>
          <p>To 'pause' the incoming stream of comments please click the 'Unfollow' button.</p>
          <p>In order continue receiving glowing reviews and comments, please click the 'Follow' button.</p>
          <p><strong>Total Comments: {comments.length}</strong></p>
        </div>

        {/* Viritualization with Autosizing calculations */}
        <div className={classes.autoSizerWrapper}>
          <div className={classes.autoSizerInner}>
            <AutoSizer>
              {({ height, width }) => (
                <List
                  height={height}
                  width={width}
                  itemSize={200}
                  itemCount={comments.length}
                >
                  {commentReactWindow}
                </List>
              )}
            </AutoSizer>
          </div>
        </div>

      {/*
      Original mapping of Comment component with props
      {comments.map((comment, index) => (
        <Comment comment={comment} key={index}/>
      ))}
      */}
      </div>
    )
  }
}
 
export default withStyles(useStyles)(CommentList)