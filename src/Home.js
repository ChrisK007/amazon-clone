import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__img" src="https://m.media-amazon.com/images/I/61nfpX0p23L._SX3000_.jpg" alt=""/>
            </div>     

            <div className="home__row">
                <Product 
                    id="12345" 
                    title="All-new Echo Dot (4th generation) International Version"
                    price={49.99} 
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/January/Fuji_Dash_EchoDot_Jan21_1x._SY304_CB413050328_.jpg"
                    rating={5}
                />
                <Product
                    id="23456" 
                    title="Oculus Quest 2" 
                    price={299.0} 
                    image="https://m.media-amazon.com/images/I/615YaAiA-ML._SL1500_.jpg" 
                    rating={5}
                />
                <Product
                    id="25647" 
                    title="Nintendo Switch - Black" 
                    price={355.56} 
                    image="https://m.media-amazon.com/images/I/61RtiOhejgL._AC_SL1500_.jpg" 
                    rating={5}
                />
                <Product
                    id="23367" 
                    title="Wireless Gaming Mouse, Computer Mouse with Beetle Shape" 
                    price={17.99} 
                    image="https://m.media-amazon.com/images/I/61ogOp8NKhL._AC_SL1500_.jpg" 
                    rating={3}
                />

            </div>

            <div className="home__row">
            <Product
                    id="567432" 
                    title="Hbada Gaming Chair Ergonomic Racing Chair " 
                    price={169.99} 
                    image="https://m.media-amazon.com/images/I/71IC-JS4p1L._AC_SL1500_.jpg" 
                    rating={4}
                />
                <Product
                    id="234255" 
                    title="Redragon S101 Wired Gaming Keyboard and Mouse Combo RGB Backlit Gaming Keyboard" 
                    price={31.95} 
                    image="https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_SL1500_.jpg" 
                    rating={3}
                />
                <Product
                    id="556884" 
                    title="Vornado EVDC500 Energy Smart Evaporative Humidifier with Automatic Shut-off" 
                    price={128.92} 
                    image="https://m.media-amazon.com/images/I/81or1vvkQPL._AC_SL1500_.jpg" 
                    rating={4}
                />
            </div>

            <div className="home__row">
                <Product
                    id="559984" 
                    title="Introducing Amazon Fire TV 50"
                    price={329.99} 
                    image="https://m.media-amazon.com/images/I/51EPd38RHQL._AC_SL1000_.jpg" 
                    rating={4}
                />

            </div>
            
            <div className="home__row">
                <Product
                    id="449984" 
                    title="Canon EOS Rebel T7 DSLR Camera with 18-55mm Lens"
                    price={419.99} 
                    image="https://m.media-amazon.com/images/I/71EWRyqzw0L._AC_SL1500_.jpg" 
                    rating={4}
                />
            </div>

        </div>
    )
}

export default Home;
