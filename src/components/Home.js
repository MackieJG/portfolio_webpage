import React from "react";
import profileImage from "../images/profileImage.jpg";
import githubImage from "../images/github.png";
import linkedInImage from "../images/linkedIn.png";
import styled from "styled-components";
import "../App.css"


const Home = () => {

    const onImageError = (e) => {
        e.target.src = profileImage
        e.target.src = linkedInImage
        e.target.src = githubImage
    }

    const HomeDiv = styled.div`
        font-family: Roboto, sans-serif;
        font-size: 25px;
        font-weight: bold;
        display: flex;
        flex-direction: column;
        min-height: 0;
        min-width: 0;
        overflow: hidden;
        align-items: center;
        padding-top: 40px;
    `

    const ImageStyle = styled.img`
        border-radius: 50%;
        width: 300px;
        height: 300px;
        border: 4px solid black;
    `

    const Title = styled.h4`
        width: 50%;
        padding: 20px;
        text-align: justify;
    `

    const ContactTags = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;

    `
    const ContactImg = styled.img`
        height: 50px;
        width: 50px;
        
    `
    const ContactLink = styled.a`
        text-decoration: none;
    `


    return (
    <HomeDiv>
        <ImageStyle src={profileImage} alt="profile_image" onError={onImageError}/>
            <Title>Hello! I'm Joshua Mackie and welcome to my portfolio. As a software development student at CodeClan, I am passionate about using technology to create innovative solutions. I have experience in various programming languages and am constantly learning new skills to stay up to date with the latest industry developments. I am dedicated to delivering high-quality and user-friendly software, and I am excited to continue my journey in the tech industry. My goal is to help create a positive impact through the use of technology.</Title>
            <ContactTags>
                <ContactLink href="https://github.com/MackieJG">
                <ContactImg src={githubImage} alt="github_image" onError={onImageError}></ContactImg>
                </ContactLink>
                <ContactLink href="https://www.linkedin.com/in/mackiejg/">
                <ContactImg src={linkedInImage} alt="linkedIn" onError={onImageError}></ContactImg>
                </ContactLink>
            </ContactTags>
    </HomeDiv>
    )
};

export default Home;