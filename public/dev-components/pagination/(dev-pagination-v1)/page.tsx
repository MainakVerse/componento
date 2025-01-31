'use client'
import React from 'react'
import DevPaginationV1 from './dev-pagination-v1'

const DevPaginationV1Usage = () => {
  return (
    <DevPaginationV1 totalPages={20} onPageChange={(page) => console.log(`Page changed to ${page}`)} />
  )
}

export default DevPaginationV1Usage
