import React from 'react';

const Article = ({ title, content }) => {
    return (
        <article className="mb-4">
            <h3>{title}</h3>
            <p>{content}</p>
        </article>
    );
};

export default Article;