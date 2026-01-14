import React from 'react'

const Stats = () => {
  return (
    <section className='stats'>
        <p className="stats-title">A few more facts about us in numbers</p>

        <div className="stats-grid">

            <div className="stat">
              <h2>12,000+</h2>
              <p>Hours of play annually</p>
            </div>
            
            <div className="stat">
              <h2>89%</h2>
              <p>Player retention rate</p>
            </div>

            <div className="stat">
              <h2>1,200+</h2>
              <p>Active members</p>
            </div>

            <div className="stat">
               <h2>125+</h2>
               <p>Annual tournament</p>
            </div>
        </div>
    </section>
  )
}

export default Stats
