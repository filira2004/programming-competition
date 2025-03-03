import { links } from "./lib/constants";
import SectionDescription from "./ui/components/SectionDescription/SectionDescription";
import SectionOpen from "./ui/components/SectionOpen/SectionOpen";

export default function Home() {
  return (
    <>
      <SectionOpen />
      {/* TODO МБ ДОДЕЛАТЬ */}
      {/* {links.map((link, index) => (
        <SectionDescription key={index}></SectionDescription>
      ))} */}
    </>
  );
}
