import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithDrawl extends Component {
  state = {
    balance: 2000,
  }

  updateBalance = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  getFirstName = name => name.slice(0, 1)

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    const name = 'Sarah Williams'
    const initial = this.getFirstName(name)

    return (
      <div className="withdraw-cont">
        <div className="withdraw-card-cont">
          <div className="name-cont">
            <p className="initial">{initial}</p>
            <h1 className="name">{name}</h1>
          </div>
          <div className="balance-cont">
            <p className="your-balance">Your Balance</p>
            <div className="update-balance">
              <h1 className="balance">{balance}</h1>
              <p className="in-rupees">In Rupees</p>
            </div>
          </div>
          <p className="w-name-m">Withdraw</p>
          <p className="w-name">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denom-list">
            {denominationsList.map(eachDenomination => (
              <DenominationItem
                key={eachDenomination.id}
                denominationDetails={eachDenomination}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithDrawl
