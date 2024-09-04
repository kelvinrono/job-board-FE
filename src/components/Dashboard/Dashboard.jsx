import React, {useEffect, useState} from 'react'
import axios from 'axios'
import UserProfile from './UserProfile'
import JobStatistics from './JobStatistics'
import RecentApplications from './RecentApplications'
import RecentJobPostings from './RecentJobPostings'
import ManageJobs from './ManageJobs'
import AdminOverview from './AdminOverview'
import LoadingSpinner from './common/LoadingSpinner'
import './dashboard.css'
import api from '../../utils/api'


function Dashboard() {

    const [userInfo, setUserInfo] = useState('')
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect ( () => {
        const fetchUserData = async () => {
            try {
                const response = await api.get('/users/user')
                setUserInfo(response.data)
                console.log("data", response.data)
            } catch (error) {
                setError(error.message)
            }
            finally{
                setLoading(false)
            }
        }

        fetchUserData()
    }, [])

    if(loading) return <LoadingSpinner />
    if(error) return <div className='error-message'>Error: {error}</div>

  return (
    <div className='container'>

    <UserProfile userInfo={userInfo} />
    <JobStatistics role={userInfo?.role} />
    {userInfo?.role=='job_seeker' && <RecentApplications />}
    {userInfo?.role=='employer' && <ManageJobs />}
    {userInfo?.role=='admin' && <AdminOverview />}
    <RecentJobPostings />
    </div>
  )
}

export default Dashboard