import React from 'react'

export const JournalEntry = () => {
  return (
    <div className='journal__entry pointer'>
        <div className='journal__entry-picture' style={{
            backgroundSize: 'cover',
            backgroundImage: 'url(https://es.rankiapro.com/wp-content/uploads/2019/08/fondo-tecnologico-preferido-selectores.jpg)'
        }}>

        </div>

        <div className='journal__entry-body'>
            <p className='journal__entry-title' >Un nuevo día</p>
            <p className='journal__entry-content' >Lorem ipsum reprehenderit id net us our latus perrus</p>
        </div>

        <div className='journal__entry-date-box'>
            <span>Monday</span>
            <h4>28</h4>
        </div>

    </div>
  )
}
