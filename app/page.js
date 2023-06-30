"use client";

import Image from "next/image";
import CounterCompiler from "../Components/gameComponent";
import React, { useState } from "react";
import PlayerPicker from "@/Components/playerPicker";
import Link from "next/link";

export default function Home() {
  return (
    <div className="home-page-wrapper">
      <div className="account-page-wrapper">
        <div className="account-page-username-wrapper">
          <div className="name-wrapper">Your Name</div>
          <div className="username-wrapper">Your Username</div>
        </div>
      </div>
    </div>
  );
}
