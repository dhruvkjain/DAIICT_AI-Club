import React from "react";
import "./Form.css";
import instalogo from "../assets/instalogo.png"
import linkedinlogo from "../assets/linkedinlogo.png"

const Form = () => {
    return (
        <div className="flex justify-center items-center">
            <div class="form-container">
                <div class="form">
                    <span class="heading">Get in touch</span>
                    <input placeholder="Name" type="text" class="input"></input>
                    <input placeholder="Email" id="mail" type="email" class="input"></input>
                    <textarea placeholder="Describe your concern" rows="10" cols="30" id="message" name="message" class="textarea"></textarea>
                    <div class="button-container">
                        <div class="send-button">Send</div>
                        <div class="reset-button-container">
                            <div id="reset-btn" class="reset-button">Reset</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Form;