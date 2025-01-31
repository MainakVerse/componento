"use client";
import Hamburger from "hamburger-react";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const ToggleHamburger = () => {
  const [isOpen, setOpen] = useState<boolean>(true);
  const params = useParams();
  return (
    params.cmp && (
      <Hamburger
        toggled={isOpen}
        size={25}
        toggle={setOpen}
        color="#22D3EE"
      />
    )
  );
};

export default ToggleHamburger;
