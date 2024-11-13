import { useState, useEffect } from "react";

const ColumnTable = () => {
  const [rangeValue, setRangeValue] = useState({ rows: 0, columns: 0 });
  const [matrix, setMatrix] = useState([]);

  const handleChange = (e, type) => {
    setRangeValue((prev) => ({ ...prev, [type]: Number(e.target.value) }));
  };

  // Function to create a matrix with alternating direction filling
  const createMatrix = (rows, columns) => {
    const actualRows = 2 + rows; // Start with 2 base rows
    const actualColumns = 2 + columns; // Start with 2 base columns

    const matrix = Array.from({ length: actualRows }, () => []);
    let count = 1;
    let direction = 1;
    let rowIndex = 0;
    let columnIndex = 0;

    while (columnIndex < actualColumns) {
      while (rowIndex >= 0 && rowIndex < actualRows) {
        matrix[rowIndex][columnIndex] = count++;
        rowIndex += direction;
      }
      direction *= -1;
      rowIndex += direction;
      columnIndex += 1;
    }

    return matrix;
  };

  // Update matrix whenever rows or columns change
  useEffect(() => {
    const { rows, columns } = rangeValue;
    const newMatrix = createMatrix(rows, columns);
    setMatrix(newMatrix);
  }, [rangeValue]);

  return (
    <div className="column-table">
      <div className="rows-columns">
        <div className="rows">
          <label>Rows</label>
          <input
            type="range"
            min={0}
            max={6}
            value={rangeValue.rows}
            onChange={(e) => handleChange(e, "rows")}
          />
        </div>
        <div className="columns">
          <label>Columns</label>
          <input
            type="range"
            min={0}
            max={6}
            value={rangeValue.columns}
            onChange={(e) => handleChange(e, "columns")}
          />
        </div>
      </div>
      <table>
        <tbody className="table-body">
          {matrix.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j} className="cell">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ColumnTable;
