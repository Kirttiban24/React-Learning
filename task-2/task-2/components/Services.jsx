import React from 'react'

const Services = () => {
  return (
    <section className='services'>
        <div className="services-left">
            <span className='services-tag'>Services</span>

            <h2>
                Explore our full range of coaching, training,
                and tennis experiences.
            </h2>

            <button className='services-btn'>Explore More <span className="upper">↗</span></button>
        </div>

        <div className="services-right">

            <div className="service-card">
                <img src="bottom-right.png" alt="" />
                <span className='service-text'>Training Programs</span>
                <p className='service-texts'>Programs designed for all ages and abilities</p>
            </div>

            <div className="service-card">
                <img src="bottom-middle.png" alt="" />
                <span className='service-text'>Court Access</span>
                <p className='service-texts'>Hourly Court Rental</p>
            </div>
        </div>
    </section>
  )
}

export default Services
