"use client";
import {useState} from "react";

import {Button} from "@/components/ui/button";
import {Label} from "@/components/ui/label";
import {Card, CardContent, CardHeader} from "@/components/ui/card";

export default function CardPassword() {
  const generatePassword = () => {
    const uuid = crypto.randomUUID();
    const arr = uuid.split("-");
    const pwd = arr[0] + arr[1];

    return pwd;
  };

  const [password, setPassword] = useState(generatePassword());

  const handleRegenerate = () => {
    const newPassword = generatePassword();

    setPassword(newPassword);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
  };

  return (
    <Card className="m-auto size-36 w-96 shadow-md">
      <CardHeader>
        <Label className="text-center text-lg font-semibold tracking-wide" htmlFor="password">
          {password}
        </Label>
      </CardHeader>
      <CardContent className="flex justify-center gap-4">
        <Button
          className="rounded-full border-indigo-700 bg-indigo-600 text-white shadow-md transition-transform ease-in-out hover:scale-110"
          id="copy"
          onClick={handleCopy}
        >
          ◲ Copy
        </Button>
        <Button
          className="rounded-full bg-sky-500 text-white shadow-md transition-transform ease-in-out hover:scale-110"
          id="regenerate"
          onClick={handleRegenerate}
        >
          ↻ Regenerate
        </Button>
      </CardContent>
    </Card>
  );
}
