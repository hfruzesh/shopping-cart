import React, { Component } from "react";

class About extends Component {

  state = {
    company: '',
    title: '',
    img: '',
    price: '',
    info: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
  }

  handleCompanyChange = (e) => {
    this.setState({
      company: e.target.value
    })
    console.log(this.state.company)
  }

  handleTitleChange = (e) => {
    this.setState({
      title: e.target.value
    })
    console.log(this.state.title)
  }

  handleImgChange = (e) => {
    this.setState({
      img: e.target.value
    })
    console.log(this.state.img)
  }

  handlePriceChange = (e) => {
    this.setState({
      price: e.target.value
    })
    console.log(this.state.price)
  }

  handleInfoChange = (e) => {
    this.setState({
      info: e.target.value
    })
    console.log(this.state.info)
  }

  render() {



    return (
      <div className="container col-6">
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div className="form-group">
            <label htmlFor="companyInput">Company</label>
            <input className="form-control" type="text" placeholder="Company" name="companyInput" onChange={(e) => this.handleCompanyChange(e)} />
          </div>
          <div className="form-group">
            <label htmlFor="titleInput">Title</label>
            <input className="form-control" type="text" placeholder="Title" name="titleInput" onChange={(e) => this.handleTitleChange(e)} />
          </div>
          <div className="form-group">
            <label htmlFor="imgInput">Img</label>
            <input className="form-control" type="text" placeholder="Img" name="imgInput" onChange={(e) => this.handleImgChange(e)} />
          </div>
          <div className="form-group">
            <label htmlFor="priceInput">Price</label>
            <input className="form-control" type="number" placeholder="Price" name="priceInput" onChange={(e) => this.handlePriceChange(e)} />
          </div>
          <div className="form-group">
            <label htmlFor="infoInput">Info</label>
            <input className="form-control" type="text-area" placeholder="Info" name="infoInput" onChange={(e) => this.handleInfoChange(e)} />
          </div>
          <button type="submit" className="btn btn-info">Submit</button>
        </form>
      </div>
    );
  }
}

export default About;