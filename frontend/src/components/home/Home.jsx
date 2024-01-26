import { React } from "react";
import Header from "../general/Header";
import Footer from "../general/Footer";
import MainImage from "./MainImage";
import Container from '@mui/material/Container';
import MoreAbout from "./MoreAbout";
import ProductsHome from "./ProductsHome";

function Home() {

  const mainFeaturedPost = {
    title: 'Title of a longer featured blog post',
    description:
      "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    image: 'https://source.unsplash.com/random?supermarket',
    imageText: 'main image description',
  };

  return (
    <div className="home-div">
      <Header />
      <Container maxWidth="lg">

      <main>
          <br />
          <MainImage post={mainFeaturedPost} />
          <ProductsHome />
          <MoreAbout />
      </main>
      </Container>
      <Footer />
    </div>
  );
}

export default Home;