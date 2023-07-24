"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("f0872d24-c2a6-49ca-b957-8345e053f184");
  }, []);

  return null;
};
