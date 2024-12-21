import { useState } from "react";
import "./App.css";

function App() {
  const [tp, setTp] = useState(0);
  const [fp, setFp] = useState(0);
  const [fn, setFn] = useState(0);
  const [tn, setTn] = useState(0);
  const [results, setResults] = useState({
    accuracy: "...",
    precision: "...",
    recall: "...",
    f1Score: "...",
  });

  const calculateMetrics = () => {
    const total = tp + fp + fn + tn;
    const accuracy = total ? (tp + tn) / total : 0;
    const precision = tp + fp ? tp / (tp + fp) : 0;
    const recall = tp + fn ? tp / (tp + fn) : 0;
    const f1Score =
      precision + recall ? (2 * precision * recall) / (precision + recall) : 0;

    setResults({
      accuracy: accuracy.toFixed(3),
      precision: precision.toFixed(3),
      recall: recall.toFixed(3),
      f1Score: f1Score.toFixed(3),
    });
  };

  return (
    <div className="container">
      <h2>Confusion Matrix Metrics Calculator</h2>
      <div className="grid">
        <input
          type="number"
          placeholder="TP"
          onChange={(e) => setTp(Number(e.target.value) || 0)}
        />
        <input
          type="number"
          placeholder="FP"
          onChange={(e) => setFp(Number(e.target.value) || 0)}
        />
        <input
          type="number"
          placeholder="FN"
          onChange={(e) => setFn(Number(e.target.value) || 0)}
        />
        <input
          type="number"
          placeholder="TN"
          onChange={(e) => setTn(Number(e.target.value) || 0)}
        />
      </div>
      <button onClick={calculateMetrics}>Calculate</button>
      <div className="results">
        <p>
          <strong>Accuracy:</strong> {results.accuracy} or {results.accuracy * 100}%
        </p>
        <p>
          <strong>Precision:</strong> {results.precision} or {results.precision * 100}%
        </p>
        <p>
          <strong>Recall:</strong> {results.recall} or {results.recall * 100}%
        </p>
        <p>
          <strong>F1 Score:</strong> {results.f1Score} or {results.f1Score * 100}%
        </p>
      </div>
    </div>
  );
}

export default App;
