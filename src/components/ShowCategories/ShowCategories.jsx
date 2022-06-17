import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const ShowCategories = ({ categories, setCategories }) => {
  const deleteCategory = (index) => {
    setCategories((prevState) =>
      prevState.filter((category, idx) => index !== idx)
    );
  };

  return (
    <Box sx={{ width: "100%", border: "1px solid #c3c3c3", borderRadius: 1.2 }}>
      <List>
        {categories.length
          ? categories.map((category, index) => (
              <ListItem key={index}>
                <ListItemText primary={category} />
                <ListItemIcon>
                  <DeleteOutlinedIcon
                    color="error"
                    sx={{ cursor: "pointer" }}
                    onClick={() => deleteCategory(index)}
                  />
                </ListItemIcon>
              </ListItem>
            ))
          : null}
      </List>
    </Box>
  );
};

export default ShowCategories;
