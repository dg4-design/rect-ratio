const App = () => {
  const [value, setValue] = React.useState(0);
  const [result, setResult] = React.useState([]);

  const doCalculation = (n) => {
    const findMultiPairs = (target) => {
      const pairs = [];
      for (let i = 1; i <= target; i++) {
        for (let j = 1; j <= target; j++) {
          if (i * j === target && i <= j) {
            pairs.push([i, j]);
          }
        }
      }
      return pairs;
    };

    const arrayToPercentage = (array) => {
      const base = 80;
      const percentageResult = array.map((innerArr) => innerArr.map((num) => (num / innerArr[1]) * base));

      return percentageResult.map((pair) => {
        const color = `rgb(${~~(Math.random() * 255)}, ${~~(Math.random() * 255)}, ${~~(Math.random() * 255)})`;
        return {
          height: `${pair[0]}vh`,
          width: `${pair[1]}vh`,
          border: "2px solid",
          color: color,
        };
      });
    };

    const findMultiPairsPercentage = (num) => {
      return arrayToPercentage(findMultiPairs(num));
    };

    return (
      <div className="output">
        {findMultiPairsPercentage(n).map((style, i) => {
          return (
            <div
              style={{
                ...style,
                position: "absolute",
              }}
              key={i}
            >
              {findMultiPairs(n)[i].join(":")}
            </div>
          );
        })}
      </div>
    );
  };

  const handleChange = (event) => {
    const newValue = parseFloat(event.target.value);
    setValue(newValue);
    setResult(doCalculation(newValue));
  };

  return (
    <div className="container">
      <div className="formChunk">
        <input className="input" type="number" min="1" onChange={handleChange} />
      </div>
      {result}
    </div>
  );
};

const target = document.querySelector("#app");
const root = ReactDOM.createRoot(target);
root.render(<App />);
