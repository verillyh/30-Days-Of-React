import React from "react";
import FormInput from "./FormInput";

export default class App extends React.Component {
  state = {
    fullName: "",
    email: "",
    phone: "",
    streetAddress: "",
    city: "",
    zipcode: "",
    creditcard: "",
    expiry: "",
    cvv: "",
    cardholder: "",

  };

  handleSubmit = e => {
    e.preventDefault()
    let {
      fullName,
      email,
      phone,
      streetAddress,
      city,
      zipcode,
      creditcard,
      expiry,
      cvv,
      cardholder,
    } = this.state;
    
    if (fullName == "") {
      personalInfo.required = true
    }
  }

  
  render() {
    let personalInfo = [
      {name: "fullName", value: this.state.fullName, text: "Full Name", err: "Please enter your full name", required: false},
      {name: "email", value: this.state.email, text: "Email Address", pattern:/^[0-9a-zA-Z._]+@\w{3,}\.\w{2,}$/, err: "Please enter a valid email address", required: false},
      {name: "phone", value: this.state.phone, text: "Phone Number", pattern:/^\d{6, 12}$/ , err: "Please enter a valid phone number", required: false}
    ]
    let shippingAddress = [ 
      {name: "streetAddress", value: this.state.streetAddress, text: "Street Address", err: "Please enter a street address", required: false},
      {name: "city", value: this.state.city, text: "City", err: "Please enter a city", required: false},
      {name: "zipcode", value: this.state.zipcode, text: "Zipcode", pattern: /^\d{4}$/,  err: "Please enter a valid zipcode", required: false}
    ]
    let creditCard = [
      {name: "creditcard", value: this.state.creditcard, text: "Credit Card Number", pattern: /^\d{14,16}$/, err: "Please enter a credit card number", required: false},
      {name: "expiry", value: this.state.expiry, text: "Expiry", pattern: /^\d{2}\/\d{2}$/, err: "Please enter expiry date (MM/YY)", required: false},
      {name: "cvv", value: this.state.cvv, text: "CVV", pattern: /\d{3}/,  err: "Enter a CVV", required: false},
      {name: "cardholder", value: this.state.cardholder, text: "Cardholder", err: "Enter cardholder's name", required: false}
    ]
  
    let fieldsets= [
      {data: personalInfo, text: "Personal Information"},
      {data: shippingAddress, text: "Shipping Address"},
      {data: creditCard, text: "Credit Card"}
    ]
    return (
      <section className="min-w-full min-h-full text-neutral-50 pt-10">
        <form onSubmit={this.handleSubmit} className="bg-neutral-600 flex flex-col justify-center max-w-[30rem] rounded-md p-5 mx-auto" noValidate>
          <h1 className="text-3xl font-semibold text-center mb-5">Checkout</h1>
          {fieldsets.map(fieldset => 
                <fieldset key={fieldset.text} className="flex flex-col">
                  <legend>{fieldset.text}</legend>
                  {fieldset.data.map(item =>
                    <FormInput key={item.name} {...item} onChange={e => this.setState({[e.target.name]: e.target.value})} state={this.state} />                    
                  )}
                </fieldset>
            )}
          <button type="submit" className="bg-neutral-50 rounded-full w-28 m-auto h-10 text-neutral-600">Submit</button>
        </form>
      </section>
    );
  }
}
