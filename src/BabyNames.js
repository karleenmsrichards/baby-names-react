import { ArrayOfBabyNames } from "./ArrayOfBabyNames";
import { ListOfAllNames } from "./ListOfAllNames";
import { useState } from "react";

export const BabyNames = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const FilteredNames = () => {
    return (
      <ul>
        {sortedBabyNames
          .filter((item) =>
            item.name.toLowerCase().includes(inputValue.toLowerCase())
          )
          .map((item) => {
            return item.sex === "f" ? (
              <p style={{ background: "#91f5cd" }}>{item.name}</p>
            ) : (
              <p style={{ background: "#36a47c" }}>{item.name}</p>
            );
          })}
      </ul>
    );
  };

  return (
    <div className="namesWrapper">
      <input type="text" onChange={handleInputChange} />
      <label>Search</label>
      {inputValue === "" ? <ListOfAllNames /> : <FilteredNames />}
    </div>
  );
};

export const sortedBabyNames = ArrayOfBabyNames.sort((a, b) => {
  let fa = a.name,
    fb = b.name;

  if (fa < fb) {
    return -1;
  }
  if (fa > fb) {
    return 1;
  }
  return 0;
});
