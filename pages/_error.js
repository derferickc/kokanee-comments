import React from 'react'
import { Theme, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

function Error({ statusCode }) {
  return (
    <div>
      <div>
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : 'An error occurred on client'}
      </div>

      <img
        alt="Kokanee Salmon"
        src="https://upload.wikimedia.org/wikipedia/commons/8/87/Kokanee_salmon.jpg"
      />

      <div>Whoa... we are no longer at the Kokanee Creek, but we did find some sweet salmon that go by the same name!</div>
    </div>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error