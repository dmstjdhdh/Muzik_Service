import React from 'react';
import styled from 'styled-components';

const ContainerParent = styled.div`
  background-color: white;
  flex-direction: column;
  align-items: center;
`;

const ProfileContent = styled.div`
  background: #6b12ff;
  background: -webkit-linear-gradient(to left, #5918ab, #570e69);

  flex: 1;
  width: 100%;
  height: 325px;
  align-items: center;
  flex-direction: row;
`;

const PortfolioContent = styled.div`
  background: #845EC2;
  background: -webkit-linear-gradient(to left, #B39CD0, #FBEAFF);

  flex: 1;
  width: 100%;
  height: 100%;
  align-items: center;
  flex-direction: column;
`;

const Line = styled.div`
  background: #8b49ff;

  flex: 1;
  width: 100%;
  height: 2px;
  margin-top: 1px;
`;

const ImageBox = styled.img`
  flex: 1;
  border-radius: 150px;
  width: 300px;
  height: 300px;
  margin-bottom: 100px;
  margin-top: 100px;
  margin-left: 100px;
  z-index: 3;
`

const ImageStackContainer = styled.div`
  flex-direction: row;
`
const ImageStack = styled.img`
  width: 48px;
  height: 48px;
  margin: 20px;
`

const TextContent = styled.div`
  flex: 1;
  text-align: left;
  width: 100%;
  height: 360px;
  flex-direction: column;
  margin-left: 100px;
  margin-top: 120px;
  
`;

const IntroductionTitle = styled.p`
  font-size: 44px;
`;

const Introduction = styled.p`
  font-size: 16px;
`;

const Home = () => {
    return (
        <ContainerParent>
            <ProfileContent>
                <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <ImageBox src="/profile.jpeg"/>
            </ProfileContent>
            <Line/>
            <Line/>
            <TextContent>
                <IntroductionTitle>
                    Subin
                </IntroductionTitle>
                <Introduction>
                    안녕하세요, 저는 클라이언트 개발자이며, 그래픽과 웹 프론트엔드에 큰 관심을 가지고 있는 사람입니다.<br/>
                    웹 디자인과 사용자 경험을 개선하는 데 열정을 가지고 있습니다.
                </Introduction>
                <ImageStackContainer>
                    <ImageStack src="/cicon.png"/>
                    <ImageStack src="/js.png"/>
                    <ImageStack src="/ts.png"/>
                    <ImageStack src="/react_icon.png"/>
                    <ImageStack src="/unityicon.png"/>
                </ImageStackContainer>
            </TextContent>
            <PortfolioContent>

            </PortfolioContent>
        </ContainerParent>

    )
};

export default Home;