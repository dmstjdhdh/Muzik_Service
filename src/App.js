import './App.css';
import styled from "styled-components";
import Home from "./components/home";
import 'bootstrap/dist/css/bootstrap.min.css';
import TopBar from "./components/navibar";

const Container = styled.div`
  background-color: rgb(0, 0, 0);
  padding: 0;
  margin: 0;
  width: 100%;
`;

function App() {
  return (
      <Container>
          <TopBar/>
          <Home/>
      </Container>
  );
}

export default App;
