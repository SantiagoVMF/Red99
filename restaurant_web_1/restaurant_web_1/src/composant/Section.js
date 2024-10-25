import React from 'react';
import Article from './Article';

const Section = () => {
    return (
        <section className="container my-5">
            <h2>Notre Histoire</h2>
            <Article title="Article 1" content="Ceci est un article indépendant qui parle de notre histoire. Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
            <Article title="Article 2" content="Ceci est un autre article indépendant. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        </section>
    );
};

export default Section;