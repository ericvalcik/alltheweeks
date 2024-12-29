import "./App.css";

const days = 9037;
const maxWeeks = 4174;

const myWeeks = Math.floor(days / 7);
const rows = Math.ceil(maxWeeks / 52);

const App = () => {
  return Array.from({ length: rows }).map((_, i) => {
    const weeks = i === 80 ? 14 : 52;
    return (
      <div className="row">
        {Array.from({ length: weeks }).map((_, j) => {
          const currentWeek = i * 52 + j;
          return (
            <div
              className={`week ${currentWeek < myWeeks ? "filled" : ""} ${j % 4 === 3 ? "padded-right" : ""}`}
            ></div>
          );
        })}
      </div>
    );
  });
};

export default App;
