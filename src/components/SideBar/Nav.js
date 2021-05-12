import React from 'react';
import Scrollspy from 'react-scrollspy';
import { Link } from 'gatsby';

export default function Nav({ sections = [] }) {
  return (
    <nav id="nav">
      <ul>
        <Scrollspy
          items={sections.map(s => s.id)}
          currentClassName="active"
          offset={-300}
        >
          {sections.map(s => {
            return (
              <li key={s.id}>
                <Link type="id" element={s.id}>
                  <a href={`#${s.id}`} id="top-link">
                    <span className={`icon ${s.icon}`}>{s.name}</span>
                  </a>
                </Link>
              </li>
            );
          })}
        </Scrollspy>
      </ul>
    </nav>
  );
}
