import {Component} from 'react'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {value: 'NEW_DELHI', country: 'India'}

  ChangeCapitals = event => {
    const resultId = countryAndCapitalsList.filter(
      eachCountry => eachCountry.id === event.target.value,
    )
    // console.log('koti')//
    // console.log(event.target.key)

    // console.log(resultId)
    // console.log(resultId[0].country)

    this.setState({
      value: event.target.value,
      country: resultId[0].country,
    })
    // this.setState({})
  }

  render() {
    // const {capitalDisplayText, country} = countryAndCapitalsList
    const {value, country} = this.state
    console.log(value)
    // console.log(country)

    return (
      <div>
        <div>
          <h1>Countries and Capitals</h1>
          <select onChange={this.ChangeCapitals} value={value}>
            {countryAndCapitalsList.map(eachCountry => (
              <option value={eachCountry.id} key={eachCountry.id}>
                {eachCountry.capitalDisplayText}
              </option>
            ))}
          </select>
          <p>is capital of which country</p>
          <h1>{country}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals
