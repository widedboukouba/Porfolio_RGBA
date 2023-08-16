import React from 'react'
import {style} from 'style.css'
const Profile = () => {
  return (
    <div>
    <div>
   <header>

<div class="user">
    <img src="./296151756_121854500672071_814690439935397618_n.jpg" alt="">
    <h3 class="name">Wided Boukouba</h3>
    <p class="post">Front end developer</p>
</div>

<nav class="navbar">
    <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#service">Service</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
</nav>

</header>



<div class="container">

<section class="home" id="home">

    <h3>hi there...</h3>
    <h3 class="name">my name is <span>Wided Boukouba</span></h3>
    <h3 class="post">i am a <span class="typing-text">front end developer</span></h3>

    <a href="#"><button class="btn">hire me</button></a>

    <div class="share">
        <a href="#" class="fab fa-facebook-f"></a>
        <a href="#" class="fab fa-twitter"></a>
        <a href="#" class="fab fa-instagram"></a>
        <a href="#" class="fab fa-pinterest"></a>
        <a href="#" class="fab fa-linkedin"></a>
    </div>

</section>



<section class="about" id="about">

    <h1 class="heading">About me</h1>

    <div class="content">
        <h3 class="name">my name is <span>Wided Boukouba</span></h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quos ipsam, temporibus veritatis sed dignissimos. Ratione consequuntur sapiente reiciendis dolorem.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, iusto hic neque illo dolorem facere laborum quam inventore architecto voluptates totam quo corrupti assumenda nihil voluptatum optio ullam cupiditate excepturi?</p>
    </div>

    <div class="skills">
        <div class="progress">
            <h3>HTML <span>100%</span></h3>
            <div class="bar"><span></span></div>
        </div>
        <div class="progress">
            <h3>CSS <span>95%</span></h3>
            <div class="bar"><span></span></div>
        </div>
        <div class="progress">
            <h3>JavaScript<span>65%</span></h3>
            <div class="bar"><span></span></div>
        </div>
        <div class="progress">
            <h3>ES6 <span>60%</span></h3>
            <div class="bar"><span></span></div>
        </div>
    </div>

</section>


<section class="service" id="service">

    <h1 class="heading">My services</h1>

    <div class="box-container">

        <div class="box">
            <i class="fab fa-html5"></i>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, sed.</p>
        </div>

        <div class="box">
            <i class="fab fa-css3"></i>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, sed.</p>
        </div>

        <div class="box">
            <i class="fab fa-js"></i>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, sed.</p>
        </div>

        <div class="box">
            <i class="fab fa-wordpress"></i>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, sed.</p>
        </div>

        <div class="box">
            <i class="fas fa-paint-brush"></i>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, sed.</p>
        </div>

        <div class="box">
            <i class="fas fa-bullhorn"></i>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, sed.</p>
        </div>

    </div>

</section>



<section class="education" id="education">

    <h1 class="heading"> My education</h1>

    <div class="box-container">

        <div class="box">
            <div class="year">2019 - 2020</div>
            <h3>Computer science baccalaureate</h3>
            <p>Lycee Technique medeine, Medenine</p>
        </div>

        <div class="box">
            <div class="year">2020 - 2021</div>
            <h3>
                1st year license in IT management</h3>
            <p>Institue Supérieure d'administration D'affaire ,Sfax</p>
        </div>

        <div class="box">
            <div class="year">2021 - 2022</div>
            <h3>Front end development</h3>
            <p>Go My Code, Gabes Hacker Space</p>
        </div>
        <div class="box">
            <div class="year">2022 - 2023</div>
            <h3>Web Developer</h3>
            <p>Go My Code, Gabes Hacker Space</p>
        </div>
        <div class="box">
            <div class="year">2023 - 2024</div>
            <h3>Full stack JS</h3>
            <p>Go My Code, Gabes Hacker Space</p>
        </div>

        

    </div>

</section>


<section class="contact" id="contact">

    <h1 class="heading">Contact me</h1>

    <div class="row">

        <form action="">
            <input type="text" class="box" placeholder="first name">
            <input type="text" class="box" placeholder="last name">
            <input type="email" class="box" placeholder="your email">
            <input type="text" class="box" placeholder="your project">
            <textarea name="" id="" cols="30" rows="10" class="box message" placeholder="message"></textarea>
            <input type="submit" value="message" class="btn">
        </form>

        <div class="content">
            <div class="icons">
                <h3><i class="fas fa-map-marker-alt"></i> address </h3>
                <p>Medenine,Cité stade Olampique</p>
            </div>
            <div class="icons">
                <h3><i class="fas fa-envelope"></i> email </h3>
                <p>widedboukouba64@gmail.com</p>
            </div>
            <div class="icons">
                <h3><i class="fas fa-phone"></i> phone </h3>
                <p>+216 99361884</p>
            </div>
        </div>

    </div>

</section>

</div>
    

    </div></div>
  )
}

export default Profile