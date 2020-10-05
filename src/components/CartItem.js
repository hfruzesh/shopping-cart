import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removeFromCart, addToCart, lowerCartQuantity } from '../redux/actions'
import { BsFillCaretDownFill, BsFillCaretUpFill } from 'react-icons/bs'


class CartItem extends Component {
    state = {
        quantity: 0
    }

    componentDidMount = () => {
        let duplicateCheck1 = [];
        this.props.cart.forEach(item => {
            duplicateCheck1.push(item.index)
        })
        this.setState({
            quantity: duplicateCheck1.filter(num => num === this.props.cart[this.props.itemNum].index).length
        })
    }

    handleQuantityIncrease = (cartItem) => {
        this.props.addToCart(cartItem)
        this.setState({
            quantity: this.state.quantity + 1
        })
    }

    handleQuantityDecreate = (index) => {
        if (this.state.quantity > 0) {
            this.props.lowerCartQuantity(index)
            this.setState({
                quantity: this.state.quantity - 1
            })
        }
    }


    handleQtantityChange = () => {

    }

    render() {
        const { cart, itemNum, removeFromCart, loading } = this.props
        return (
            <React.Fragment>
                {console.log(cart)}
                {!loading ? (
                    cart[itemNum] ? (
                        <div>
                            <div className="row col-12 d-flex justify-content-around">
                                <div className="row col-4 d-flex justify-content-center">
                                    <div className="col-6">
                                        <img src={cart[itemNum].img} alt={cart[itemNum].company} style={{ maxHeight: 80 }} />
                                    </div>
                                    <div className="col-6">
                                        {cart[itemNum].title}
                                    </div>
                                </div>
                                <div className="col-2">
                                    <button
                                        onClick={() => removeFromCart(cart[itemNum].index)}
                                        className="btn btn-danger rmv-btn"
                                    >
                                        Remove</button>
                                </div>
                                <div className="col-4 row">
                                    <div className="col-8">
                                        Quantity: {this.state.quantity}
                                    </div>
                                    <div className="d-flex flex-column">
                                        <BsFillCaretUpFill onClick={() => this.handleQuantityIncrease(cart[itemNum])} />
                                        <BsFillCaretDownFill onClick={() => this.handleQuantityDecreate(cart[itemNum].index)} />
                                    </div>
                                </div>
                                <div className="col-2">
                                    ${(cart[itemNum].price).toFixed(2)}
                                </div>
                            </div>
                            <hr />
                        </div>
                    ) : null
                ) : (
                        null
                    )}

            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    cart: state.cart,
    loading: state.loading
})

const mapActionsToProps = {
    removeFromCart,
    addToCart,
    lowerCartQuantity
}

export default connect(mapStateToProps, mapActionsToProps)(CartItem)
