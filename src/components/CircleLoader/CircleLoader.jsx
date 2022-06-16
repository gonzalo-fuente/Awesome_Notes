import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const CircleLoader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
      }}
    >
      <CircularProgress size={"5rem"} />
    </Box>
  );
};

export default CircleLoader;
