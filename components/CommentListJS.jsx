import { subscribe } from '../models/Comment'
import { useEffect } from 'react'

const CommentList = props => {
    useEffect(() => {
        subscribe(comment => {
            console.log('received comment: ', comment)
        })
    }, [])
    return <div>swag {props.initialComments.length}</div>
}

export default CommentList
