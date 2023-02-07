import { Header } from "@/src/components";
import type { ReactElement } from "react";

const Default = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Default;
