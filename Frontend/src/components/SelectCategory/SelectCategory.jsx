import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const SelectCategory = ({ categories, filterCategory, setFilterCategory }) => {
  const handleChange = (event) => {
    setFilterCategory(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-select-category"
        select
        label="Select"
        value={filterCategory}
        onChange={handleChange}
        helperText="Please select your category"
      >
        <MenuItem value="">All</MenuItem>
        {categories.map((option, index) => (
          <MenuItem key={index} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
};

export default SelectCategory;
