
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { activateCategory } from "../../store/categories";
import { connect } from "react-redux";



const Products =(props)=> {


// const  filteredProducts = props.myProducets.filter(
//   (product) => product.category === props.selectedCategory
// );

console.log( props.myProducets)
console.log( props.selectedCategory)

  return (
    <div>
         <Container sx={{ py: 8 }} maxWidth="md">
    {/* End hero unit */}
    <Grid container spacing={4}>
      { props.myProducets.map((card) => (

    card.category === props.selectedCategory ? ( <Grid item key={card.id} xs={12} sm={6} md={4}>
          <Card
            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
          >
            <CardMedia
              component="div"
              sx={{
                // 16:9
                pt: '56.25%',
              }}
              image="https://source.unsplash.com/random?wallpapers"
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h2">
             {  card.name}
              </Typography>
              <Typography>
               {card.description}<br/>
               {card.price}$
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">View Details</Button>
              <Button size="small">Add To Cart</Button>
            </CardActions>
          </Card>
        </Grid>) : null
      ))}

    </Grid>
  </Container>
  
  </div>
  )
}
const mapStateToProps = (state) => ({
  myProducets: state.products.products ,
  selectedCategory: state.categories.selectedCategory,
  
});

const mapDispatchToProps = {
  activateCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);