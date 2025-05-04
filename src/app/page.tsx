import Hero from "./components/hero";
import NavBar from "./components/navbar";

export default function Home() {
  return (
    <main className="main">
      <NavBar />
      <Hero />
    </main>
  );
}
