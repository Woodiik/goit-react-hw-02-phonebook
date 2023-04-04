import { FilterInput, Label } from './Filter.styled';

export const Filter = ({ filter, onChange }) => {
  return (
    <Label>
      Find contacts by name:
      <FilterInput
        type="text"
        name="filter"
        value={filter}
        onChange={onChange}
      />
    </Label>
  );
};
