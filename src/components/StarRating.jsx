import { useState, useMemo } from "react"

const StarRating = () => {
    const total = 5
    const stars = useMemo(() => Array(total).fill(null), [total])
    const [rating, setRating] = useState(2)
    const [hovered, setHovered] = useState(null)

    const handleMouseEnter = (index) => {
        setHovered(index)
    }

    const handleMouseLeave = () => {
        setHovered(null)
    }

    const handleClick = (index) => {
        setRating(index + 1)
    }

  return (
    <div className="star-rating">
        {stars.map((_, index) => (
            <span key={index} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave} onClick = {() => {handleClick(index)}}>{(hovered !== null ? index <= hovered : index < rating) ? "\u2605" : "\u2606"}</span>
        ))}
    </div>
  )
}

export default StarRating