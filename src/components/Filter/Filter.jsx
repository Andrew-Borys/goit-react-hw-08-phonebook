import { useState } from 'react';
import { nanoid } from 'nanoid';
import ContactList from 'components/ContactList';
import { Input } from 'Pages/RegisterPage/RegisterPage.styled';

const Filter = () => {
  const filterInputId = nanoid();
  const [filterValue, setFilterValue] = useState('');

  const onChange = e => {
    setFilterValue(e.target.value);
  };

  return (
    <>
      <Input
        fullWidth
        id={filterInputId}
        name="filter"
        label="Find contact by name..."
        onChange={onChange}
        placeholder="Enter contact name..."
      />
      <ContactList filter={filterValue} />
    </>
  );
};

export default Filter;
