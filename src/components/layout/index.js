import React, { fragment } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from '../header'
import '../../styles/main.scss'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <fragment>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div>
          <main className="main-body">{children}</main>
          <footer>
            © {new Date().getFullYear()}
            {` `}
          </footer>
        </div>
      </fragment>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
