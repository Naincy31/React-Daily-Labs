import React, { useEffect, useState } from 'react'
import './ProgressBar.css'

const ProgressBar = () => {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prevProgress => {
                const newProgress = prevProgress + 10
                if (newProgress <= 100) {
                    return newProgress
                } else {
                    clearInterval(interval)
                    return prevProgress
                }
            })
        }, 1000)
        return () => clearInterval(interval)
    }, [])


  return (
    <div>
        <h2>Progress Bar</h2>
        <div className='progress'>
            <div className='progress-bar' style={{width: `${progress}%`}}></div>
        </div>
    </div>
  )
}

export default ProgressBar