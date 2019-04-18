import React from 'react';
import axios from 'axios';
import './home-wrapper.css';
import HomeItem from '../home-item/home-item';

class HomeWrapper extends React.Component {

    constructor() {
        super();
        this.state = {
            items: [],
        };
    }

    componentDidMount() {
        axios.get('http://demo4452328.mockable.io/properties')
        .then((data) => {
            let entryItems = data.data.data;
            this.setState({items: entryItems});
        })
        .catch((error) => {
            console.log(error);
        })
    }

    render() {
        const { items } = this.state;
        // const { schemaNumber } = this.state;
        return(
            <div className="home__wrapper">
                {items.map(item =>
                    <HomeItem key={item.id} item={item} images={item.images}/>
                )}
            </div>
        )
    }
}


export default HomeWrapper;