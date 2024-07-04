import './index.css'

const BrowserHistoryItem = props => {
  const {browsedData, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = browsedData

  const onDelete = () => {
    deleteHistory(id)
  }
  return (
    <li className="browsedHistory">
      <div>
        <p className="timeAccessed">{timeAccessed}</p>
      </div>
      <div className="itemContainer">
        <img src={logoUrl} alt="domain logo" className="domainLogo" />
        <div className="searchTextContainer">
          <div>
            <p className="title">{title}</p>
          </div>
          <div>
            <p className="domainUrl">{domainUrl}</p>
          </div>
        </div>
        <button
          data-testid="delete"
          type="button"
          className="deleteButton"
          onClick={onDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="deleteIcon"
          />
        </button>
      </div>
    </li>
  )
}

export default BrowserHistoryItem
