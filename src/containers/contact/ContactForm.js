import React from 'react'
import { Formik, Form } from "formik";
import { TextArea, TextInput, SelectBox } from "../../components/Form/Form";
import * as Yup from "yup";
import { useCreateContact } from "../../shared/hooks/UseContact";

function ContactForm() {
    const [data, addData] = useCreateContact();

    const addContact = ({ values }) => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`https://rejuveaestheticclinic.com/mailer/mail.php?name=${values.name}&phone=${values.phone}&email=${values.email}&message=${values.message}`, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    return (
        <div>
            <div className="contact-form-area py-150 rpy-100">

            </div>
        </div>
    )
}

export default ContactForm