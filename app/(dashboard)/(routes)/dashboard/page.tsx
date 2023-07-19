import { UserButton } from "@clerk/nextjs";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div>
      <p>dashboard </p>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default page;
