import { Container } from "@mui/system";
import { Typography } from "@mui/material";
import "../App.css";
import LoremIpsum from "react-lorem-ipsum";

const ACSHome = () => {
  return (
    <>
      <Container component="main" maxWidth="xs" style={{ marginTop: "10%" }}>
        <Typography style={{ textAlign: "center" }} variant="h2">
          Bem-vindo ao site!
        </Typography>
        <Typography style={{ textAlign: "justify" }} variant="p">
          Desejamos uma boa vinda e... <LoremIpsum p={4}/>
        </Typography>
      </Container>
    </>
  );
};

export default ACSHome;
