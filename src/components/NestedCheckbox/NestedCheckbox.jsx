import React, { useState } from 'react'
import CheckboxNode from './CheckboxNode'

const data = [
    {
        label: "p1",
        children: [
            {
                label: "p1-c1",
                children: [
                    {
                        label: "p1-c1-c1"
                    },
                    {
                        label: "p1-c1-c2",
                        children: [
                            {
                                label: "p1-c1-c2-c1"
                            },
                            {
                                label: "p1-c1-c2-c2",
                                children: [
                                    {
                                        label: "p1-c1-c2-c2-c1"
                                    },
                                    {
                                        label: "p1-c1-c2-c2-c2"
                                    }
                                ]
                            },
                            {
                                label: "p1-c1-c2-c3"
                            }
                        ]
                    }
                ]
            },
            {
                label: "p1-c2"
            },
            {
                label: "p1-c3"
            }
        ]
    },
    {
        label: "p2",
        children: [
            {
                label: "p2-c1"
            },
            {
                label: "p2-c2"
            }
        ]
    },
    {
        label: "p3"
    }
]

const NestedCheckbox = () => {
    const [checkedMap, setCheckedMap] = useState({})

    return (
        <div>
          {data.map((node) => (
            <CheckboxNode
              key={node.label}
              node={node}
              checkedMap={checkedMap}
              setCheckedMap={setCheckedMap}
            />
          ))}
        </div>
    )
}

export default NestedCheckbox