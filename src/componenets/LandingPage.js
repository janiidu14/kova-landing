import landingImage1 from "../assets/landing-image-1.jpg";
import landingImage2 from "../assets/landing-image-2.jpg";
import landingImage3 from "../assets/landing-image-3.jpg";

function ImageContainer() {
  return (
    <div className="container mx-auto lg:pt-20 xl:pt-5 bg-[#201A26]">
      <div className="md:grid-container md:pt-0 pt-8">
        <div className="md:grid md:grid-cols-1 gap-4 lg:grid-cols-2" >
          <div className=" p-4 my-auto">
            <img
              src={landingImage1}
              alt="Chemistry Lessons"
              className="rounded-lg mx-auto"
              width={331}
            />
          </div>
          <div className="p-4">
            <img
              src={landingImage2}
              alt="Sessions"
              className="rounded-lg mx-auto"
              width={318}
            />
          </div>
          <div className="col-span-2 p-4 mb-8">
            <img
              src={landingImage3}
              className="rounded-lg mx-auto"
              alt="Tutor Info"
              width={701}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageContainer;
