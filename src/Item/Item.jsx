import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;

  img {
    width: 100%;
    height: auto;
  }

  div {
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translateY(-50%);
    background: pink;
    padding: 20px;
    border-radius: 10px;

    @media (max-width: 767px) {
      top: 270px;
      left: 0px;
      padding: 10px;
      border-radius: 5px;
    }
  }

  h2 {
    font-size: 1.5rem;
    color: white;
    text-align: center;
    font-weight: bold;
  }

  p {
    font-weight: bold;
    color: white;
  }

  .btn {
    background-color: white;
    color: pink;
    margin-left: 40px;
  }
`;

const Item = () => {
  return (
    <Container>
      <img
        src="https://img.creator-prod.zmags.com/assets/images/64a72516b6fc7c5ba764d526.png?im=Resize,width=1536"
        alt=""
      />
      <div>
        <h2>Welcome to our Toy Store!</h2>
        <p>Discover a world of fun and imagination with our wide range of toys.</p>
        <p>Shop now and make playtime extraordinary!</p>
        <button className="btn">Browse Toys</button>
      </div>
    </Container>
  );
};

export default Item;
