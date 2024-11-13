import { useState } from "react";

const Toast = () => {
    const [inputValue, setInputValue] = useState("This is a toast message");
    const [message, setMessage] = useState(null);
    const [position, setPosition] = useState({ horizontal: "Left", vertical: "Bottom" });
    const [status, setStatus] = useState("Warning");
    const [ duration, setDuration ] = useState(3)

    // Temporary states for dropdown selections
    const [selectedPosition, setSelectedPosition] = useState({ horizontal: "Left", vertical: "Bottom" });
    const [selectedStatus, setSelectedStatus] = useState("Warning");

    // Update input value
    const handleChange = (e) => setInputValue(e.target.value);

    // Set message and apply selected settings
    const handleClick = () => {
        setMessage(inputValue);
        setPosition(selectedPosition);
        setStatus(selectedStatus);

        setTimeout(() => {
            setMessage(null)
        }, duration * 1000)
    };

    // Handle dropdown changes
    const handlePositionChange = (e, type) => {
        setSelectedPosition((prev) => ({ ...prev, [type]: e.target.value }));
    };

    const handleStatusChange = (e) => setSelectedStatus(e.target.value);

    // Return dynamic styles based on status
    const getStatusStyles = (status) => {
        const statusStyles = {
            Success: { backgroundColor: "rgba(0, 128, 0, 0.1)", color: "rgb(0, 128, 0)" },
            Error: { backgroundColor: "rgba(255, 0, 0, 0.1)", color: "rgb(255, 0, 0)" },
            Warning: { backgroundColor: "rgba(255, 165, 0, 0.1)", color: "rgb(255, 165, 0)" },
            Info: { backgroundColor: "rgba(0, 0, 255, 0.1)", color: "rgb(0, 0, 255)" },
            Normal: { backgroundColor: "rgba(128, 128, 128, 0.1)", color: "rgb(128, 128, 128)" },
        };
        return statusStyles[status] || statusStyles.Normal;
    };

    // Apply styles based on the position and status
    const toastStyles = {
        position: "fixed",
        top: position.vertical === "Top" ? "15px" : "unset",
        bottom: position.vertical === "Bottom" ? "15px" : "unset",
        left: position.horizontal === "Left" ? "15px" : "unset",
        right: position.horizontal === "Right" ? "15px" : "unset",
        ...getStatusStyles(status),
        padding: "10px 5px",
        textAlign: "center",
    };

    return (
        <div className="Toast">
            {message && <div className="message" style={toastStyles}>{message}</div>}

            <select value={selectedPosition.horizontal} onChange={(e) => handlePositionChange(e, "horizontal")}>
                <option value="Left">Left</option>
                <option value="Right">Right</option>
            </select>

            <select value={selectedPosition.vertical} onChange={(e) => handlePositionChange(e, "vertical")}>
                <option value="Top">Top</option>
                <option value="Bottom">Bottom</option>
            </select>

            <select value={selectedStatus} onChange={handleStatusChange}>
                <option value="Normal">Normal</option>
                <option value="Success">Success</option>
                <option value="Error">Error</option>
                <option value="Warning">Warning</option>
                <option value="Info">Info</option>
            </select>

            <input type="text" placeholder="Message" value={inputValue} onChange={handleChange} />

            <div className="duration-slider">
                <label>Duration: {duration}s</label>
                <input
                    type="range"
                    min="3"
                    max="10"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                />
            </div>

            <button onClick={handleClick} disabled={!inputValue}>Show Toast</button>
        </div>
    );
};

export default Toast;
