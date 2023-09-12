import './App.css'
import Categories from './Components/catergories/Categories'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Components/header/Header';
import { Route, Routes, } from "react-router-dom";

function App() {

  
  const defaultTheme = createTheme();

  return (
    <>
    
      <Header/>

      
      <ThemeProvider theme={defaultTheme}>
      <Routes>
            <Route path='/' element={<Categories/>} />
       
            <Route path='/cart' element={<Categories/>} />       
      </Routes>
      </ThemeProvider>
    
    </>
  )
}

export default App
