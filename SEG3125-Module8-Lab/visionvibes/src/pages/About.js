import React from 'react';
import '../css/About.css';
import langData from '../data/language';

const About = () => {

    const lang = langData['lang']

    return (
        <div className='container-fluid aboutContainer' >
            <div className="mainImage aboutBG" >
                <div className="mainText">
                    <h1 className="display-4">{lang === "EN" ? "About Us" : "à propos de nous"}</h1>
                </div>
            </div>
            <div className="container aboutUsContent">
                <h4>{lang === "EN" ? "We know it's sometimes hard to find someone who shares the same ideas and vision as you. That's why we created VisionVibes. Here, you'll find like-minded people. With VisionVibes, you find can explore and find the perfect beat for your idea using our FindYourBeat algorithm that finds the right beat for you. Want more than a beat? Find the perfect collaborator through our Creative section and shake the music world." 
                : "Nous savons qu'il est parfois difficile de trouver quelqu'un qui partage les mêmes idées et la même vision que vous. C'est pourquoi nous avons créé VisionVibes. Ici, vous trouverez des personnes partageant les mêmes idées. Avec VisionVibes, vous pouvez explorer et trouver le rythme parfait pour votre idée en utilisant notre algorithme FindYourBeat qui trouve le rythme qui vous convient. Vous voulez plus qu'un rythme? Trouvez le collaborateur idéal grâce à notre section Créative et secouez le monde de la musique."}

                </h4>
            </div>
            <div className="container aboutUsContent">
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam est arcu, maximus sed arcu id, efficitur gravida massa. Aenean in ante non ligula dapibus tincidunt vitae at leo. Quisque rhoncus tempus magna id venenatis.
                Nam dapibus lectus ligula, vitae venenatis arcu ultricies nec. Integer et consequat urna. Etiam imperdiet libero ac dui dapibus, quis varius sapien feugiat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                In hac habitasse platea dictumst. Aliquam rutrum purus nec dui ultrices dapibus. Proin rhoncus, sem vel tempus interdum, metus nunc commodo turpis, a ullamcorper quam nisi ut velit.
                Morbi ligula sapien, vestibulum eget ligula sit amet, interdum ornare orci. Integer dictum imperdiet eros, sit amet scelerisque justo accumsan sed. Aenean finibus, nisl sit amet elementum tempor, tortor augue tristique quam, et ullamcorper enim eros quis erat.
                Donec vitae arcu purus. Morbi feugiat magna nisl, euismod consectetur sapien placerat ut. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc in mi ex. Etiam egestas fermentum nisi faucibus egestas. Quisque eros enim, dignissim non felis in, imperdiet vestibulum dui.
                Suspendisse potenti.
                Duis volutpat ipsum nisl, nec molestie tortor pulvinar eget. Suspendisse ut lacinia urna.
                </h4>
            </div>
        </div>
    )
}

export default About