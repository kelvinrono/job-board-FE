import React, {useEffect, useState} from 'react'
import api from '../../utils/api'
import './dashboard.css'

function JobStatistics({role}) {
    const [stats, setStats] = ({})
    const [loading, setLoading] = (true)
    const [error, setError] = ("")

    useEffect( () => {

        try {
            // const response = await api.get('')
            
        } catch (error) {
            
        }
    });



  return (
    <div className=''>

    </div>
  )
}

export default JobStatistics