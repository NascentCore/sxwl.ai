import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState, useContext } from "react";
import { Card, Avatar, Typography, Box } from "@mui/material";

const Index = ({ t }: any) => {
  const coverImgStyles = {};
  return (
    <>
      <Box style={{ marginBottom: "60px" }}>
        <img
          className="home_cover_bg_img"
          src="/assets/home_cover_bg.jpg"
          alt={""}
        />
      </Box>
    </>
  );
};

export default Index;
