import React from "react";
import { useNavigate } from "react-router-dom";
import { Carousel, CarouselItem } from "../../components/carousel/Carousel";
import { FeatureCard } from "../../components/feature-card/FeatureCard";
import { useDocumentTitle } from "../../hooks/DocumentTitle";
import { FaLeaf, FaFire, FaCheck, FaHandshake } from "react-icons/fa";

export const Home = () => {
  useDocumentTitle("home");
  let navigate = useNavigate();
  const ReasonCard = ({ title, description, icon }) => {
    return (
      <div className="reason-card">
        <div className="icon-container">{icon}</div>
        <div className="reason-heading">{title}</div>
        <p>{description}</p>
      </div>
    );
  };
  return (
    <div>
      <Carousel>
        <CarouselItem>
          <>
            <header className="carousel-heading">Newest Shinobi Clothes</header>
            <button
              className="btn tertiary"
              onClick={() => navigate("/products")}
            >
              Shop Now
            </button>
          </>
        </CarouselItem>
        <CarouselItem>
          <>
            <header className="carousel-heading">
              Hottest weapons upto 20% off
            </header>
            <button
              className="btn tertiary"
              onClick={() => navigate("/products")}
            >
              Shop Now
            </button>
          </>
        </CarouselItem>
        <CarouselItem>
          <>
            <header className="carousel-heading">
              Clearance Sale starts in 2 days!
            </header>
            <button
              className="btn tertiary"
              onClick={() => navigate("/products")}
            >
              Shop Now
            </button>
          </>
        </CarouselItem>
      </Carousel>
      {/* Featured Categories */}
      <section id="featured-categories">
        <header className="section-heading">Featured Categories</header>
        <div className="categories">
          <FeatureCard
            img="https://res.cloudinary.com/randomwave45/image/upload/v1647440481/shuriken_s0yhea.png"
            altText="shuriken"
            caption="Shuriken"
          />
          <FeatureCard
            img="https://res.cloudinary.com/randomwave45/image/upload/v1647440480/headband_n2exdo.png"
            altText="headband"
            caption="Headband"
          />
          <FeatureCard
            img="https://res.cloudinary.com/randomwave45/image/upload/v1647440481/kimono_f0iyae.png"
            altText="kimono"
            caption="Kimono"
          />
          <FeatureCard
            img="https://res.cloudinary.com/randomwave45/image/upload/v1647440480/clothes_nzeake.png"
            altText="clothes"
            caption="Clothes"
          />
        </div>
      </section>
      {/* Why Us  */}
      <section id="why-us">
        <header className="section-heading">Why Choose Us ?</header>
        <div className="categories layout-4-column">
          <ReasonCard
            title="Newest Collection"
            description="Directly from the manufacturer"
            icon={<FaLeaf />}
          />
          <ReasonCard
            title="Hottest Wardrobe"
            description="Hottest Stuff which suits you"
            icon={<FaFire />}
          />
          <ReasonCard
            title="Quality Assured"
            description="100% genuine products"
            icon={<FaCheck />}
          />
          <ReasonCard
            title="30 Day Return"
            description="Buy carefree with returns assured"
            icon={<FaHandshake />}
          />
        </div>
      </section>
    </div>
  );
};
