import styled from "styled-components";

const Container=styled.main`
display: flex;
align-items: center;
justify-content: center;

.featured--products-main{
    display: flex;
    flex-direction: column;
    width: 90%;
}
.featured--title{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 2rem 4rem 4rem 4rem;
}
.featured--title h3{
font-weight: 500;
font-size: 2.5rem;
color: #2B2F38;
}
.featured--title p{
font-weight: 500;
font-size: 1rem;
color: #5D6167;
}

.featured-cards{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    width: 100%;
    margin: 0 auto;
}
.collections-container {
    
}
.featured--product-card{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.5rem;
    width: 16rem;
    border: 1px solid #EEEDF3;
}

.featured--product-img {
    height: 200px;
    position: relative;
    display: inline-block;
}
.featured--product-img img{
    height: 100%;
}

.offer-card {
    position: absolute;
    top: 10px;
    left: 10px;
    background: white;
    color: var(--primary-clr);
    text-transform: capitalize;
    padding: 0.2rem .5rem;
    border-radius: 20px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    animation: popUp 0.8s ease-in-out infinite alternate;
}
.offer-card-content{
    font-size: 1rem;
}
@keyframes popUp {
    0% {
        transform: scale(1);
    }
    100% {
        transform: scale(1.1);
    }
}


.featured--product-content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: .2rem;
    padding: 0 1rem;
}

.featured--product-Collection-name h4{
    font-weight: 400;
    font-size: 1rem;
    color: #5D6167;
}
.featured--product-name {
    font-size: 1.4rem;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    width: 100%;
    display: block;
    position: relative;
}

.scroll-text {
    display: inline-block;
    transition: transform .5s linear;
    will-change: transform;
}

.featured--product-name:hover .scroll-text {
    transform: translateX(calc(min(0px, 260px - 100%)));
}


.featured--product-amount{
    display: flex;
    align-items: center;
    gap: 1.5rem;
}
.featured--amount-placeholder{
    font-weight: 600;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: .5rem;
}
.featured--product--amount-past{
    display: flex;
    align-items: center;
    gap: .5rem;
    text-decoration: line-through;
    font-weight: 400;
    font-size: 1rem;
    color: #5D6167;
}
.featured--past-amount-placeholder{
    display: flex;
    align-items: center;
    gap: .2rem;
}
.product__quantity_price{
    display: flex;
    flex-direction: column;
    gap: .5rem;
}

.featured__product__quantity{
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-weight: 400;
    font-size: 1rem;
}
.product--quality-value{
    display: flex;
    align-items: center;
    gap: .2rem;
    color: #5D6167;
}
.progress-bar {
    width: 100%;
    height: 8px;
    background-color: #ddd;
    border-radius: 4px;
    overflow: hidden;
}

.progress-fill {
    height: 100%;
    background-color: #41663C;
    transition: width 0.3s ease-in-out;
}
.add--to-cart{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem auto;
}
.add--to-cart-btn{
    width: 100%;
    padding: .8rem;
}

.featured__product__out_ofStock__btn{
    width: 100%;
    padding: .8rem;
    font-weight: 600;
    background-color: #888;
    text-transform: uppercase;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

@media (max-width: 768px) {
    .featured-cards {
        justify-content: center;
    }
    .featured--product-card {
        width: 100%;
        max-width: 20rem;
    }
}

@media (max-width: 480px) {
    .featured-cards {
        flex-direction: column;
        align-items: center;
    }
    .featured--product-card {
        width: 100%;
    }
    .featured--title{
    padding: 1rem;
    text-align: center;
}
.featured--title h3{
font-size: 1.8rem;
}

}


`
export default Container;