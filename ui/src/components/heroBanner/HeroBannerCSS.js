import styled from "styled-components";

const Container = styled.main`
    display: flex;
    flex-direction: row;
    padding: 2rem 0;
    justify-content: center;
    margin: 0 auto;
.hero--banner{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    width: 100%;
    margin: 0 auto;
}
.plants--collection{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1.5rem;
}
.plants--icon{
    color: var(--primary-clr);
    font-size: 2rem;
}
.plants--content{
    display: flex;
    flex-direction: column;
}
.banner--main-content{
    font-weight: 500;
    font-size: 1.3rem;
    text-transform: capitalize;
    color: #2B2F38;
}
.banner--sub-content{
    font-weight: 400;
    font-size: 1rem;
    color: #5D6167;
}
`
export default Container;