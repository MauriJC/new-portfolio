import Hero from "./components/hero";
import NavBar from "./components/navbar";

export default function Home() {
  return (
    <main className="main w-[100vw] h-[100vh]">
      <NavBar />
      <Hero />
    </main>
  );
}
