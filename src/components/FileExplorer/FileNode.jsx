import React, { useEffect, useState } from 'react'
import html from './icons/html.png'
import css from './icons/css.png'
import folder from './icons/folder.png'
import js from "./icons/js.png"
import json from "./icons/json-file.png"
import txt from "./icons/text.png"
import newFile from "./icons/new-document.png"
import newDoc from "./icons/new-folder.png"

const typeToIcon = {
    html: html,
    css: css,
    folder: folder,
    js: js,
    json: json,
    txt: txt
  }

const FileNode = ({node, fileStructure, setFileStructure}) => {

    const [expanded, setExpanded] = useState({})
    const [isHovered, setIsHovered] = useState(false)

    const handleClick = () => {
      if(node.type === "folder"){
        setExpanded(prev => ({
          ...prev,
          [node.label]: !prev[node.label]
        }))
      }

    }

    useEffect(() => {
      if(node.type === 'folder'){
        setExpanded(prev => ({
          ...prev,
          [node.label]: false
        }))
      }

    }, [node])

  return (
    <div style={{marginLeft: '20px'}}>
        <div 
          className='node-detail' 
          onClick={handleClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)} 
          style={{
            display: 'flex', 
            gap: '8px', 
            alignItems: 'center', 
            cursor: `${node.type === 'folder' ? 'pointer' : ''}`
          }}
        >
            <img src={typeToIcon[node.type]} alt={node.type} width={20} height={20}/>
            <p>{node.label}</p>
            <div className='functional-icons' style={{marginLeft: '15px', display: 'flex', alignItems: 'center', gap: '8px'}}>
              {isHovered && node.type === 'folder' 
                && 
                <>
                  <img src={newDoc} alt='folder' width={15} height={15} />
                  <img src={newFile} alt='file' width={15} height={15} />
                </>
              }
            </div>
        </div>
        {node.type === 'folder' && expanded[node.label] && node.children && (
          node.children.map((childNode) => (
            <FileNode
              key={childNode.label}
              node={childNode}
              fileStructure={fileStructure}
              setFileStructure={fileStructure}
            />
          ))
        )}
    </div>
  )
}

export default FileNode