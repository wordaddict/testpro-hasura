import React, { Component } from 'react';
import { Mutation } from "react-apollo";
import {addMedicineMutation} from '../components/addMedicine'

class AddMedicine extends Component{
    constructor(props) {
        super(props);
        this.state = {
            medicine: '',
        }

        this.handleMedicineClick = this.handleMedicineClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    render(){
        const inputClass = this.state.inputHidden ? 'hide' : '';
        return(
               <Mutation mutation={addMedicineMutation}>
                    {(addMedicine, { loading, error, data }) => (
                        
                        // addMedicine({
                            
                        // })
                        console.log('dta from updating', data)
                    )}
                </Mutation>
            // <div className={inputClass}>
            //     <form>
            //         <fieldset>
            //             <input placeholder="medicine" value={this.state.medicine} name="medicine" type="text" onChange={this.handleChange} tabIndex="1" required autoFocus/>
            //         </fieldset>
            //     </form>
            //     <button onClick={this.handleMedicineClick}>Add medicine</button>
            // </div>
        )
    }
}

export default AddMedicine;
