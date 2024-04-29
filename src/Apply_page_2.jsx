import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import "./apply_page_style.css";
import "./apply_page_2_style.css";

function Apply_page_2() {

    const handleNavigation = (path) => {
        window.location.href = path; // Redirect to the specified path
      };

    return (
        <div class="container">                                                                     
            <div class="header">                                                                                {/*<!-- Header Section Start -->*/}
                <div class="logo">
                    <div class="logo_img">
                        <img src="img/bangladesh-govt-hd-logo.png" alt="bangladesh-govt-hd-logo.png" />
                    </div>
                    <div class="heading">
                        Goverment of the people's Republic of Bangladesh
                    </div>
                </div>
                <div class="menu">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Status</a></li>
                        <li><a href="#">Apply E-Passport</a></li>
                    </ul>
                    <div class="profile">
                        <img src="img/Avator.jpg" alt="Avator.jpg" />
                    </div>
                </div>
            </div>                                                                                              {/*<!-- Header Section End -->*/}
            <div class="body">                                                                                  {/*<!-- Body Section Start -->*/}
                <div class="form_container">
                    <form action="" method="post">
                        <div class="form_header">
                            Personal Information
                        </div>
                        <div class="form_field">
                            <table>
                                <tr>
                                    <td><label>National ID No.(): </label></td>
                                    <td><input placeholder="Enter your national ID no." type="text" /></td>
                                </tr>
                                <tr>
                                    <td><label>Birth Registration No.(): </label></td>
                                    <td><input placeholder="Enter your birth registration no." type="text" /></td>
                                </tr>
                                <tr>
                                    <td><label>Type of Citizenship(): </label></td>
                                    <td>
                                        <select name="type_of_citizenship" id="">
                                            <option>Select your type of citizenship</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td><label>Dual Citizenship Status(): </label></td>
                                    <td><input placeholder="Enter your dual citizenship status" type="text" /></td>
                                </tr>
                                <tr>
                                    <td><label>Country of Other Citizenship(): </label></td>
                                    <td><select name="country_of_other_citizenship" id="">
                                            <option>select the country of other citizenship</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td><label>Foreign Passport No.(): </label></td>
                                    <td><input placeholder="Enter your foreign passport no." type="text" /></td>
                                </tr>
                                <tr>
                                    <td><label>Marital Status(): </label></td>
                                    <td>
                                        <select name="marital_status" id="">
                                            <option>select your marital status</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td><label>Profession(): </label></td>
                                    <td>
                                        <select name="profession" id="">
                                            <option>select your profession</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td><label>Contact No.(): </label></td>
                                    <td>
                                        <select name="country_code" id="country_code">
                                            <option value="880">880</option>
                                        </select>
                                        <input name="phone_no" placeholder="Enter your contact no." id="phone_no" type="number" />
                                    </td>
                                </tr>
                                <tr>
                                    <td><label>E-mail(): </label></td>
                                    <td><input name="email" placeholder="Enter your e-mail" type="email" /></td>
                                </tr>
                            </table>
                        </div>   
                        <div class="form_button">
                            <a href="./Apply_page_3">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Next
                            </a>
                        </div>
                    </form>
                </div>
            </div>                                                                                              {/*<!-- Body Section End -->*/}
            <div class="footer">                                                                                {/*<!-- Footer Section Start -->*/}
                <ul>
                    <li><a href="#">Instruction</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </div>                                                                                              {/*<!-- Footer Section End -->*/}
        </div>
    );
}

export default Apply_page_2;