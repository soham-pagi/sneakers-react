import { Outlet } from "react-router";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="container mx-auto h-full">
        <Outlet />
      </main>
      <footer className="attribution mt-auto">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/soham-pagi">Soham Pagi</a>.
      </footer>
    </div>
  );
}
