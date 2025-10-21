import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleShorten = async () => {
    if (!url) {
      alert("Please enter a URL!");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post("http://localhost:8001/url", { url });
      setShortUrl(`http://localhost:8001/${res.data.id}`);
    } catch (err) {
      alert("Error: " + err.response?.data?.error || err.message);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortUrl);
    alert("Copied to clipboard!");
  };

  return (
    <div className="container">
      <header className="header">
        <h2>SnapLink⚡</h2>
      </header>

      <main className="main">
        <h3 className="title">Shorten Your Links</h3>
        <div className="input-section">
          <input
            type="url"
            placeholder="Paste your long URL here..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button onClick={handleShorten} disabled={loading}>
            {loading ? "Shortening..." : "Shorten"}
          </button>
        </div>

        {shortUrl && (
          <div className="result-box">
            <p>
              <a href={shortUrl} target="_blank" rel="noreferrer">
                {shortUrl}
              </a>
            </p>
            <button onClick={copyToClipboard}>Copy</button>
          </div>
        )}
      </main>

      <footer className="footer">
        <p>Made by Nitin Raj</p>
      </footer>
    </div>
  );
}

export default App;
