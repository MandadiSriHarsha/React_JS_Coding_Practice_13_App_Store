import './index.css'

const TabItem = props => {
  const {data, filterApps, isSelected} = props
  const {tabId, displayText} = data
  const highletedClassName = isSelected ? 'apply-style' : ''
  const show = () => {
    filterApps(tabId)
  }
  return (
    <li className="tab">
      <button
        className={`tab-button ${highletedClassName}`}
        type="button"
        onClick={show}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
