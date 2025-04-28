import React, { useState } from 'react'
import FileNode from './FileNode'

const data = [
    {
        label: "root",
        type: "folder",
        children: [
            {
                label: "public",
                type: "folder",
                children: [
                    {
                        label: "images",
                        type: "folder"
                    },
                    {
                        label: "public_nested_file",
                        type: "txt"
                    }
                ]
            },
            {
                label: "src",
                type: "folder"
            },
            {
                label: "dist",
                type: "folder",
                children: [
                    {
                        label: "index.js",
                        type: "js"
                    },
                    {
                        label: "index.html",
                        type: "html"
                    },
                    {
                        label: "index.css",
                        type: "css"
                    }
                ]
            },
            {
                label: "package.json",
                type: "json"
            },
            {
                label: "package-lock.json",
                type: "json"
            },
        ]
    }
]

const FileExplorer = () => {

    const [fileStructure, setFileStructure] = useState(data)
    const [expanded, setExpanded] = useState({})

    const toggleExpanded = (label) => {
        setExpanded((prev) => ({
        ...prev,
        [label]: !prev[label], 
        }))
    }

  return (
    <div>
        {
            fileStructure.map((node, index) => (
                <FileNode
                    key = {`${node.label}-${index}`}
                    node = {node}
                    fileStructure = {fileStructure}
                    setFileStructure = {setFileStructure}
                    expanded = {expanded}
                    toggleExpanded = {toggleExpanded}
                />
            ))
        }
    </div>
  )
}

export default FileExplorer