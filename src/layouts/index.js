import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'

const Header = () => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Gatsby
        </Link>
      </h1>
    </div>
  </div>
)

const TemplateWrapper = ({ children, data: { pages }={}, layoutContext }) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
      <hr />
      <h4>Layout</h4>
      <strong>layoutContext</strong>
      <pre>{ JSON.stringify({ layoutContext }, true, 4) }</pre>
      <h4>All pages</h4>
      <ol>
      {
          pages.edges.map(({ node: { id, path, layout, context: { name } } }) =>
              <li key={ path }>
                <Link to={ path }>{ name || id }</Link>
                &nbsp;
                (<strong>{ layout }</strong>)
              </li>
          )
      }
      </ol>

    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

export const PagesQuery = graphql`
    query AllPages {
      pages: allSitePage {
        edges {
          node {
            id
            path
            layout
            context {
                name
            }
          }
        }
      }
    }
`
