import { useEffect } from "react";

interface Props {
  label: string;
  parentMethod: () => void;
}

export const Button = ({ label, parentMethod }: Props) => {
  useEffect(() => {
    console.log("label cambio");
  }, [label]);

  return <button onClick={parentMethod}>{label}</button>;
};
