import React from "react"
import Footer from "./Footer"

export default function Contact() {
    const [formData, setFormData] = React.useState(
        {
            firstName: "", 
            lastName: "", 
            email: "", 
            comments: "", 
            agreement: false,
            
        }
    )
    
    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    
    function handleSubmit(event) {
        event.preventDefault()
        // console.log(formData)
    }
    
    return (

        <div className="contact-Page">
            <div id="contact-text">
                <div>
                    <h1 className="contact-header">Contact Me</h1>
                    <p className="contact-Paragraph">Hi there, contact me to ask me about anything you have in mind.</p>
                </div>
            </div>
            <form onSubmit={handleSubmit} id="contact-field">
               <div className="names">
                    <div>
                        <label htmlFor="firstName" className="labels">First name</label>
                        <input
                        
                            type="text"
                            placeholder="Enter your first Name"
                            onChange={handleChange}
                            name="firstName"
                            value={formData.firstName}
                            id = "first_name"
                        />
                    </div>

                    <div>
                        <label htmlFor="lastName" className="labels">Last name</label>
                        <input
                            type="text"
                            placeholder="Enter your last Name"
                            onChange={handleChange}
                            name="lastName"
                            value={formData.lastName}
                            id = "last_name"
                        />
                    </div>
                </div>
                <label htmlFor="email" className="labels">Email</label>
                <input
                    type="email"
                    placeholder="yourname@email.com"
                    onChange={handleChange}
                    name="email"
                    value={formData.email}
                    id = "email"
                />
                <br />
                <label htmlFor="comments" className="labels">Message</label>
                <textarea 
                    value={formData.comments}
                    placeholder="Send me a message and I'll reply you as soon as possible..."
                    onChange={handleChange}
                    name="comments"
                    id="message"
                />
                <br />
                
                <input 
                    type="checkbox" 
                    id="agreement" 
                    checked={formData.agreement}
                    onChange={handleChange}
                    name="agreement"
                />
                <label className="agree-label" htmlFor="agreement">You agree to providing your data to William who may contact you.</label>
                <br />
                
                <br />
                <br />
                <button id="btn__submit">Send Message</button>
            </form>
            <Footer />
        </div>
    )
}
