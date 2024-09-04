import React, { useEffect, useState } from 'react'
import api from '../../utils/api'
import { toast } from 'react-toastify'
import './JobList.css'

function JobList() {
  const  [jobsList, setJobList] = useState([])

  useEffect(() => {

    const fetchJobs = async () => {
      try {
        const response = await api.get('/jobs')
        console.log(response)
        setJobList(response.data.jobs)
      } catch (error) {
        toast.error('Failed to fetch jobs')
        console.error(error)
      }
    }
    fetchJobs()

  },[])

  return (
    <div className="job-table-container">
      <table className="job-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Location</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {jobsList.map(job => (
            <tr key={job.id}>
              <td>{job.title}</td>
              <td>{job.description}</td>
              <td>{job.location}</td>
              <td>{job.salary ? `$${job.salary}` : 'Not specified'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default JobList