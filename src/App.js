import React, { useState } from 'react';
import './App.css';

import ReactMarkdown from 'react-markdown';

export default function App() {
  const [markDown, usemarkdown] = useState(
    '**Bold me like this  and see below**'
  );
  return (
    <div className="App">
      <textarea
        className="input"
        cols="30"
        rows="10"
        value={markDown}
        onChange={(e) => {
          usemarkdown(e.target.value);
        }}
      ></textarea>

      <section className="result">
        <ReactMarkdown>{markDown}</ReactMarkdown>
      </section>
    </div>
  );
}
