import {
  Alert,
  Avatar,
  Button,
  Card,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import { Box, Container } from "@mui/system";
import React, { useEffect, useState } from "react";

const ACSFetchAlbum = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <Container component="main" maxWidth="xs" style={{ marginTop: "10%" }}>
      {isLoading ? (
        <div>Carregando</div>
      ) : (
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <Card
            style={{
              marginTop: "10%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              src="https://upload.wikimedia.org/wikipedia/pt/f/fd/J%C3%A3o_-_Anti-Her%C3%B3i.png"
              sx={{ width: 250, height: 250 }}
            />
            <Typography style={{ textAlign: "center" }} variant="h2">
              Anti-Heroi
            </Typography>
            <Typography style={{ textAlign: "center" }} variant="h5">
              2019
            </Typography>

            <CardContent>
              <Tooltip title="Ouvir">
                <Button
                  type="submit"
                  variant="outlined"
                  href="https://open.spotify.com/album/3l3LZovnHa1TmtR1V2fxkP?si=RvjVlNJzTJWjT7ZwswlM0Q"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Acessar album
                </Button>
              </Tooltip>
            </CardContent>
          </Card>

          <Card
            style={{
              marginTop: "10%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              src="https://upload.wikimedia.org/wikipedia/pt/f/f6/Pirata_-_J%C3%A3o.png"
              sx={{ width: 250, height: 250 }}
            />
            <Typography style={{ textAlign: "center" }} variant="h2">
              Pirata
            </Typography>
            <Typography style={{ textAlign: "center" }} variant="h5">
              2021
            </Typography>

            <CardContent>
              <Tooltip title="Ouvir">
                <Button
                  type="submit"
                  variant="outlined"
                  href="https://open.spotify.com/album/2LeCiUHBSmUMyrclDEEBly?si=Px9n7OXcQh2Xqg21Ad5kqA"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Acessar album
                </Button>
              </Tooltip>
            </CardContent>
          </Card>

          <Card
            style={{
              marginTop: "10%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              src="https://portalpopline.com.br/wp-content/uploads/2020/08/j%C3%A3o-2.jpg"
              sx={{ width: 250, height: 250 }}
            />
            <Typography style={{ textAlign: "center" }} variant="h2">
              Lobos
            </Typography>
            <Typography style={{ textAlign: "center" }} variant="h5">
              2018
            </Typography>

            <CardContent>
              <Tooltip title="Ouvir">
                <Button
                  type="submit"
                  variant="outlined"
                  href="https://open.spotify.com/album/67a6pDoMKQYOKGMnmUQZbq?si=p3PIQfC2R1qE4pQQQSiyRQ"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Acessar album
                </Button>
              </Tooltip>
            </CardContent>
          </Card>
        </Box>
      )}
    </Container>
  );
};

export default ACSFetchAlbum;
