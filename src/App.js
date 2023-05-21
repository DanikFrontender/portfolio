import Navbar from './scenes/Navbar';
import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing";
import LineGradient from "./components/LineGradient";
import MySkills from "./scenes/MySkills";
import Projects from "./scenes/Projects";
import Testimonials from "./scenes/Testimonials";
import Contact from "./scenes/Contact";
import Footer from "./scenes/Footer";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import useMediaQuery from "./hooks/useMediaQuery";

function App() {

    const [selectedPage, setSelectedPage] = useState("home");
    const [isTopOfPage, setIsTopOfPage] = useState(true);
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY === 0) {
            setIsTopOfPage(true);
            setSelectedPage("home");
          }
          if (window.scrollY !== 0) setIsTopOfPage(false);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);

    return (
        <div className="app bg-deep-blue">
            <Navbar
                isTopOfPage={isTopOfPage}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
            />
            <div classname="mx-auto w-5/6 md:h-full">
                {isAboveMediumScreens && (
                    <DotGroup
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                )}
                <Landing setSelectedPage={setSelectedPage} />
            </div>
            
            <LineGradient />
            <div className="w-5/6 mx-auto md:h-full ">
                <motion.div
                    margin="0 0 -200px 0"
                    amount="all"
                    onViewportEnter={() => setSelectedPage("skills")}
                >
                <MySkills />
                </motion.div>
            </div>

            <LineGradient />
            <div className="w-5/6 mx-auto">
                <motion.div
                    margin="0 0 -200px 0"
                    amount="all"
                    onViewportEnter={() => setSelectedPage("projects")}
                >
                <Projects />
                </motion.div>
            </div>

            <LineGradient />
            <div className="w-5/6 mx-auto md:h-full">
                <motion.div
                    margin="0 0 -200px 0"
                    amount="all"
                    onViewportEnter={() => setSelectedPage("testimonials")}
                >
                <Testimonials />
                </motion.div>
            </div>

            <LineGradient />
            <div className="w-5/6 mx-auto md:h-full">
                <motion.div
                margin="0 0 -200px 0"
                amount="all"
                onViewportEnter={() => setSelectedPage("contact")}
                >
                <Contact />
                </motion.div>
            </div>

            <Footer />
        </div>
    );
}

export default App;