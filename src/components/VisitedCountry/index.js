import './index.css'

const VisitedCountry = props => {
  const {visitedCountryDetails, removeCountry} = props
  const {id, imageUrl, name} = visitedCountryDetails
  const onClickRemove = () => {
    removeCountry(id)
  }
  return (
    <li className="visited-country-item">
      <img src={imageUrl} alt="thumbnail" className="country" />
      <div className="cont">
        <p className="country-name">{name}</p>
        <button type="button" className="remove" onClick={onClickRemove}>
          Remove
        </button>
      </div>
    </li>
  )
}
export default VisitedCountry
