import React from 'react';
import './MySection.less';

export default function MySection({ section }) {
  return (
    <section>
      <h3>{section.heading}</h3>
      <p>{section.content}</p>
      {
        section.imageUrl && <img src={section.imageUrl} alt="cat" />
      }
    </section>
  );
}