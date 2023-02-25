import { ArrayOfBabyNames } from "./ArrayOfBabyNames";

export const BabyNames = () => {
  return (
    <div class="namesWrapper">
      {sortedBabyNames
        .sort((a, b) => a.name - b.name)
        .map((item) => {
          // if (item.sex === "f") {
          //   return <h1 style={{ color: "pink" }}>{item.name}</h1>;
          // } else {
          //   return <h1 style={{ color: "blue" }}>{item.name}</h1>;
          // }
          return item.sex === "f" ? (
            <p style={{ background: "#91f5cd" }}>Girl power... {item.name}</p>
          ) : (
            <p style={{ background: "#f9dda3" }}>{item.name}</p>
          );
        })}
    </div>
  );
};

const sortedBabyNames = ArrayOfBabyNames.sort((a, b) => {
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
