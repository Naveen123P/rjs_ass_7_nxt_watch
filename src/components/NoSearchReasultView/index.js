import ThemContext from '../../context/ThemContext'

import './index.css'
import {Heading, Para, RetryButton} from './styledComponent'

const NoSearchResultView = props => {
  const {retry} = props

  const onClickRetry = () => {
    retry()
  }

  return (
    <ThemContext.Consumer>
      {value => {
        const {isDark} = value

        return (
          <div className="no-search-bg">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
              className="on-videos-img"
            />
            <Heading isDark={isDark}>No Search result found</Heading>
            <Para isDark={isDark}>
              Try different key words or remove search filter
            </Para>
            <RetryButton type="button" onClick={onClickRetry}>
              Retry
            </RetryButton>
          </div>
        )
      }}
    </ThemContext.Consumer>
  )
}

export default NoSearchResultView
