import React from 'react'
import { HiHome } from 'react-icons/hi'
import { IoIosArrowForward } from 'react-icons/io'
import { IoSearch } from 'react-icons/io5'
import { MdCameraAlt } from 'react-icons/md'
import DevButtonV1 from './dev-button-v1'

const DevButtonV1Usage = () => {
  return (
    <section className="*:py-4 divide-y divide-ACCENT/30">
      <div>
        <h2>Button Variants</h2>
        <div className="flex gap-2 items-center flex-wrap">
          <DevButtonV1 variant="solid">
            Solid
          </DevButtonV1>
          <DevButtonV1 variant="ghost">Ghost</DevButtonV1>
          <DevButtonV1 variant="light">Light</DevButtonV1>
          <DevButtonV1 variant="border">Border</DevButtonV1>
          <DevButtonV1 variant="flat">Flat</DevButtonV1>
        </div>
      </div>
      <div>
        <h2>Button Sizes</h2>
        <div className="flex gap-2 items-center flex-wrap">
          <DevButtonV1 variant="solid" size="sm">
            Size sm
          </DevButtonV1>
          <DevButtonV1 variant="solid" size="md">
            Size md
          </DevButtonV1>
          <DevButtonV1 variant="solid" size="lg">
            Size lg
          </DevButtonV1>
        </div>
      </div>
      <div>
        <h2>Button Roundness</h2>
        <div className="flex gap-2 items-center flex-wrap">
          <DevButtonV1 variant="solid" rounded="none">
            Rounded none
          </DevButtonV1>
          <DevButtonV1 variant="solid" rounded="sm">
            Rounded sm
          </DevButtonV1>
          <DevButtonV1 variant="solid" rounded="md">
            Rounded md
          </DevButtonV1>
          <DevButtonV1 variant="solid" rounded="lg">
            Rounded lg
          </DevButtonV1>
          <DevButtonV1 variant="solid" rounded="full">
            Rounded full
          </DevButtonV1>
        </div>
      </div>
      <div>
        <h2>Using as Link</h2>
        <div className="flex gap-2">
          <DevButtonV1 variant="solid" href="/" target="_blank">
            Button as Link
          </DevButtonV1>
        </div>
      </div>
      <div>
        <h2>Using with Icon</h2>
        <div className="flex gap-2">
          <DevButtonV1 variant="solid" target="_blank">
            <HiHome />
            Home
          </DevButtonV1>
          <DevButtonV1 variant="solid" target="_blank">
            Proceed
            <IoIosArrowForward />
          </DevButtonV1>
        </div>
      </div>
      <div>
        <h2>Using as Icon</h2>
        <div className="flex gap-2 items-center flex-wrap">
          <DevButtonV1 variant="solid" asIcon={true}>
            <IoSearch />
          </DevButtonV1>
          <DevButtonV1 variant="solid" asIcon={true}>
            <HiHome />
          </DevButtonV1>
          <DevButtonV1 variant="solid" asIcon={true}>
            <MdCameraAlt />
          </DevButtonV1>
        </div>
      </div>
    </section>
  )
}

export default DevButtonV1Usage