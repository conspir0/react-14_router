import React from 'react';

const Article = ({ title, text, date }) => {
  return (
    <div className="article">
      <h2 className="article-title">
        {title}
      </h2>
      <div className="article-date">
        {date}
      </div>
      <p className="article-text">
        {text}
      </p>
    </div>
  );
}

export default Article;