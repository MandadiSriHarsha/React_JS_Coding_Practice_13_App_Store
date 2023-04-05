import './index.css'

const AppItem = props => {
  const {data} = props
  const {appName, imageUrl} = data
  return (
    <li className="app">
      <img src={imageUrl} alt={appName} className="app-image" />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem
