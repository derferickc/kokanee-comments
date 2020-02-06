import { subscribe } from '../models/Comment'
import { useEffect } from 'react'

const CommentList = props => {
    useEffect(() => {
        subscribe(comment => {
            // console.log('received comment: ', comment)
        })
    }, [])
    return (
    	<div>
    		{props.initialComments.map((comment, index) => (
    			<p key={index}>{comment.author}: {comment.message}</p>
    		))}
    	</div>
    )
}

export default CommentList
