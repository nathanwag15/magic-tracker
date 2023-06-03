"use client";

import Image from "next/image";
import CounterCompiler from "../Components/gameComponent";
import React, { useState } from "react";
import PlayerPicker from "@/Components/playerPicker";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      Welcome to my Magic Stat tracker and point counter
      <h1>
        <a href="/games">Start a new game</a>
      </h1>
    </div>
  );
}
