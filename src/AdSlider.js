import React, {useRef, useEffect} from 'react';
import "./AdSlider.css"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styled from 'styled-components';







const AdSlider = () => {

    const actionSlide = useRef(null);

    const goLeft = () => {
        if(actionSlide.current.children.length > 0){
            const primeElement = actionSlide.current.children[0];
        
            actionSlide.current.style.transition = `3000ms ease-out all`;

            const sizeSlide = actionSlide.current.children[0].offsetWidth;

            actionSlide.current.style.transform = `translateX(-${sizeSlide}px)`;

            const actionTransition = () => {
                actionSlide.current.style.transition = 'none';
                actionSlide.current.style.transform = `translateX(0)`;
            
                actionSlide.current.appendChild(primeElement);

                actionSlide.current.removeEventListener('transitionend', actionTransition);
            }

            actionSlide.current.addEventListener('transitionend', actionTransition);

            
        }


    }
    const goRight = () => {
        console.log("goRight");
        if(actionSlide.current.children.length > 0) {
            const index = actionSlide.current.children.length - 1;
            const lastElement = actionSlide.current.children[index];

            const sizeSlide = actionSlide.current.children[0].offsetWidth;

            actionSlide.current.insertBefore(lastElement, actionSlide.current.firstChild);
        
            actionSlide.current.style.transition ='none';
            actionSlide.current.style.transition = `translateX(-${sizeSlide}px)`;
        
            setTimeout(() => {
                actionSlide.current.style.transition ='300ms ease-out all';
                actionSlide.current.style.transition = `translateX(0)`;
            }, 30);
        }
    }

    useEffect(() =>{
        setInterval(() => {
            goRight();
        }, 5000);
    }, []);
   


    return(
        <ContainerSlide>
            <SlideShow ref={actionSlide}>
                <Slide>
                    <img src="https://m.media-amazon.com/images/I/61nfpX0p23L._SX3000_.jpg" alt=""/>
                </Slide>
                <Slide>
                    <img src="https://m.media-amazon.com/images/I/610aFo74RdL._SX3000_.jpg" alt=""/>
                </Slide>
                <Slide>
                    <img src="https://m.media-amazon.com/images/I/61rSRZL9kaL._SX3000_.jpg" alt=""/>
                </Slide>
                <Slide>
                    <img src="https://m.media-amazon.com/images/I/610of2sx9hL._SX3000_.jpg" alt=""/>
                </Slide>
                <Slide>
                    <img src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg" alt=""/>
                </Slide>
            </SlideShow>
            <Controls>
                <SlideButton left onClick={goLeft}>
                    <ArrowBackIosNewIcon/>
                </SlideButton>
                <SlideButton direction onClick={goRight}>
                    <ArrowForwardIosIcon/>
                </SlideButton>
            </Controls>
        </ContainerSlide>
    )
}

const ContainerSlide = styled.div `
    position: relative;
   
`;

const SlideShow = styled.div`
    display: flex;
    flex-warp: nowrap;
    overflow-x: hidden;
    margin-bottom: -260px;
`;

const Slide = styled.div `
    min-width: 1500px;
    transition: .3s ease all;
    z-index: -1;
    position: relative;
    
    
    img {
        mask-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 1) 40%,
        rgba(0, 0, 0, 0)
        );
        width: 100%;
        vertical-align: top;
    }
`;

const Controls = styled.div `
    position: absolute;
    top:0;
    width:100:
    height: 100%;
    pointer-events: none;
    border-color: yellow;


`;
const SlideButton = styled.div `
    pointer-events: all;
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
    padding-top: 120px;
    padding-bottom: 100px;
    width: 50px;
    height: 50px;
  
    text-align: center;
    position: absolute;
    transition: .3s ease all;

    &:hover {
        background: rgba(0,0,0,.2);
        path{
            fill: #fff;
        }
    }


    path {
        filter: ${props => props.direction ? 'drop-shadow(-2px 0px #fff)': 'drop-shadow(2px 0px #fff)'}
    }
    ${props => props.direction ? 'left: 1450px' : 'left:0'}

`;
/*
// dots: true, infinite: true, speed: 500 slidesToShow: 1, slidesToScroll: 1
function AdSlider() {
    const [x, setX] = useState(0);

    let sliderArr = [1, 2, 3, 4, 5];

    const goLeft = () => {
        console.log(x);
        setX(x+100);
    }

    const goRight = () => {
        console.log(x);
        (x === 100 * sliderArr.length - 1) ? setX(0) : setX(x- 100);
    }

    return (
        <div>
            <div className="adSlider">
                {
                sliderArr.map((item, index) =>{
                    return(
                        <div key={index} className="slide" style={{transform:`translateX(${x}%)`}}>
                            {item}
                        </div>
                  )
                })
                }
                <button className="slide-bttn" id="goLeft" onClick={goLeft}>Left</button>
                <button className="slide-bttn" id="goRight" onClick={goRight}>Right</button>
            </div>
        
        </div>
        
    )

}

*/


export default AdSlider;