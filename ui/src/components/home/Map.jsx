import Container from "./MapCSS";

const Map = () => {
  return (
    <Container>
    <div className="map">
        <iframe
            width="720"
            height="600"
            loading="lazy"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://maps.google.com/maps?width=720&amp;height=600&amp;hl=en&amp;q=Seedling+Propagation+in+kiambu(Seedling%Propagation%Store)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
            <a href="https://www.gps.ie/">gps devices</a>
        </iframe>
        </div>
    </Container>
  
  );
};

export default Map;
