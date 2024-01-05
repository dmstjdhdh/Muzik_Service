import React from 'react';
import styled from 'styled-components';

const ContainerParent = styled.div`
  background-color: rgba(15, 5, 44, 0.92);
  flex-direction: column;
  align-items: center;
`;

const Home = () => {
    return (
        <ContainerParent>
            <div>
                안녕
            </div>
        </ContainerParent>
    )
};

export default Home;