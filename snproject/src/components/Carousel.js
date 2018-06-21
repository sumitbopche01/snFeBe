import React from 'react';
import '../App.css';

class Carousel extends React.Component{
    render(){
        return(
            <div>
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                    <div id="carousel" class="carousel-inner">
                        <div class="carousel-item active">
                          <img class="d-block w-100" 
                          src="https://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg" 
                          alt="First slide" />
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" 
                            src="https://a.travel-assets.com/findyours-php/viewfinder/images/res60/61000/61162-Aitutaki.jpg" 
                            alt="Second slide" />
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" 
                            src="https://images.unsplash.com/photo-1518532641931-abca4bbb36e1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=636fe3b763a9c0303b8aeae321572533&w=1000&q=80" 
                            alt="Third slide" />
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>

                </div>
            </div>
        )
    }
}

export default Carousel;
