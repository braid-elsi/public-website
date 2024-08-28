import "./App.css";
import Hero from "./components/Hero.js";
import Nav from "./components/Nav";
import TwoColumn from "./components/TwoColumn";
import BackgroundGradient from "./components/BackgroundGradient";

export default function App() {
    return (
        <div className="bg-white">
            <header className="absolute inset-x-0 top-0 z-50">
                <Nav />
            </header>

            <div className="relative isolate px-6 pt-14 lg:px-8">
                <BackgroundGradient type="top" />

                {/* <TwoColumn /> */}

                <Hero />

                <BackgroundGradient type="bottom" />
            </div>
        </div>
    );
}
