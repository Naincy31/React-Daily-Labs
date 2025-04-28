import React, { useState } from 'react'
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

const FileNode = ({node, fileStructure, setFileStructure, expanded, toggleExpanded}) => {

    const [isHovered, setIsHovered] = useState(false)
    const [isEditing, setIsEditing] = useState(false);
    const [newLabel, setNewLabel] = useState(node.label);

    const handleClick = () => {
      if(node.type === "folder"){
        toggleExpanded(node.label)
      }

    }

    const insertNode = (tree, folderLabel, newNode) => {
      if (tree.label === folderLabel && tree.type === 'folder') {
        return {
          ...tree,
          children: tree.children ? [...tree.children, newNode] : [newNode],
        };
      }

      if (tree.children) {
        const updatedChildren = tree.children.map((child) =>
          insertNode(child, folderLabel, newNode)
        );
        return { ...tree, children: updatedChildren };
      }

      return tree;
    }

    const deleteNode = (tree, labelToDelete) => {
      if (!tree.children) return tree;

      const filteredChildren = tree.children
        .filter((child) => child.label !== labelToDelete)
        .map((child) => deleteNode(child, labelToDelete));

      return { ...tree, children: filteredChildren };
    }

    const renameNode = (tree, labelToRename, newLabel) => {
      if (tree.label === labelToRename) {
        return { ...tree, label: newLabel }
      }
    
      if (tree.children) {
        const updatedChildren = tree.children.map(child => renameNode(child, labelToRename, newLabel))
        return { ...tree, children: updatedChildren }
      }
    
      return tree
    }

    const handleDocClick = (e) => {
      e.stopPropagation()
      const newFolder = {
        label: `New Folder ${Date.now()}`, 
        type: "folder",
        children: []
      };
      const updatedStructure = insertNode(fileStructure[0], node.label, newFolder)
      setFileStructure([updatedStructure])
    }
    
    const handleFileClick = (e) => {
      e.stopPropagation()
      const newFile = {
        label: `New File ${Date.now()}.txt`,
        type: "txt"
      };
      const updatedStructure = insertNode(fileStructure[0], node.label, newFile)
      setFileStructure([updatedStructure])
    }
    
    const handleDelete = (e) => {
      e.stopPropagation();
      const updatedStructure = deleteNode(fileStructure[0], node.label)
      setFileStructure([updatedStructure])
    }
    
    const handleEdit = (e) => {
      e.stopPropagation()
      setIsEditing(true)
    }

    const handleRenameSubmit = () => {
      if(newLabel.trim() !== ''){
        const updatedStructure = renameNode(fileStructure, node.label, newLabel.trim())
        setFileStructure(updatedStructure)
      }
      setIsEditing(false)
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
        handleRenameSubmit()
      } else if (e.key === 'Escape') {
        setIsEditing(false)
        setNewLabel(node.label)
      }
    }

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
            {isEditing ? (
              <input
                type="text"
                value={newLabel}
                autoFocus
                onChange={(e) => setNewLabel(e.target.value)}
                onBlur={handleRenameSubmit}
                onKeyDown={handleKeyDown}
                style={{
                  fontSize: "14px",
                  padding: "2px 4px",
                  borderRadius: "4px",
                  border: "1px solid gray"
                }}
              />
            ) : (
              <p>{node.label}</p>
            )}

            <div className='functional-icons' style={{marginLeft: '15px', display: 'flex', alignItems: 'center', gap: '8px'}}>
              {isHovered && (
                <>
                  {/* Root Folder */}
                  {node.type === 'folder' && node.label === 'root' && (
                    <>
                      <img src={newDoc} alt='folder' width={15} height={15} onClick={handleDocClick}/>
                      <img src={newFile} alt='file' width={15} height={15} onClick={handleFileClick}/>
                    </>
                  )}

                  {/** Other Folders */}
                  {node.type === 'folder' && node.label !== 'root' && (
                    <>
                      <p onClick={handleEdit} style={{ fontSize: "10px", cursor: 'pointer' }}>✏️</p>
                      <p onClick={handleDelete} style={{ fontSize: "10px", cursor: 'pointer' }}>🗑️</p>
                      <img src={newDoc} alt='folder' width={15} height={15} onClick={handleDocClick}/>
                      <img src={newFile} alt='file' width={15} height={15} onClick={handleFileClick}/>
                    </>
                  )}

                  {/** Files */}
                  {node.type !== 'folder' && (
                    <>
                      <p onClick={handleEdit} style={{ fontSize: "10px", cursor: 'pointer' }}>✏️</p>
                      <p onClick={handleDelete} style={{ fontSize: "10px", cursor: 'pointer' }}>🗑️</p>
                    </>
                  )}

                </>
              )}
            </div>
        </div>
        {node.type === 'folder' && expanded[node.label] && node.children && (
          node.children.map((childNode) => (
            <FileNode
              key={childNode.label}
              node={childNode}
              fileStructure={fileStructure}
              setFileStructure={setFileStructure}
              expanded = {expanded}
              toggleExpanded = {toggleExpanded}
            />
          ))
        )}
    </div>
  )
}

export default FileNode