import React from 'react';

const AboutSlugPages = async({params}) => {
    console.log(params)
    return (
        <div>
            AboutSlugPages - {params.slug}
        </div>
    );
};

export default AboutSlugPages;