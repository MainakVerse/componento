import React from 'react'
import DevDropdownV1 from './dev-dropdown-v1'

const DevDropdownV1Usage = () => {
  return (
    <DevDropdownV1 defaultOpen button={<button className='p-1 px-3 bg-ACCENT text-white rounded-lg'>Open</button>}>
      <p className='p-3 px-5'>Dropdown Content</p>
    </DevDropdownV1>
  )
}

export default DevDropdownV1Usage

