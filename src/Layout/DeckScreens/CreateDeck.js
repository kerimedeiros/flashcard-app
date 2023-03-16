import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { createDeck } from "../../utils/api/index"

function CreateDeck() {
    const history = useHistory();
    const initialFormState = {
        name: "",
        description: "",
    };

    const [formData, setFormData] = useState(initialFormState)

    const handleChange = ({target}) => {
        setFormData({...formData, [target.name]: target.value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await createDeck(formData)
        history.push(`/decks/${response.id}`)
    }

    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Create Deck</li>
                </ol>
            </nav>
            <h2>Create Deck</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name" className="form-label">
                        Name
                        <input type="text" id="name" name="name" className="form-control" onChange={handleChange} value={formData.name}/>
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="description" className="form-label">
                        Description
                        <textarea id="description" type="description" name="description" className="form-control" onChange={handleChange} value={formData.description}/>
                    </label>
                </div>
                <button type="submit" className="btn btn-primary mr-2">Submit</button>
                <button type="button" className="btn btn-secondary mr-2" onClick={() => history.push("/")}>Cancel</button>
            </form>
        </div>
        )
}

export default CreateDeck;