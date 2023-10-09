import './App.css';
import styled from "styled-components";
import Home from "./components/home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navibar from "./components/navibar";

const Container = styled.div`
  padding: 0;
  margin: 0;
`;

function App() {
  return (
      <Container>
          <Navibar/>
          <Home/>
      </Container>
  );
}

export default App;
