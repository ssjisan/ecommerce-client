import { useContext } from "react";
import HeroSection from "../Components/Common/HeroSection";
import { DataContext } from "../DataProcessing/DataProcessing";

export default function Home() {
  const { auth } = useContext(DataContext);
  return (
    <div>
      <HeroSection title="Home" />
      <pre>{JSON.stringify(auth)}</pre>
    </div>
  );
}
