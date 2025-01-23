import { useState } from "react"

const StarRating = () => {
    const stars = Array(5).fill("\u2605")
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
        {stars.map((star, index) => (
            <span key={index} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave} onClick = {() => {handleClick(index)}}>{(hovered !== null ? index <= hovered : index < rating) ? star : "\u2606"}</span>
        ))}
    </div>
  )
}

export default StarRating