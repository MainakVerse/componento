'use client'
import React from 'react'
import { arrayMove, List } from 'react-movable';

const ReactMovable = ({ items, onChange }: { items: string[], onChange: (items: string[]) => void }) => {
    return (
        <List
            values={items}
            lockVertically
            onChange={({ oldIndex, newIndex }) =>
                onChange(arrayMove(items, oldIndex, newIndex))
            }
            renderList={({ children, props }) => <ul
                className='w-full h-full' {...props}>{children}</ul>}

            //List Items
            renderItem={({ value, props, isDragged }) => (<li
                {...props}
                style={{
                    ...props.style,
                    margin: '0.5em 0em',
                }}
                className={`${isDragged ? "cursor-grabbing bg-ACCENT" : "hover:!bg-ACCENT/20 bg-LIGHT dark:bg-DARK"} border cursor-grab list-none w-full p-4  border-ACCENT/30 shadow rounded-lg `}
            >
                {value}
            </li>)}
        />
    )
}

export default ReactMovable