import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function App() {
  const [markDown, useMarkdown] = useState('');
  return (
    <main>
      <section className="markdown">
        <textarea
          className="input"
          value={markDown}
          onChange={(e) => useMarkdown(e.target.value)}
        ></textarea>
        <article className="result">
          <ReactMarkdown>{markDown}</ReactMarkdown>
        </article>
      </section>
    </main>
  );
}
