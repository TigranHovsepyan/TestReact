import React from 'react';
import './home-item.css';
import HomeImg from '../home-img/home-img';

class HomeItem extends React.Component {

    constructor() {
        super();
        this.state = {
            schemaNumber: 1,
            images: []
        };
        this.checker = this.checker.bind(this);
    }

    checker() {
        if (this.state.schemaNumber === 1 || this.state.schemaNumber === 2) {
            this.setState({schemaNumber: this.state.schemaNumber+1});
        }

        else {
            this.setState({schemaNumber: 1})
        }
        
    }

    render() {
        const {item} = this.props;
        const {images} = this.props;
        const {schemaNumber} = this.state;

        return (
            <div className={"home__item schema-" + schemaNumber } key={item.id}>
                        <HomeImg src={images} key={item.id}/>
                        <div className="home__address">{item.full_address}</div>
                        <span className="home__price">{item.price} грн</span>
                        <div className="home__area">{item.area}</div>
                        <button className="home__button" onClick={this.checker}>Change schema</button>
                    </div>
        )
    }
}

export default HomeItem;