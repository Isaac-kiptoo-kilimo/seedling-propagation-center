import styled from "styled-components";

const Container=styled.main`
.about-us-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    padding: 20px;
    margin: 0 auto 0 auto;
}
.about-us-main-container{
    display: flex;
    flex-direction: row;
    padding: 20px;
    gap: 3rem;
}
.about-img{
    width: 100%;
}
.about-img img{
    width: 90%;
}
.main-content-about{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    margin-top: 5%;
    /* background-color: green; */
}
.about-us-content p{
    line-height: 2.0;
    font: 24px;
    color: #5D6167;
}

@media (max-width: 768px) {
    .about-header h2{
        font-size: 24px;
        text-align: center;
    }
    .about-us-main-container{
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 3rem;
}

}
`

export default Container;