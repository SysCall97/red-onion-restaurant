import React from 'react';
import img1 from "../../images/Image/adult-blur-blurred-background-687824.png";
import img2 from "../../images/Image/chef-cook-food-33614.png";
import img3 from "../../images/Image/architecture-building-city-2047397.png";
import icon1 from "../../images/ICON/Group 204.png";
import icon2 from "../../images/ICON/Group 1133.png";
import icon3 from "../../images/ICON/Group 245.png";
import FeatureCard from '../FeatureCard/FeatureCard';



const AdvertiseSection = () => {
    const features = [
        {
            name: "Fast Deilivery",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio harum facere expedita.",
            img: img1,
            icon: icon1
        },
        {
            name: "A Good Auto Responder",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio harum facere expedita.",
            img: img2,
            icon: icon2
        },
        {
            name: "Home Deilivery",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio harum facere expedita.",
            img: img3,
            icon: icon3
        }
    ];
    let key=0;
    return (
        <div style={{marginLeft: "5%"}}>
            <h1>Why you choose us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio harum facere expedita.</p>
            
            <div className="container">
                <div className="card-deck">
                    {
                        features.map(feature => <FeatureCard feature={feature} key={++key} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default AdvertiseSection;