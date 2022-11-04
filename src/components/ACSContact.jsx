import { Box, Container } from "@mui/system";
import { Button, Card, CardContent, Typography  } from "@mui/material";
import TextField from "@mui/material/TextField";

const ACSContact = () => {
  return (
    <>
      <Container component="main" maxWidth="xs" style={{ marginTop: "15%" }}>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <Card>
            <Typography style={{ textAlign: "center" }} variant="h2">
              Contatar
            </Typography>
            
            <CardContent>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="E-mail"
                name="email"
                autoFocus
              />

              <TextField
                required
                fullWidth
                margin="normal"
                id="phone"
                label="Telefone"
                type="number"
              />

              <Button
                type="submit"
                variant="outlined"
                onClick={() => alert("Cadastrado contato")}
                sx={{ mt: 3, mb: 2 }}
              >
                Contatar
              </Button>

            </CardContent>
          </Card>
        </Box>
      </Container>
    </>
  );
};

export default ACSContact;
