import React from "react";

export default class FormInput extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        let {text, onChange: handleChange, value, state, err, ...propsRest}  = this.props
        return(
            <div className="flex flex-col-reverse relative">
                <input className="peer" type="text" id={this.props.name} value={state.name} {...propsRest} onChange={handleChange}/>
                <label htmlFor={this.props.name}>{text}</label>
                <p className="absolute top-0 right-0 text-red-500 hidden peer-invalid:block">{err}</p>
            </div>
        )
    }
}   