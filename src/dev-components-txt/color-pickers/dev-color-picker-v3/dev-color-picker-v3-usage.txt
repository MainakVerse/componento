'use client'
import React from 'react'
import DevColorPickerV3 from './dev-color-picker-v3'

const DevColorPickerV3Usage = () => {
    return (
        <div className="p-5 rounded-md bg-LIGHT dark:bg-DARK">
            <DevColorPickerV3 defaultColor={{ hex: "#E26F1D" }} onChange={(e) => console.log(e)} />
        </div>
    )
}

export default DevColorPickerV3Usage

