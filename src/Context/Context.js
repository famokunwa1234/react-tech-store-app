// import React, { Component } from "react"
// import {LinkData} from "./LinkData";
// import {SocialData} from "./SocialData";
// import { items } from "./productData";
// const ProductContext = React.createContext();
// //privider
// //comsumer
// class ProductProvider extends Component {
//     state = {
//         sidebarOpen: false,
//         cartOpen: true,
//         // cartItems: 2,
//         links: LinkData,
//         SocialIcons: SocialData,
//         cart: [],
//         cartItems:0,
//         cartSubTotal:0,
//         cartTotal:0,
//         cartTax:0,
//         storeProducts: [],
//         filterProducts: [],
//         featuredProducts: [],
//         singleProduct: {}, 
//         loading: false
//     }; 
//     componentDidMount() {
//     //from contentful items

//     this.storeProducts(items);
//     }

//     //set product
//     storeProducts= (products) => {
//     let storeProducts = products.map(item => {
//     const {id} = item.sys;
//     const image = item.fields.image.fields.file.url
//     const product = {id, ...item.fields, image};
//     return product
//     });
//     //featured products
//     let featuredProducts = storeProducts.filter(item =>
//         item.featured === true);
//         this.setState({
//             storeProducts,
//             filterProducts:storeProducts,
//             featuredProducts,
//             cart:this.getStorageCart(),
//             singleProduct:this.getStorageProduct(),
//             loading: false
//         })
//     };
//     //get cart from local storage
//     getStorageCart =() => {
//         return [];
//     };
//     //get product fron local storage
//     getStorageProduct =() => {
//         return [];
//     };
//     // get total from local storage
//     getTotals = () => {};
//     //add totals
//     getTotals = () => {};
//     //sync storage
//     syncStorage = () => {

//     };
//     //add to cart
//     addToCart = (id) => {
//         console.log(`add to cart ${id}`);
//     }
//     //set single product
//     setSingleProduct = (id) => {
//         console.log(`set single product ${id}`);
//     }

//     //handle sidebar
//     handleSidebar = () => {      
//         this.setState({sidebarOpen: !this.state.sidebarOpen})
//     }
//     // handle cart   
//     handleCart = () => {
//         this.setState({CartOpen: !this.state.sidebarOpen})
//     }
//     //close cart
//      closeCart = () => {
//         this.setState({cartOpen: false})
//     }
//     //open cart
//     openCart = () => {
//         this.setState({cartOpen: true})
//     }
//     render() {
//         return (
//         <ProductContext.Provider 
//         value={{
//             // sidebarOpen:this.state.sidebarOpen,
//             ...this.state,
//             handleSidebar: this.handleSidebar,
//             handleCart: this.state.handleCart,
//             closeCart: this.closeCart,
//             openCart: this.openCart,
//             addToCart: this.addToCart,
//             setSingleProduct: this.setSingleProduct
//             }}>
//             {this.props.children}
//         </ProductContext.Provider>
//         )
//     }
// }

// const ProductConsumer = ProductContext.Consumer;

// export { ProductProvider,ProductConsumer};



import React, { Component } from "react";
import { LinkData } from "./LinkData";
import { SocialData } from "./SocialData";
import { items } from "./productData";
const ProductContext = React.createContext();
//Provider
//Consumer
class ProductProvider extends Component {
  state = {
    sidebarOpen: false,
    cartOpen: false,
    links: LinkData,
    SocialIcons: SocialData,
    cart: [],
    cartItems: 0,
    cartSubTotal: 0,
    cartTax: 0,
    carTotal: 0,
    storeProducts: [],
    filteredProducts: [],
    featuredProducts: [],
    singleProduct: {},
    loading: false
  };
  componentDidMount() {
    //from contentful items

    this.setProducts(items);
  }

  //set products

  setProducts = products => {
    let storeProducts = products.map(item => {
      const { id } = item.sys;
      const image = item.fields.image.fields.file.url
      const product = { id, ...item.fields, image };
      return product;
    });
    //  featured products
    let featuredProducts = storeProducts.filter(item => item.featured === true);
    this.setState({
      storeProducts,
      filteredProducts: storeProducts,
      featuredProducts,
      cart: this.getStorageCart(),
      singleProduct: this.getStorageProduct(),
      loading: false
    });
  };
  // get cart from local storage
  getStorageCart = () => {
    return [];
  };
  // get product from local storage
  getStorageProduct = () => {
    return {};
  };
  // get totals
  getTotals = () => {};
  //add totals
  addTotals = () => {};
  // sync storage
  syncStorage = () => {};
  //add to cart
  addToCart = id => {
    console.log(`add to cart ${id}`);
  };
  // set single product
  setSingleProduct = id => {
    console.log(`set single product ${id}`);
  };

  // handle sidebar
  handleSidebar = () => {
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
  };
  // hanldle sart
  handleCart = () => {
    this.setState({ cartOpen: !this.state.sidebarOpen });
  };
  //close cart
  closeCart = () => {
    this.setState({ cartOpen: false });
  };
  // open
  openCart = () => {
    this.setState({ cartOpen: true });
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleSidebar: this.handleSidebar,
          handleCart: this.handleCart,
          closeCart: this.closeCart,
          openCart: this.openCart,
          addToCart: this.addToCart,
          setSingleProduct: this.setSingleProduct
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
