import React from "react";
import Header from "../general/Header";
import Footer from "../general/Footer";
import WorkCards from "./WorkCards";
import WorkForm from "./WorkForm";
import { Container } from "@mui/material";

function WorkHere() {

    return (
        <div style={{backgroundColor: '#8BC34A'}}>
            <Header />
            <WorkCards />
            <br />
            <br />
            <br />
            <Container component="main" maxWidth="sm" style={{backgroundColor: '#4CAF50'}}>
                <WorkForm />
            </Container>
            <Footer />
        </div>
    )
}

export default WorkHere;