import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__img" src="https://m.media-amazon.com/images/I/61nfpX0p23L._SX3000_.jpg" alt=""/>
            </div>     

            <div class="home__row">
                <Product 
                    id="" 
                    title="All-new Echo Dot (4th generation) International Version"
                    price={49.99} 
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/January/Fuji_Dash_EchoDot_Jan21_1x._SY304_CB413050328_.jpg"
                    rating={5}
                />
                <Product
                    id="" 
                    title="" 
                    price={} 
                    image="" 
                    rating={4}
                />
                <Product
                    id="" 
                    title="" 
                    price={} 
                    image="" 
                    rating={4}
                />
                <Product
                    id="" 
                    title="" 
                    price={} 
                    image="" 
                    rating={4}
                />

            </div>

            <div class="home__row">
            <Product
                    id="" 
                    title="" 
                    price={} 
                    image="" 
                    rating={4}
                />
                <Product
                    id="" 
                    title="" 
                    price={} 
                    image="" 
                    rating={4}
                />
                <Product
                    id="" 
                    title="" 
                    price={} 
                    image="" 
                    rating={4}
                />
            </div>

            <div class="home__row">
            <Product />

            </div>
            
            <div class="home__row">
            <Product />
            </div>

        </div>
    )
}

export default Home;
