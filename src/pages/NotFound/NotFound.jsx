import { Link } from "react-router-dom";

import Container from "@mui/material/Container";
import notFound from "../../assets/404.svg";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const NotFound = () => {
  return (
    <>
      <Container>
        <Typography variant="h4" component="h2" my={2}>
          Sorry, this page isn&#x27;t available
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            height: "50%",
          }}
          my={5}
        >
          <Box
            component="img"
            alt="Not Found"
            src={notFound}
            sx={{
              maxWidth: {
                xs: "100%",
                sm: "75%",
                md: "50%",
              },
              height: "auto",
            }}
          ></Box>
        </Box>

        <Link to="/" replace={true}>
          <Button variant="contained" color="secondary">
            Take me home !
          </Button>
        </Link>
      </Container>
    </>
  );
};

export default NotFound;
