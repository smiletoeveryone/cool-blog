import Navigation from "./navigation";
import { Fragment } from "react";

export default function Layout(props){ 
  return (
    <Fragment>
      <Navigation />
      <main>{props.children}</main>
    </Fragment>
  )
 }