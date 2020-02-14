import { loremIpsum } from 'lorem-ipsum'
import { name } from './Names'

export interface Comment {
  author: string
  message: string
  time: Date
}

const makeComment = (): Comment => ({
  author: name(),
  message: loremIpsum({ count: ~~(Math.random() * 3) }),
  time: new Date()
})

export const makeComments = (count: number) => {
  const comments = []

  for (let i = 0; i < count; i++) {
    comments.push(makeComment())
  }

  return comments
}

export const createDupeComment = (): Comment => {
  const comment = {
    author: 'Fred Choe',
    message: 'If a comment has a unique author and message it will not be considered a duplicate comment',
    time: new Date()
  }

  return comment
}

var keepGoing = true

// clicking the unfollow button takes us out of the subscribe callback loop by modyfing value of keepGoing
export const stopFollow = () => {
  keepGoing = false
}

// clicking the follow button puts us back into the callback loop by modyfing value of keepGoing
export const startFollow = () => {
  keepGoing = true
}

export const subscribe = (callback: (comment: Comment) => void) => {
    console.log('subscribing')

    const produce = () => {

      // if keepGoing is falsy, jump out of the callback loop
      if(!keepGoing) {
        console.log('stopped inside produce')
        return
      }

      callback(makeComment())
      const interval = Math.random() * 5000 + 2000
      console.log('next comment in:', interval)
      setTimeout(produce, interval)
    }

    setTimeout(produce, 3000)
}
