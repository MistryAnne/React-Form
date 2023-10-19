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
            <label className="multiple_text" htmlFor="name">
                Name:
            </label>
            <input 
            type="text" 
            id="name" 
            className="multiple_input" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} />
            
            <label className="multiple_text" htmlFor="description">
                Description:
            </label>
            <input 
            type="text" 
            id="description" 
            className="multiple_input" 
            name="description" value={formData.description} 
            onChange={handleChange} />

            <label className="multiple_text" htmlFor="category">
                Category:
            </label>
            <input 
            type="text" 
            id="category" 
            className="multiple_input" 
            name="category" value={formData.category} 
            onChange={handleChange} /> 

            <label className="multiple_text" htmlFor="quantity">
                Quantity:
            </label>
            <input 
            type="number" 
            id="Quantity" 
            className="multiple_input" 
            name="quantity" value={formData.quantity} 
            onChange={handleChange} />

            <label className="multiple_text" htmlFor="price">
                Price:
            </label>
            <input 
            type="number" 
            id="Price" 
            className="multiple_input" 
            name="price" value={formData.price} 
            onChange={handleChange} />

            <button className="submit_button" type="submit">
                Submit
            </button>
            <button className="clear_button" type="reset" onClick={handleCancel}>
                Cancel
            </button>
        </form>
    )
}
    