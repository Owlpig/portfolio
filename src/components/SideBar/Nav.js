import React from 'react';
import { Link } from 'gatsby';

export default function Nav({ sections = [] }) {
  return (
    <nav id="nav">
      <ul>
        {sections.map(s => {
          return (
            <li key={s.id}>
              <Link to={`../${s.id}`} type="id" element={s.id} activeClassName='active' id="top-link">
                <span className={`icon ${s.icon}`}>{s.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
