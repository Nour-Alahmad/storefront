import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { connect } from "react-redux";
import { activateCategory } from "../../store/categories";
import { filterProducts } from "../../store/prodects";
import Products from "../products/Products";

const Categories = (props) => {
  const [value, setValue] = React.useState(props.selectedCategory);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    props.activateCategory(newValue);
  };


  return (
    <>
      {" "}
      <div>

        <Box sx={{ width: "100%", typography: "body1" }}>
          {props.mycategories.map((category, index) => {
            return (
              <>
                <TabContext value={value} key={index}>
                  <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <TabList
                      onChange={handleChange}
                      aria-label='lab API tabs example'>
                      <Tab label={category.name} value={category.name} />
                    </TabList>
                  </Box>
                </TabContext>
              </>
            );
          })}
        </Box>

        <TabContext value={value}>
          {props.mycategories.map((category, index) => {
            return (
              <>
                <TabPanel key={index} value={category.name}>
                  <Box
                    sx={{
                      bgcolor: "background.paper",
                      pt: 8,
                      pb: 6,
                    }}>
                    <Container maxWidth='sm'>
                      <Typography
                        component='h1'
                        variant='h2'
                        align='center'
                        color='text.primary'
                        gutterBottom>
                        {category.displayName}
                      </Typography>
                      <Typography
                        variant='h5'
                        align='center'
                        color='text.secondary'
                        paragraph>
                        {category.description}
                       
                      </Typography>
                    <p>-------------------------------------------------------------------------------------------------------</p>
                    </Container>
                  </Box>
                </TabPanel>
              </>
            );
          })}
        </TabContext>
        <Products/>
      </div>
      
    </>
  );
};

const mapStateToProps = (state) => ({
  mycategories: state.categories.categories, 
  selectedCategory: state.categories.selectedCategory,
});

const mapDispatchToProps = {
  activateCategory,
  filterProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
