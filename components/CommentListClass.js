import React, { Component } from "react"
import { subscribe, stopFollow, startFollow, createDupeComment } from '../models/Comment'
import { FixedSizeList as List } from 'react-window';
import AutoSizer from "react-virtualized-auto-sizer";
import Comment from "./Comment"

class CommentList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      comments: [],
      follow: true
    }

    this.handleFollow = this.handleFollow.bind(this)
    this.addCustomComment = this.addCustomComment.bind(this)
    this.handleDupeCheck = this.handleDupeCheck.bind(this)
  }

  componentDidMount() {
    this.setState({
      comments: this.props.initialComments
    })
  }

  componentDidUpdate() {
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

    const commentReactWindow = ({ index, style }) => (
      <div style={style}>
          <Comment comment={comments[index]} key={index}/>
      </div>
    )

    return (
      <div className="commentlist-container">
        <div className="follow-button-container">
          <button onClick={this.handleFollow}>
            {follow == true
              ? `Unfollow`
              : `Follow`}
          </button>
        </div>

        <div className="addcustom-comment-button">
          <button onClick={this.addCustomComment}>Add Custom Comment</button>
        </div>

        <div>Comments List Length: {comments.length}</div>

        <div style={{ display: 'flex' }}>
          <div style={{ flex: '1 1 auto' , height: '50vh'}}>
            <AutoSizer>
              {({ height, width }) => (
                <List
                  height={height}
                  width={width}
                  itemSize={125}
                  itemCount={comments.length}
                >
                  {commentReactWindow}
                </List>
              )}
            </AutoSizer>
          </div>
        </div>

      {/*
      {comments.map((comment, index) => (
        <Comment comment={comment} key={index}/>
      ))}
      */}

      </div>
    )
  }
}
 
export default CommentList