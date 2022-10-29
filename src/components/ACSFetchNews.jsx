import { Card, CircularProgress, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Container } from "@mui/system";
import Divider from "@mui/material/Divider";

const ACSFetchNews = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const url = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setNews(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <Container component="main" maxWidth="sm" style={{ marginTop: "10%" }}>
      <Typography variant="h2">Noticias</Typography>

      {isLoading ? (
        <CircularProgress />
      ) : (
        news.map((noticia) => (
          <Card
            style={{
              marginBottom: "1rem",
              padding: "1.5rem",
            }}
            key={noticia.id}
          >
            <Typography style={{ fontWeight: "bold", color: "gray"}}variant="h5">
              {noticia.title}
            </Typography>

            <Divider style={{marginBottom: "1rem", marginTop: "1rem"}}/>

            <Typography style={{ textAlign: "justify", marginTop: "1rem" }} variant="p">
              {noticia.body}
            </Typography>
          </Card>
        ))
      )}
    </Container>
  );
};

export default ACSFetchNews;
