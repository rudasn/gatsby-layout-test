import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({ pathContext }) => {
  return <div>
    <h4>Page</h4>
    <strong>pathContext</strong>
    <pre>{ JSON.stringify({ pathContext }, true, 4) }</pre>
  </div>
}

export default IndexPage
