import React from 'react'
import Cement from "../../../Images/cement.svg"
import Stone from "../../../Images/stone.svg"
import Bricks from "../../../Images/brickandblocks.svg"
import RMC from "../../../Images/Rmc.svg"
import "./HomeContentUser.css"
import { Carousel } from "react-responsive-carousel";
import ProductCard from './ProductCard'

const HomeContentProducts = ({setCurrentSection}) => {
    const img_arr=[Cement,Stone,Bricks,RMC]
    const img_arr1=['Cement','Stone','Bricks','RMC']
    return (
        <div className="home-content-products">
                        <h1  style={{color:"#ffb600",fontSize:24,fontWeight:"600"}}>Products We Provide</h1>
                       
                        <div className="home-content-products-items">
                            <div className="home-content-products-items1">
                                <ProductCard img={Cement} setCurrentSection={setCurrentSection} title="Cement"/>
                                <ProductCard img={Stone} setCurrentSection={setCurrentSection} title="Stones"/>
                            </div>
                            <div className="home-content-products-items2">
                                <ProductCard img={Bricks} setCurrentSection={setCurrentSection} title="Bricks"/>
                                <ProductCard img={RMC} setCurrentSection={setCurrentSection} title="RMC"/>
                            </div>
                            
                        </div>

                       <div className="f">
                       <Carousel autoPlay={true} showThumbs={true} infiniteLoop={true} showStatus={true} >
                        {
                            img_arr.map((img,index) => (
                                <div style={{height:"100%",display:"flex",flexDirection:"row",justifyContent:"center"}} key={index}>
                                    <ProductCard img={img} setCurrentSection={setCurrentSection} title={img_arr1[index]}/>
                                </div>
                            ))
                        }
                    </Carousel>
                       </div>
                        
            </div>
    )
}

export default HomeContentProducts
