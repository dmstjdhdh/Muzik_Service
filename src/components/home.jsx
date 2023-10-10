import React from 'react';
import styled from 'styled-components';
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";

const Container_parent = styled.div`
  background-color: white;
`
const Container_styled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 300px;
`;

const Partition = styled.div`
  padding: 20px;
`
const LeftContent = styled.div`
  flex: 1;
`;

const RightContent = styled.div`
  flex: 1;
  text-align: right;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Button = styled.button`
  display: inline-block;
  padding: 0.65em 1.6em;
  border: 3px solid #ffffff;
  margin: 0 0.3em 0.3em 0;
  border-radius: 0.12em;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  color: #ffffff;
  text-align: center;
  transition: all 0.2s;
  animation: bn13bouncy 5s infinite linear;
  position: relative;
`;

const Home = () => {
    return (
        <Container_parent>
            <Container_styled>
                <LeftContent>
                    {/* 왼쪽에 동그란 사진 */}
                    <img src="/Users/apple/Documents/GitHub/Muzik_Service/public/favicon.ico" alt="Your Image" style={{ borderRadius: '50%', width: '150px', height: '150px' }} />
                </LeftContent>
                <RightContent>
                    {/* 오른쪽에 글 */}
                    <p>나를 소개할 수 있는 글 내용</p>
                </RightContent>
            </Container_styled>
            <ButtonContainer>
                <Container>
                    <Row>
                        <Col>
                            <Button>버튼 1</Button>
                        </Col>
                        <Col>
                            <Button>버튼 2</Button>
                        </Col>
                    </Row>
                    <Partition></Partition>
                    <Row>
                        <Col>
                            <Button>버튼 3</Button>
                        </Col>
                        <Col>
                            <Button>버튼 4</Button>
                        </Col>
                    </Row>
                </Container>
            </ButtonContainer>
        </Container_parent>

    )
};

export default Home;