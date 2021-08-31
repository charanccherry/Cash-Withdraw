import './index.css'

const DenominationItem = props => {
  const {denominationDetails, updateBalance} = props
  const {value} = denominationDetails
  const onUpdateBalance = () => {
    updateBalance(value)
  }

  return (
    <li className="withdraw-list">
      <button type="button" className="withdraw-btn" onClick={onUpdateBalance}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
