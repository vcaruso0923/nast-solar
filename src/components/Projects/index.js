import React from 'react';

function Projects() {

    const photos = [
        {
            name: 'COVID-19 Data Hub',
            repo: 'https://github.com/tedpedersen/group-project-uc-berkeley',
            link: '=https://cvdatahub.com/',
            imagePath: `covid-data`,
        },
        {
            name: 'CA Critter Tracker',
            repo: 'https://github.com/vcaruso0923/california-critter-tracker',
            link: 'https://pure-scrubland-55089.herokuapp.com/',
            imagePath: 'critter-tracker',
        },
        {
            name: 'Oh Snap!',
            repo: 'https://github.com/vcaruso0923/photo-port',
            link: 'https://vcaruso0923.github.io/photo-port/',
            imagePath: 'oh-snap',
        },
        {
            name: 'Food Festival',
            repo: 'https://github.com/vcaruso0923/food-festival',
            link: 'https://vcaruso0923.github.io/food-festival/',
            imagePath: 'food-festival',
        },
        {
            name: 'Pizza Hunt',
            repo: 'https://github.com/vcaruso0923/pizza-hunt',
            link: 'https://radiant-forest-06641.herokuapp.com/',
            imagePath: 'pizza-hunt',
        },
        {
            name: 'Weather Dashboard',
            repo: 'https://github.com/vcaruso0923/weather-dashboard',
            link: 'https://vcaruso0923.github.io/weather-dashboard/',
            imagePath: 'weather-dashboard',
        }
    ]

    return (
        <div id="portfolio">
            {photos.map(imageInfo => (
                <div id="project" key={imageInfo.name}>
                        {/* <img
                            src={require(`../../assets/images/${imageInfo.imagePath}.PNG`)}
                            alt={imageInfo.name}
                            className="project-image"
                        /> */}
                    <div className="project-info">
                        <h3>{imageInfo.name}</h3>
                        <a className="custom-button" href={imageInfo.repo}>Github Links</a>
                        <a className="custom-button" href={imageInfo.link}>Website</a>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Projects;