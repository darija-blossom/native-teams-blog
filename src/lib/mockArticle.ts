export function generateMockHtml(abstract: string) {
  return `
    <p>${abstract}</p>

    <h2>The Bigger Picture</h2>
    <p>
      In a world constantly changing, stories like this remind us of the deeper
      forces shaping our collective future. Experts say this marks a key moment
      for innovation and awareness.
    </p>

    <br/>

    <figure>
      <img src="/assets/placeholder.png" alt="Article illustration" />
      <figcaption>Image: Placeholder for visual context</figcaption>
    </figure>

    <br/>

    <p>
      While this event has captured attention globally, its local impact will
      continue to unfold in the coming months. Analysts expect both challenges
      and opportunities ahead.
    </p>

    <br/>

    <blockquote>
      “We’re witnessing an unprecedented shift,” said one industry insider.
    </blockquote>

    <br/>

    <h3>What Comes Next</h3>
    <p>
      Moving forward, the implications of this development will extend beyond
      immediate headlines. It reflects a broader trend — one that will shape
      decisions in technology, culture, and policy alike.
    </p>

    <br/>

    <ul>
      <li>Background and context</li>
      <li>Expert perspectives</li>
      <li>Potential outcomes</li>
    </ul>

    <br/>

    <p>
      For a complete report, visit
      <a href="https://www.nytimes.com" target="_blank" rel="noopener noreferrer">
        The New York Times
      </a>.
    </p>
  `;
}
