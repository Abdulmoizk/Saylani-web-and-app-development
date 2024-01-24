import React, { useState } from 'react';
import { Select } from 'antd';
const OPTIONS = ['Apples', 'Nails', 'Bananas', 'Helicopters'];
const SearchDropdown = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o));
  return (
    <Select
      mode="single"
      placeholder="Inserted are removed"
      value={selectedItems}
size='large'
      onChange={setSelectedItems}
      style={{
        width: '100%',
      }}
      options={filteredOptions.map((item) => ({
        value: item,
        label: item,
      }))}
    />
  );
};
export default SearchDropdown;