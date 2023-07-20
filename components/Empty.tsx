import Image from "next/image";
import { FC } from "react";

interface EmptyProps {
  label: string;
}

const Empty: FC<EmptyProps> = ({ label }) => {
  return (
    <div className="h-full p-20 flex flex-col items-center">
      <div className="relative h-72 w-72">
        <Image fill alt="no messages" src="/empty.png" />
      </div>
      <p className="text-muted-foreground text-sm text-center">{label}</p>
    </div>
  );
};

export default Empty;
