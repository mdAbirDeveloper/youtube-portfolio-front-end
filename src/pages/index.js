import About from "./components/About";
import Contact from "./components/Contact";
import Dashboard from "./components/Dashboard";
import Hero from "./components/Hero";
import SignUp from "./components/Login";
import Login from "./components/Login";
import Portfolio from "./components/Portfolio";


export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <About />
      <Portfolio />
      <Contact />
      <Dashboard />
      <Login />
    </div>
  );
}
