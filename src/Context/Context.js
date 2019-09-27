import React, { Component } from "react"
import {LinkData} from "./LinkData";
const ProductContext = React.createContext();
//privider
//comsumer
class ProductProvider extends Component {
    state = {
        sidebarOpen: false,
        cartOpen: true,
        cartItems: 2,
        links: LinkData,
        cart: []
    }
    //handle sidebar
    handleSidebar = () => {
        this.setState({sidebarOpen: !this.state.sidebarOpen})
    }
    // handle cart bar
    handleCart = () => {
        this.setState({CartOpen: !this.state.sideOpen})
    }
    //close cart
     closeCart = () => {
        this.setState({cartOpen: false})
    }
    //open cart
    openCart = () => {
        this.setState({cartOpen: true})
    }
    render() {
        return (
        <ProductContext.Provider 
        value={{
            // sidebarOpen:this.state.sidebarOpen,
            ...this.state,
            handleSidebar: this.handleSidebar,
            handleCart: this.state.handleCart,
            closeCart: this.closeCart,
            openCart: this.openCart
            }}>
            {this.props.children}
        </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider,ProductConsumer};