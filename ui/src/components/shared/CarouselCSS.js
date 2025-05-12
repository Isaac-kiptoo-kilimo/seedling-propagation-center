import styled from "styled-components";

const Container=styled.main `
.carousel-container {
  padding: 0;
  width: 100%;
  position: relative;
  overflow-x: hidden;
  height: 80vh;
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: start;
  background-repeat: no-repeat;
}
  .carousel-media {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-size: cover;
    background-position: center;
    opacity: 0;
    transition: opacity 1s ease-in-out;
  }

  video.carousel-media {
    object-fit: cover;
  }
  .carousel-media.active {
  opacity: 1;
  }
  .hero-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 20%; 
  left: 5%; 
  width: 45%;
  padding: 20px 0;
  border-radius: 10px;
  text-align: left;
  overflow: hidden;
  gap: 2rem;
  }
  .hero--content-card{
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    padding: 10px 15px;
    gap: 1rem;
    
  }
      
  p {
  font-size: 1.2rem;
  color: white;
}

h2 {
  font-size: 4rem;
  margin: 10px 0;
  color: whitesmoke;
}
 
  .btn-shop{
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
  }
  .carousel-photo {
    width: 100vw !important;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    opacity: 0;
    transition: opacity 4s ease;
  }
  .carousel-photo > img {
      width: 100vw !important;
      height: 100%;
      object-fit: cover;
    }

  .carousel-photo.active {
    opacity: 1;
  }
  @media (min-width: 768px) and (max-width: 1000px) {
    width: 100%;
    .carousel-photo {
      width: 768px;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    top: 10%;
    .carousel-photo {
      width: 100%;
      img {
        width: 100%;
        height: 100%;
        object-fit: fit;
      }
    }
    h2 {
      font-size: 2rem;
    }
    p {
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    width: 100%;
    top: 10%;
    h2 {
      font-size: 1.5rem;
    }
    p {
      font-size: 0.9rem;
    }
  }

`

export default Container;