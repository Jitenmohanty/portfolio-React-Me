import React from 'react'

const Experince = () => {
  return (
    <div id='experince'>
      <div className="experinceBox">

      </div>
    </div>
  )
}

const ExperinceItem = ({heading , text , input})=>(
    <div className={`experinceItem ${index%2 === 0?'leftExperince':'rightExperince'}`}>

    </div>
)

export default Experince
