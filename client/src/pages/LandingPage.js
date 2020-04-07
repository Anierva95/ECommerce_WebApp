// import Background from "./landing.jpg";
import React from "react";
// import Home from "./pages/Home.js";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';

var sectionStyle = {
    width: "100%",
    height: "400px",
    // backgroundImage: `url(${Background})`
};
export default function LandingPage() {

    return (
        <div>
            <section style={sectionStyle}>
            </section>
            <h1>
                Welcome to our store!
       </h1>
            <Link to="/shop" style={{ "textDecoration": "inherit" }}>
                {/* onClick={() => Home()} */}
                <Button variant="contained" color="primary" style={{ "marginLeft": "50px" }}>
                    Enter Store
                    </Button>
            </Link>
        </div>
    )
}