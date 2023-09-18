function Hero() {
  return (
    <div className="hero container">
      <div className="left-side">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>

        <div className="btns">
          <button>Shop Now</button>
          <button className="btn2">Category</button>
        </div>
        <div className="shopping">
          <p>Also Available On</p>
          <div className="icons">
            <img src="/images/amazon.png" />
            <img src="/images/flipkart.png" />
          </div>
        </div>
      </div>

      <div className="shoe-image">
        <img src="/images/shoe_image.png" />
      </div>
    </div>
  );
}

export default Hero;
