import { sortedBabyNames } from "./BabyNames";

export const ListOfAllNames = () => {
  return (
    <ul>
      {sortedBabyNames.map((item, key) => {
        return item.sex === "f" ? (
          <p style={{ background: "pink" }}>{item.name}</p>
        ) : (
          <p>{item.name}</p>
        );
      })}
    </ul>
  );
};
