import React from 'react';
import Slider from 'react-slick';
import './home-img.css';

class HomeImg extends React.Component {

    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };

        const imgLinks = this.props.src;
        const listItems = imgLinks.map((imgLink) =>
          <img src={imgLink} alt={imgLink} key={imgLink} />
        );

        return (
            <Slider className="home__img" {...settings} >
                {listItems}
            </Slider>
        );
    }
}

export default HomeImg;