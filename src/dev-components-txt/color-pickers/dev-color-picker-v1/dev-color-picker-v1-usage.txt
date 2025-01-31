'use client'
import React, { useState } from 'react'
import DevColorPickerV1 from './dev-color-picker-v1'

const DevColorPickerV1Usage = () => {
    const [color, setColor] = useState('#E26F1D')
    return (
        <div className="p-5 rounded-md bg-LIGHT dark:bg-DARK">
            <DevColorPickerV1 color={color} setColor={setColor} />
        </div>
    )
}

export default DevColorPickerV1Usage
