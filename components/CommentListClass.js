import React, { Component } from "react"
import { subscribe, stopFollow, startFollow, createDupeComment } from '../models/Comment'

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

  addCustomComment() {
    const comment = createDupeComment()
    const dupeCheck = this.handleDupeCheck(comment)

    if(dupeCheck === -1) {
      this.setState({
        comments: [...this.state.comments, comment]
      })
    }
  }

  handleDupeCheck(val) {
    const indexOfComment = this.state.comments.findIndex((comment) => (comment.author === val.author) && (comment.message === val.message))

    return indexOfComment
  }

  render() {
    const { comments, follow } = this.state

    return (
      <div className='comment-wrapper'>
        <div>
           {follow == true
            ? <button onClick={this.handleFollow}>Unfollow</button>
            : <button onClick={this.handleFollow}>Follow</button>
          }
        </div>

        <div>
          <button onClick={this.addCustomComment}>Add Custom Comment</button>
        </div>

        {comments.map((comment, index) => (
          <div className='individual-comment' key={index} style={{margin: "10px auto"}}>
            <div><strong>Author: </strong>{comment.author}</div>
            <div><strong>Message: </strong>{comment.message}</div>
            <div><strong>Time: </strong>{comment.time.toString()}</div>
          </div>
        ))}

      </div>
    )
  }
}
 
export default CommentList