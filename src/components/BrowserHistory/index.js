import {Component} from 'react'
import BrowserHistoryItem from '../BrowserHistoryItem'
import './index.css'

class BrowserHistory extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchInput: '',
      initialHistoryList: props.initialHistoryList,
      isHistoryEmpty: props.initialHistoryList.length === 0,
    }
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  deleteHistory = id => {
    const {initialHistoryList} = this.state
    const filteredBrowsedData = initialHistoryList.filter(
      eachBrowsePage => eachBrowsePage.id !== id,
    )
    this.setState({
      initialHistoryList: filteredBrowsedData,
      isHistoryEmpty: filteredBrowsedData.length === 0,
    })
  }

  render() {
    const {searchInput, initialHistoryList, isHistoryEmpty} = this.state
    const searchResults = initialHistoryList.filter(eachBrowsePage =>
      eachBrowsePage.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bgContainer">
        <nav className="navbar">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="appLogo"
          />
          <div className="searchBar">
            <div className="searchIcon">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
                className="searchPng"
              />
            </div>
            <input
              type="search"
              placeholder="Search history"
              value={searchInput}
              onChange={this.onChangeSearchInput}
              className="serachInput"
            />
          </div>
        </nav>
        <div className="historySection">
          {isHistoryEmpty || searchResults.length === 0 ? (
            <p className="message">There is no history to show</p>
          ) : (
            <ul className="historyListsContainer">
              {searchResults.map(eachBrowsePage => (
                <BrowserHistoryItem
                  browsedData={eachBrowsePage}
                  key={eachBrowsePage.id}
                  deleteHistory={this.deleteHistory}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default BrowserHistory
