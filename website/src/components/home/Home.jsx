import React, { PureComponent } from "react";
import Features from "./Features";
import HomeBanner from "./HomeBanner";
import Footer from "../common/Footer";
import HomeCategory from "./HomeCategory";
import Product from "./Product";
import ExclusiveDeal from "./ExclusiveDeal";
import Brand from "./Brand";
import RelatedProduct from "../common/RelatedProduct";

export class Home extends PureComponent {
  render() {
    return (
      <>
        <HomeBanner />
        <Features />
        <HomeCategory />
        <Product />
        <ExclusiveDeal />
        <Brand />
        <RelatedProduct />
        <Footer />
      </>
    );
  }
}

export default Home;
