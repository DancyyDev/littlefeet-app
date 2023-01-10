import React, {useState} from 'react'

export default function Form() {

  const [totalDonation, setTotalDonation] = useState(0)
  const [donation, setDonation] = useState('')

  let addDonation = (e) => {
    e.preventDefault()
    setTotalDonation((prevState) =>{
      return prevState + parseInt(donation)
    })
    setDonation('')
  }
  
  return (
    <div>

        <h4>
          {totalDonation}
        </h4>

        <form>
          <input type="number" className="moneyInput" value={donation} onChange={(e) =>setDonation(e.target.value)} />
          <button onClick={ addDonation }>Donate</button>
        </form>

    </div>
  )
}
