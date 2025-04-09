import { useEffect, useState } from "react"

const StringTransform = () => {
    const [ stringValue, setStringValue ] = useState("this is a normal sentence to transform")
    const [ boxText, setBoxText ] = useState(stringValue)
    
    const handleChange = (e) => {
        setStringValue(e.target.value)
    }

    useEffect(() => {
        setBoxText(stringValue)
    }, [stringValue])

    // Safely handle empty boxText by adding conditional checks
    const toLowerCase = (text) => text ? text.toLowerCase() : "";
    const toUpperCase = (text) => text ? text.toUpperCase() : "";
    const toCamelCase = (text) => 
        text 
            ? text
                .toLowerCase()
                .split(" ")
                .map((word, index) => (index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)))
                .join("")
            : "";
    const toPascalCase = (text) => 
        text 
            ? text
                .split(" ")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join("")
            : "";
    const toSnakeCase = (text) => text ? text.replace(/ /g, "_") : "";
    const toKebabCase = (text) => text ? text.replace(/ /g, "-") : "";
    const toTrimmed = (text) => text ? text.replace(/ /g, "") : "";


  return (
    <div className="String">
        <h1>String Transformer</h1>
        <input type="text" value={stringValue} placeholder="enter the sentence with spaces (alphanumeric)" onChange={handleChange}/>
        <div className="box">
            <span className="label">Lower Case</span>
            <p>{toLowerCase(boxText)}</p>
        </div>
        <div className="box">
            <span className="label">Upper Case</span>
            <p>{toUpperCase(boxText)}</p>
        </div>
        <div className="box">
            <span className="label">Camel Case</span>
            <p>{toCamelCase(boxText)}</p>
        </div>
        <div className="box">
            <span className="label">Pascal Case</span>
            <p>{toPascalCase(boxText)}</p>
        </div>
        <div className="box">
            <span className="label">Snake Case</span>
            <p>{toSnakeCase(boxText)}</p>
        </div>
        <div className="box">
            <span className="label">Kebab Case</span>
            <p>{toKebabCase(boxText)}</p>
        </div>
        <div className="box">
            <span className="label">Trim</span>
            <p>{toTrimmed(boxText)}</p>
        </div>
    </div>

  )
}

export default StringTransform