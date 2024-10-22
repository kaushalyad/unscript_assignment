import React from 'react'

const CompanyLogo= ({src}) => {
  return (
    <div className="flex justify-center items-center ">
      <img src={src} className=" p-5" />
    </div>
  )
}

export default CompanyLogo