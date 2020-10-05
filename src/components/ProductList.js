import React, { Component } from 'react'
import Product from './Product'
import { connect } from 'react-redux'

class ProductList extends Component {

    render() {
        const { productData } = this.props
        return (
            <React.Fragment>

                <div className="row">
                    {productData.map((item) => {
                        return (
                            <Product
                                key={item.itemId}
                                itemId={item.itemId}
                                index={item.index}
                            />
                        )
                    })}
                </div>

            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    productData: state.productData
})


export default connect(mapStateToProps)(ProductList)
