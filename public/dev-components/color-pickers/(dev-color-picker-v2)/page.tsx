'use client'
import React, { useState } from 'react'
import DevColorPickerV2 from './dev-color-picker-v2';

const DevColorPickerV2Usage = () => {
    const [color, setColor] = useState({ hexa: "#E26F1D" })
    return (
        <div className="p-5 rounded-md bg-LIGHT dark:bg-DARK">
            <DevColorPickerV2 color={color} setColor={setColor}  />
        </div>
    )
}

export default DevColorPickerV2Usage

