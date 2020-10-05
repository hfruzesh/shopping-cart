import React, { Component } from "react";
import { connect } from 'react-redux'
import CartItem from '../components/CartItem'
import { updateCartItems } from '../redux/actions'
import { Link } from 'react-router-dom'

class Cart extends Component {



  render() {
    let duplicateCheck = [];
    const { cart, itemsTotal, loading } = this.props

    return (
      <div>
        {cart.length > 0 ? (
          <div>
            <div className="row d-flex justify-content-around mb-3">
              <div className="col-5 d-flex justify-content-center font-weight-bolder">ITEM</div>
              <div className="col-2 d-flex justify-content-center font-weight-bolder">QTY</div>
              <div className="col-3 d-flex justify-content-center font-weight-bolder">PRICE</div>
            </div>
            <hr />
          </div>
        ) : (!loading ?
          (<div>
            <div className="col-12 text-center justify-content-center blue-link">
              <h1>Cart Is Empty</h1>
              <h3>Click {' '}<Link to="/">Here</Link>{' '}To Continue Shopping
              </h3>
            </div>
          </div>) : null

          )}
        {!loading ? (

          cart.map((item, index) => {
            if ((duplicateCheck.find(_index => _index === item.index)) === undefined) {
              duplicateCheck.push(item.index)
              return (
                <CartItem
                  key={item.index}
                  itemNum={index}
                />
              )
            } else {
              return null
            }
          })

        ) : (
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          )}
        { cart.map((item, index) => {
          if ((duplicateCheck.find(_index => _index === item.index)) === undefined) {
            duplicateCheck.push(item.index)
            return (
              <CartItem
                key={item.index}
                itemNum={index}
              />
            )
          } else {
            return null
          }
        })
        }
        {!loading ? (
          cart.length > 0 ? (
            <div className="container d-flex justify-content-end pr-5">
              <div className="d-flex flex-column">
                <div>
                  <div className="row">
                    <div className="col-9">Items</div>
                    <div className="col-2">${itemsTotal.toFixed(2)}</div>
                  </div>
                  <div className="row">
                    <div className="col-9">Tax</div>
                    <div className="col-2">${(itemsTotal * 0.12).toFixed(2)}</div>
                  </div>


                  <hr />

                  <div className="row">
                    <div className="col-9">Total</div>
                    <div className="col-2">${(itemsTotal + (itemsTotal * 0.12)).toFixed(2)}</div>
                  </div>

                </div>
              </div>
            </div>
          ) : null
        ) : (null)}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
  itemsTotal: state.itemsTotal,
  loading: state.loading
})

const mapActionsToProps = {
  updateCartItems
}

export default connect(mapStateToProps, mapActionsToProps)(Cart);
