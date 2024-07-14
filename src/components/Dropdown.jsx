import React, { useState } from 'react';

const Dropdown = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    const selected = options.find(option => option.value === selectedValue);
    setSelectedOption(selected);
    onSelect(selected);
  };

  return (
    <div className="dropdown">
      <select onChange={handleChange} className="dropdown-select" value={selectedOption ? selectedOption.value : ''}>
        <option value="" disabled>Select an option</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
