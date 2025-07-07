import { useEffect, useState } from 'react';

function Chips() {
  const [chips, setChips] = useState(() => {
    const saved = localStorage.getItem('chips');
    return saved ? JSON.parse(saved) : [];
  })

  const [input, setInput] = useState('')

  useEffect(() => {
    localStorage.setItem('chips', JSON.stringify(chips));
  }, [chips]);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && input.trim() !== '') {
      setChips((prev) => [...prev, { id: Date.now(), text: input.trim() }])
      setInput('')
    }
  }

  const deleteChip = (chip_id) => {
    setChips(chips.filter(chip => chip.id !== chip_id))
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "40px 0" }}>
      <h2>Chips Input</h2>
      <input
        type="text"
        placeholder="Type a chip and press tag"
        style={{ padding: "8px", width: "200px" }}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      {chips.length > 0 && (
        <div className='chips-container'>
          {chips.map((chip, index) => (
            <div className='chip' key={`${index}-${chip.text}`}>
              <p data-testid={`chip-text-${chip.id}`}>{chip.text}</p>
              <span className='chip-delete-btn' onClick={() => deleteChip(chip.id)}>X</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Chips;