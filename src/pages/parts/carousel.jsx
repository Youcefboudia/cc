import React from "react";

export default ()=>{

    return (
        <div id="carouselExample" class="carousel slide container  mb-2">
          
        <div class="carousel-inner">
          <div class="carousel-item " data-bs-interval="10000">
            <div class="hold">
                <div class="card m-3 cntr-t l-25" style={{width : "28rem"}}>
                <div class="card-body">
                <h1 class="card-title">Card title</h1 >
                <p class="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card's content.Some quick 
                    example text to build on the card title and make up the bulk of the card's content.
                    Some quick example text to build on the card title and make up the bulk of the card's content.Some quick 
                    <br/>
                <a href="#" class=""> Follow Link</a>
                </p>
                </div>
                </div>
                
            </div>
          </div>
          <div class="carousel-item active" data-bs-interval="100">
            <div class="hold">
            
            <div className="cntr-t mak-card">
              <h1>Title</h1>
              <p> and make up the bulk of the card's content.Some quick 
                    example text to build on the card title and make up the bulk of the card's content.
                    Some quick example text to build on the card title and m
                    <br />
                    <a href="">Views</a>
                    </p>
            </div>
          </div>
        </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev"><span className="carousel-control-prev-icon" ></span></button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next"><span className="carousel-control-next-icon" ></span></button>
      </div>
    )
}