import { NarrowDiv } from "../styles/ThemeContainers";
import { TypeH2, TypeText } from "../styles/Typography";
import { Input, TextArea, SubmitButton } from "../styles/Forms";

import emailjs from '@emailjs/browser'
import { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import MySocials from "./MySocials";
import { textFadeIn, titleFadeIn } from "../utils/FramerMotionAnimations";
import { motion } from "framer-motion";


const GetInTouch = () => {

    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
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
        setLoading(true);
        emailjs.send('service_qudp8rf', 'template_zc3b8ar', formData, {
            publicKey: 'CE7pUwdvNKG1677bm'
        }).then(
            () => {
                setLoading(false);
                toast.success('Inquiry received! Will get to it ASAP.')
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                })
            },
            err => {
                toast.error('Error occured submitting the form.');
            }
        );
    }

    return (
        <>
        <ToastContainer position="top-right" autoClose={6000} hideProgressBar={false} newestOnTop={true} pauseOnHover theme="colored"/>
        <NarrowDiv>
            <TypeH2 {...titleFadeIn} style={{textAlign: 'center'}}>Get in Touch</TypeH2>
            <TypeText {...textFadeIn} style={{textAlign: 'justify'}}>If you're interested in the work I do, feel free to reach out thru this form. Alternatively, you could also get in touch with my social accounts.</TypeText>
            <motion.div className="form-wrapper" 
                transition={{delay: 0.25, duration: 0.75, type: "spring"}} 
                initial={{ opacity: 0, scale: 0 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                viewport={{ once: true }}>
                <form onSubmit={handleFormSubmit}>
                    {loading ? 
                        <TypeText style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            marginBottom: '12px'
                        }}><img src="./assets/loader.gif" alt="Loader" width="28px" height="auto" style={{
                            marginRight: '14px'
                        }} />Please wait.</TypeText>
                        : null
                    }
                    <Input maxLength={500} disabled={loading} type="text" name="name" value={formData.name} onChange={handleInputChange} required placeholder="Name" />
                    <Input maxLength={500} disabled={loading} type="email" name="email" value={formData.email} onChange={handleInputChange} required placeholder="Email" />
                    <Input maxLength={500} disabled={loading} type="text" name="subject" value={formData.subject} onChange={handleInputChange} required placeholder="Subject" />
                    <TextArea disabled={loading} name="message" value={formData.message} onChange={handleInputChange} required placeholder="Message..." />
                    <SubmitButton disabled={loading} type="submit">SUBMIT</SubmitButton>
                </form>
            </motion.div>
            <MySocials />
        </NarrowDiv>
        </>
    )
}

export default GetInTouch