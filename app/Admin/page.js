import React from 'react'
import AdminDashboard from './Client'
import { Suspense } from 'react'


const page = () => {
  return (
    <Suspense fallback={<div>Loading......</div>}>
        <AdminDashboard /> 
    </Suspense>
  )
}

export default page
