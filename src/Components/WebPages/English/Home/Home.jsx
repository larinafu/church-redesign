const Home = (props) => {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner" data-bs-interval='3000'>
        <div className="carousel-item active">
          <img src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg" className="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item" data-bs-interval='3000'>
          <img src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg" className="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item" data-bs-interval='3000'>
          <img src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg" className="d-block w-100" alt="..." />
        </div>
      </div>
    </div>
  );
};

export default Home;
