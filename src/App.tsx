import "./App.css";

function daysSince(date: Date): number {
  // Get the current date
  const today = new Date();

  // Calculate the difference in milliseconds
  const differenceInMs = today.getTime() - date.getTime();

  // Convert milliseconds to days
  const differenceInDays = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));

  return differenceInDays;
}

const bornDate = new Date("2000-04-02");

const days = daysSince(bornDate);
const maxWeeks = 4174;
const maxDays = 29218;

const myWeeks = Math.floor(days / 7);
const rows = Math.ceil(maxWeeks / 52);

const App = () => {
  return (
    <>
      {Array.from({ length: rows }).map((_, i) => {
        const weeks = i === 80 ? 14 : 52;
        return (
          <div className="row">
            {i % 5 === 0 ? (
              <div className="year-callout--container">
                <div className="year-callout">{i}</div>
              </div>
            ) : null}
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
      })}
      <div className="footer">
        approx {Math.floor((days / maxDays) * 10000) / 100} % done:)
      </div>
    </>
  );
};

export default App;
