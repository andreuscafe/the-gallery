import "./styles.scss";
import {
  AnimateSharedLayout,
  motion,
  useTransform,
  useViewportScroll
} from "framer-motion";
import { Fade } from "react-awesome-reveal";

import Gallery from "./components/Gallery";

export default function App() {
  const { scrollYProgress } = useViewportScroll();
  const titleY = useTransform(scrollYProgress, [0, 0.6], [0, 250]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <AnimateSharedLayout>
      <div className="App">
        <main className="contentWrapper">
          <section className="hero">
            <motion.h1
              style={{ y: titleY, opacity: titleOpacity }}
              className="title"
            >
              <Fade cascade duration={300} triggerOnce>
                The
              </Fade>
              <Fade cascade delay={600} duration={300} triggerOnce>
                Gallery
              </Fade>
            </motion.h1>
          </section>

          <Gallery />
        </main>
      </div>
    </AnimateSharedLayout>
  );
}
