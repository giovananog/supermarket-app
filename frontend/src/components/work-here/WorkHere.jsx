import React from "react";
import Header from "../general/Header";
import Footer from "../general/Footer";
import WorkCards from "./WorkCards";
import WorkForm from "./WorkForm";
import { Container } from "@mui/material";

function WorkHere() {

    return (
        <div style={{backgroundColor: '#f1ebeb'}}>
            <Header />
            <WorkCards />
            <br />
            <br />
            <br />
            <Container component="main" maxWidth="sm" style={{backgroundColor: '#f1ebeb'}}>
                <WorkForm />
            </Container>
            <Footer />
        </div>
    )
}

export default WorkHere;