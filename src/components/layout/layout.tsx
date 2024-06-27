import Navbar from "../Navbar/Navbar.tsx";
import {ReactElement} from "react";

const layout = (props: {children: ReactElement}) => {
  return (
    <div>
      <Navbar />
      <main>{props.children}</main>
    </div>
  );
}

export default layout;