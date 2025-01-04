import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";

const Banner = () => {
  return (
    <div className="flex items-center justify-center mt-4">
    <div className="carousel h-[400px] w-[900px] ">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src={banner1}
          className="w-full h-full object-cover"
          alt="Banner 1"
        />

        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>

      <div id="slide2" className="carousel-item relative w-full">
        <img
          src={banner2}
          className="w-full h-full object-cover"
          alt="Banner 2"
        />
  
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>

   

    
    </div>
    </div>
  );
};

export default Banner;
