import React from 'react';

function About() {

    return (
        <div className="about-wrapper">
            <div className="background-wrapper">
                <div className="background-child">
                    <img
                        src={require(`../../assets/images/headshot.jpg`)}
                        alt='Jared Nast Headshot'
                        className="background-image"
                    ></img>
                    <div className="background-child-text">
                        <h3>
                            My Background
                        </h3>
                        <p>
                            Hello! My name is Jared Nast and I am passionate about the environment and energy. I am helping customers switch to solar in order to save them money as well as mitigate human impacts on climate change.
                        </p>
                        <p>
                            With my gained experience, I aim to work on energy infrastructure in developing countries, helping them reach energy equality through localized clean power production.
                        </p>
                    </div>
                </div>

                <div className="background-child">
                    <img
                        src={require(`../../assets/images/snorkel.jpg`)}
                        alt='Jared Nast snorkeling holding National Geographic Society banner'
                        className="background-image"
                    ></img>
                    <div className="background-child-text">
                        <h3>
                            Early Years
                        </h3>
                        <p>
                            I grew up in a suburb of Boston, MA, a town called Wellesley. I was very fortunate to have the privilege of traveling at a young age: scuba diving in Belize, hiking volcanoes in Costa Rica, and skiing the colossal mountains of Utah. These experiences formed my love for the natural world and a passion to help preserve it.
                        </p>
                    </div>
                </div>

                <div className="background-child">
                    <img
                        src={require(`../../assets/images/ski.jpg`)}
                        alt='Jared Nast skiing in Colorado'
                        className="background-image"
                    ></img>
                    <div className="background-child-text">
                        <h3>
                            College
                        </h3>
                        <p>
                            After graduating high school in 2016, I started my next     journey as a college student at the University of Colorado, Boulder. I declared an Environmental Studies major upon entering and was extremely happy in my choice. From basic weather patterns to the complexities of wind turbines, I soaked up every bit of education that Boulder offered me.
                        </p>
                        <p>
                            Around junior year I found my passion in renewable energies, fascinated by how they operate and the potential they hold in solving world problems, both social and environmental.
                        </p>
                    </div>
                </div>

                <div className="background-child">
                    <img
                        src={require(`../../assets/images/canyon.jpg`)}
                        alt='Jared Nast at the Grand Canyon'
                        className="background-image"
                    ></img>
                    <div className="background-child-text">
                        <h3>
                            Present Day
                        </h3>
                        <p>
                            Four years later, in May of 2020, I was told through a computer screen that I graduated and it was time to start working. In the midst of a pandemic, nothing was clear. However, I knew I wanted to work with renewables and I knew I wanted to help people realize the importance of clean energy.
                        </p>
                        <p>
                            With the help of Solar Energy Partners, I have started Nast Solar to shine light on the need for renewable energy as a global society. Not only do our investments help reduce the barrier of entry for developing countries, they promote a healthy future for generation to come.
                        </p>
                    </div>
                </div>
            </div>



            <div className="partners-wrapper">
                <div className="partners-text">
                    <h2>
                        Partnerships
                    </h2>
                    <p>
                        Nast Solar was formed through the partnerships of Solar Energy Partners, Lift Energy, and Bright Planet Solar. Through these powerful companies, Nast Solar is able to use its network and outreach tactics to further the solar success of all of its partners.
                    </p>
                    <p>
                        Nast Solar has the vision of saving customers 25% on electricity in their first year and 50% savings over the lifetime of a system.
                    </p>
                </div>
                <div className="partners-images-wrapper">
                    <img
                        src={require(`../../assets/images/lift.PNG`)}
                        alt='Lift Energy truck'
                        className="partners-image"
                    ></img>
                    <img
                        src={require(`../../assets/images/sep.PNG`)}
                        alt='Solar Enery Partners logo'
                        className="partners-image"
                    ></img>
                    <img
                        src={require(`../../assets/images/bps.PNG`)}
                        alt='Solar Energy Partners truck'
                        className="partners-image"
                    ></img>
                </div>
            </div>




            <div className="vision-wrapper">
                <div className="vision-text">
                    <h2>
                        Company's Vision
                    </h2>
                    <p>
                        Nast Solar aims to be in multiple states by 2030 and international by 2050. The impacts of climate change are felt more in equatorial coastal nations than anywhere else.
                        Nast Solar hopes to partner with the United Nations in order to secure funding for renewable energy projects in nations with underdeveloped energy systems.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;