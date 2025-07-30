import { Button } from "@radix-ui/themes";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="text-3xl text-center mx-auto mt-5">
      <h1 className="text-3xl text-center mx-auto mt-5">
        Alibi Admin Dashboard
      </h1>
      <Button
        color="green"
        variant="outline"
        onClick={() => navigate("/login")}
      >
        Login
      </Button>
    </div>
  );
}
