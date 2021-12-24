import React from 'react';
import "./Home.css";
import Banner from './Banner';
import Card from './Card';


function Home() {
    return (
        <div className='home'>
            <Banner/>
            <div className='top__section'><h1>Inspiration for Your Next Trip</h1></div>
            <div className='home__section'> 
            <Card src=" https://a0.muscache.com/im/pictures/64530077-ffc7-481b-8cca-50ec8c5f3324.jpg?im_w=480"
            title="Lagos "
            description=" 9 kilometres away"/>
            <Card src=" https://a0.muscache.com/im/pictures/3a7b8005-28b8-48b8-8efa-0a6a00f7d5d8.jpg?im_w=480"
            title="Abuja "
            description=" 200 kilometres away"/>
            <Card src=" https://a0.muscache.com/im/pictures/5d597532-b55a-439d-baf7-9c0875423f44.jpg?im_w=480"
            title="PortHarcourt "
            description=" 300 kilometres away"/>
            <Card src=" https://a0.muscache.com/im/pictures/aff9e173-b551-44e4-80f3-bd9b9d632f8b.jpg?im_w=480"
            title="Ikeja "
            description=" 10 kilometres away"/>
            </div>
            <div className='home__section'> 
            <Card src=" https://a0.muscache.com/im/pictures/c1163562-f327-4679-9d5b-a50154892682.jpg?im_w=720"
            title=" 3 bedrooms apartment"
            description=" Charming Heritage Home in Old East Village"
            price="$150/night"/>
             <Card src=" https://a0.muscache.com/im/pictures/0709181c-4386-4433-a14a-447c4fd75c25.jpg?im_w=960"
            title=" 3 bedrooms apartment"
            description=" Charming Heritage Home in Old East Village"
            price="$100/night"/>
            <Card src=" https://a0.muscache.com/im/pictures/0709181c-4386-4433-a14a-447c4fd75c25.jpg?im_w=960"
            title=" 3 bedrooms apartment"
            description=" Charming Heritage Home in Old East Village"
            price="$80/night"/>
             <Card src=" https://a0.muscache.com/im/pictures/0709181c-4386-4433-a14a-447c4fd75c25.jpg?im_w=960"
            title=" 3 bedrooms apartment"
            description=" Charming Heritage Home in Old East Village"
           
            price="$170/night"/>
            </div>
            
        </div>
    )
}

export default Home;
