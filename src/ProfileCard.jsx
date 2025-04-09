import React from "react";
import viteLogo from '/vite.svg';


const ProfileCard = ({profile}) => {
    return (
        <div style={{ border: "1px solid black", padding: "20px", maxWidth: "300px",backgroundColor:"black" ,margin: "20% auto",
            justifyContent: "center",
            padding: "30px",}}>
            <img
                style={{
                    border: "3px solid skyblue",

                    borderRadius: "50%",
                    width: "100px",
                    height: "100px",
                    marginBottom: "15px",
                    justifyContent:"center",

                
                    
                }}
                src={viteLogo}
                alt="Profile"
            />
            <div style={{color:"yellow"}}>
                <div style={{ marginBottom: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>Name: </span>
                    <span>{profile.name}</span>
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>Department: </span>
                    <span>{profile.Department}</span>
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>Year: </span>
                    <span>{profile.year}</span>
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>Mobile: </span>
                    <span>{profile.mobile}</span>
                </div>
                <div>
                    <span style={{ fontWeight: "bold" }}>Address: </span>
                    <span>{profile.address}</span>
                </div>
            </div>
            <a href="https://www.linkedin.com/in/giflin-carter-b120892a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
                LinkedIn profile
                </a>
        </div>
    );
};

export default ProfileCard;
