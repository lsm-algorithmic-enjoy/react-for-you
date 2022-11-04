import { useEffect, useState } from "react";

function App() {
  const [loading, SetLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState(0);
  const reset = () => setMoney(0);
  const onChange = (event) => {
    setMoney(event.target.value);
  };
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        SetLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `How many Coins? (${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <label htmlFor="$">$</label>
          <input
            id="$"
            value={money}
            placeholder="Dollars"
            type="number"
            onChange={onChange}
          />
          <select>
            {coins.map((coin) => (
              <option>
                {coin.name} ({coin.symbol}): {money / coin.quotes.USD.price}
              </option>
            ))}
          </select>
          <button onClick={reset}>Reset</button>
        </div>
      )}
    </div>
  );
}

export default App;
