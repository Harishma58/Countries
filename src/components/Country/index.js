import './index.css'

const Country = props => {
  const {countryDetails, onVisitCountry} = props
  const {id, name, isVisited} = countryDetails
  const onClickVisit = () => {
    onVisitCountry(id)
  }
  const visiteBtn = isVisited ? 'btn Btn' : 'btn'

  return (
    <li className="list-item">
      <div className="name-btn-container">
        <p className="name">{name}</p>
        {isVisited ? (
          <p className="Btn">Visited</p>
        ) : (
          <button type="button" className={visiteBtn} onClick={onClickVisit}>
            Visit
          </button>
        )}
      </div>
      <hr className="line" />
    </li>
  )
}
export default Country
