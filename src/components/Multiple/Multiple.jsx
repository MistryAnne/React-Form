import { useState } from "react";
import "./multiple.css";


export default function Multiple() {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        category: "",
        quantity: "",
        price: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value}));
    };

    const handleCancel = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ [name]:value, prevFormData}));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(
            'Name: '+ formData.name +', Description: '+formData.description+', Category: '+formData.category+', Quantity: '+formData.quantity+', Price: '+formData.price
        );
    };

    return(
        <form onSubmit={handleSubmit} className="multiple">
            
            <input 
            type="text" 
            id="name" 
            className="multiple_input" 
            name="name" 
            value={formData.name} 
            placeholder="Name"
            onChange={handleChange} 
            required/>
            <br/><br/>
            
            <input 
            type="text" 
            id="description" 
            className="multiple_input" 
            name="description" 
            value={formData.description} 
            placeholder="Description"
            onChange={handleChange} 
            required/>
            <br/><br/>

            <input 
            type="text" 
            id="category" 
            className="multiple_input" 
            name="category" 
            value={formData.category} 
            placeholder="Category"
            onChange={handleChange} 
            required/> 
            <br/><br/>

            <input 
            type="number" 
            id="Quantity" 
            className="multiple_input" 
            name="quantity" 
            value={formData.quantity} 
            placeholder="Quantity"
            onChange={handleChange} 
            required/>
            <br/><br/>

            <input 
            type="number" 
            id="Price" 
            className="multiple_input" 
            name="price" 
            value={formData.price} 
            placeholder="Price"
            onChange={handleChange} 
            required/>
            <br/><br/>

            <button className="submit_button" type="submit">
                Submit
            </button>
            <button className="clear_button" type="reset" onClick={handleCancel}>
                Cancel
            </button>
        </form>
    )
}
    