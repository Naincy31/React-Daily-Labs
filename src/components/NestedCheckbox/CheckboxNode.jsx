import React, { useEffect, useRef } from "react";

const CheckboxNode = ({ node, checkedMap, setCheckedMap }) => {
  const checkboxRef = useRef();

  const isChecked = checkedMap[node.label] === true;
  const isIndeterminate = checkedMap[node.label] === "indeterminate";

  const handleChange = (e) => {
    const newChecked = e.target.checked;
    const updatedMap = { ...checkedMap };

    const toggleChildren = (n, checked) => {
      updatedMap[n.label] = checked;
      n.children?.forEach((child) => toggleChildren(child, checked));
    };

    toggleChildren(node, newChecked);
    setCheckedMap(updatedMap);
  };

  useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.indeterminate = isIndeterminate;
    }
  }, [isIndeterminate]);

  // update parent indeterminate state
  useEffect(() => {
    if (!node.children) return;

    const checkChildrenState = (n) => {
      if (!n.children) return [checkedMap[n.label]];

      return n.children.flatMap((child) => checkChildrenState(child));
    };

    const childStates = node.children.flatMap((child) =>
      checkChildrenState(child)
    );

    const allTrue = childStates.every((val) => val === true);
    const allFalse = childStates.every((val) => val === false || val === undefined);

    if (allTrue) {
      checkedMap[node.label] = true;
    } else if (allFalse) {
      checkedMap[node.label] = false;
    } else {
      checkedMap[node.label] = "indeterminate";
    }

    setCheckedMap({ ...checkedMap });
  }, [checkedMap, node.children]);

  return (
    <div style={{ marginLeft: 20 }}>
      <label>
        <input
          type="checkbox"
          ref={checkboxRef}
          checked={isChecked}
          onChange={handleChange}
        />
        {node.label}
      </label>
      {node.children?.map((child) => (
        <CheckboxNode
          key={child.label}
          node={child}
          checkedMap={checkedMap}
          setCheckedMap={setCheckedMap}
        />
      ))}
    </div>
  );
};

export default CheckboxNode