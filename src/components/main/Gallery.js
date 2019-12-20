import React from'react';


import chillingFrank from '../../img/galleryImages/chillingFrank.jpg';
import classFrank from '../../img/galleryImages/classFrank.jpg';
import coolFrank from '../../img/galleryImages/coolFrank.jpg';
import friendsFrank from '../../img/galleryImages/friendsFrank.jpg';
import glassesFrank from '../../img/galleryImages/glassesFrank.jpg';
import scarfaceFrank from '../../img/galleryImages/scarfaceFrank.jpg';
import wallFrank from '../../img/galleryImages/wallFrank.jpg';
import mediFrank from '../../img/galleryImages/MediFrank.jpg';


const myPics = [coolFrank ,mediFrank, wallFrank, chillingFrank, classFrank,  friendsFrank,scarfaceFrank, glassesFrank];

const randomwidths = Math.floor(Math.random()*100)
export default Gallery=> {
    console.log(`${randomwidths}00`)
    return <div className="container gallerysettings">
    <h2>Gallery</h2>
        <div>{myPics.map( eachpic=> <img className="eachImg" src={eachpic} alt={eachpic}/>)}</div>
        </div>    
}






