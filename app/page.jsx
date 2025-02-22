"use client";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Works from "./components/Works";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Services />
      <Works />
      <Contact />
    </>
  );
}
