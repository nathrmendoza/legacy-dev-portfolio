import styled from "styled-components";
import { NarrowDiv } from "../styles/ThemeContainers";
import { TypeH2, TypeText } from "../styles/Typography";
import { Input, TextArea, SubmitButton } from "../styles/Forms";

import emailjs from '@emailjs/browser'
import { useState } from "react";


const GetInTouch = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleInputChange = e => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleFormSubmit = e => {
        e.preventDefault();
        console.log(formData);
    }

    return (
        <NarrowDiv style={{marginBottom: '72px'}}>
            <TypeH2 style={{textAlign: 'center'}}>Get in Touch</TypeH2>
            <TypeText style={{textAlign: 'justify'}}>If you're interested in the work I do, feel free to reach out thru this form. Alternatively, you could also get in touch with my social accounts.</TypeText>
            <form onSubmit={handleFormSubmit}>
                <Input type="text" name="name" value={formData.name} onChange={handleInputChange} required placeholder="Name" />
                <Input type="email" name="email" value={formData.email} onChange={handleInputChange} required placeholder="Email" />
                <TextArea name="message" value={formData.message} onChange={handleInputChange} required placeholder="Message..." />
                <SubmitButton type="submit">SUBMIT</SubmitButton>
            </form>
        </NarrowDiv>
    )
}

export default GetInTouch