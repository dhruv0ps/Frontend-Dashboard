import React from 'react'
import CardGrid from './Card'
import Navbar from './Navbar'
import CustomBarChart from './CustomBarChart'
import ClientTable from './Table'
import ProjectTable from './ProjectTable'
import Table from './Table'
import Msg from './Msg'
const Dashboard = () => {
  return (
    <div>
      <Navbar/>
      <Msg/>
    <CardGrid/>
    <p className='flex ml-6 text-3xl mb-2 font-bold'>Project Mangment</p>
   <CustomBarChart/>
   
   <Table/>
   <ProjectTable/>
    </div>
  )
}

export default Dashboard
