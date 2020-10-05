import React, { Component } from 'react'
import { addToCart, removeFromCart } from '../redux/actions'
import { connect } from 'react-redux'

class Product extends Component {

    testForCart = (index) => {
        if ((this.props.cart.find(item => item.title === this.props.productData[index].title)) !== undefined) {
            console.log('found it in the cart already')
        } else {
            this.props.addToCart(this.props.productData[index])

        }
    }



    render() {
        const { itemId, index, productData, removeFromCart, addToCart } = this.props
        return (
            <div className="card" style={{ width: 18 + "rem" }}>
                <div className="img-container">
                    <img className="card-img-top" src={productData[index].img} alt="Phone image" />

                    {((this.props.cart.find(item => item.title === this.props.productData[index].title)) === undefined) ? (
                        <button
                            onClick={() => addToCart(this.props.productData[index])}
                            className="btn btn-info cart-btn"
                        >
                            Cart
                        </button>
                    ) : (
                            <button
                                onClick={() => removeFromCart(index)}
                                className="btn btn-danger cart-btn"
                            >
                                Remove
                            </button>

                        )}



                </div>
                <div className="card-body">
                    <h5 className="card-title">{productData[index].title}</h5>
                    <h6 className="card-subtitle">{productData[index].company}</h6>
                    <p className="card-text">{productData[index].info}</p>
                    <p className="card-text">{productData[index].price}</p>
                </div>
            </div >
        )
    }
}

const mapStateToProps = (state) => ({
    productData: state.productData,
    cart: state.cart
})

const mapActionsToProps = {
    addToCart,
    removeFromCart,
}

export default connect(mapStateToProps, mapActionsToProps)(Product)
