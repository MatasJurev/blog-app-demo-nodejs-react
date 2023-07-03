import React from "react";
import Ratio from 'react-bootstrap/Ratio';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const About = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <div>
            <h2>What do we do?</h2>
            <br />
            <div>
                <Ratio key="16x9" aspectRatio="16x9">
                    <iframe
                        src="https://player.vimeo.com/video/826378058"
                        title="Vimeo video"
                        allowFullscreen="true"
                    ></iframe>
                </Ratio>
            </div>
            <br />
            <div>
                <Ratio key="16x9" aspectRatio="16x9">
                    <iframe
                        src="https://player.vimeo.com/video/826379227"
                        title="Vimeo video"
                        allowFullscreen="true"
                    ></iframe>
                </Ratio>
            </div>
            <br />
            <h2>Our team</h2>
            <br />
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="b-block w-100"
                        src="https://images.pexels.com/photos/374598/pexels-photo-374598.jpeg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="b-block w-100"
                        src="https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="b-block w-100"
                        src="https://images.pexels.com/photos/7876708/pexels-photo-7876708.jpeg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="b-block w-100"
                        src="https://images.pexels.com/photos/1036808/pexels-photo-1036808.jpeg"
                        alt="Fourth slide"
                    />
                    <Carousel.Caption>
                        <h3>Fourth slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="b-block w-100"
                        src="https://images.pexels.com/photos/3987020/pexels-photo-3987020.jpeg"
                        alt="Fifth slide"
                    />
                    <Carousel.Caption>
                        <h3>Fifth slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default About;
