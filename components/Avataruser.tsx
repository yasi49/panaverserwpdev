
import React from "react";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "./ui/avatar"
  
  export function Avataruser() {
    return (
      <Avatar>
        <AvatarImage src="/micky.jpg" alt="avatar.img" style={{ opacity: 0.9 }}/>
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    )
  }
  