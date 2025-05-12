import styled from "styled-components";

const Container = styled.main`
    display: flex;
    flex-direction: row;
    padding: 2rem 0;
    justify-content: center;
    margin: 0 auto;

    .collections-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    width: 90%;
    margin: 0 auto;
}

.collection--card{
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    background-color: #EEEDF3;
    border-radius: 10px;
}


.collection--card-image img {
    width: 100%;
    height: 12rem;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
}

.collection--card-content{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0 2rem 1rem 2rem;
}
.collection--card-title{
    font-weight: 700;
    color: #2B2F38;
}
.collection--card-description{
    font-weight: 400;
    font-size: 1rem;
    color: #5D6167;
}
.collection--card-btn button{
    font-weight: 600;
    background-color: #EEEDF3;
    color: var(--danger);
}
.collection--card-btn button:hover{
    color: var(--primary-clr);
}
`
export default Container;