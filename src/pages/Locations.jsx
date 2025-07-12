import { Hero } from "../components/UI";
import { Map, NotListed } from "../components/LocationsComponents";

const Locations = () => {
  return (
    <>
      <Hero
        title="Locations"
        mobile="./assets/images/careers-location-hero-mobile.jpg"
        tablet="./assets/images/careers-locations-hero-tablet.jpg"
        desktop="./assets/images/careers-locations-hero-desktop.jpg"
      />
      <Map />
      <NotListed />
    </>
  );
};

export default Locations;
