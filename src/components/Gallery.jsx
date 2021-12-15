import { Fade, Slide } from "react-awesome-reveal";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const items = [
  {
    id: 1,
    photo: "https://picsum.photos/seed/a/600/600?grayscale",
    text: "Example 1"
  },
  {
    id: 2,
    photo: "https://picsum.photos/seed/b/600/600?grayscale",
    text: "Example 2"
  },
  {
    id: 3,
    photo: "https://picsum.photos/seed/c/600/600?grayscale",
    text: "Example 3"
  },
  {
    id: 4,
    photo: "https://picsum.photos/seed/d/600/600?grayscale",
    text: "Example 4"
  },
  {
    id: 5,
    photo: "https://picsum.photos/seed/e/600/600?grayscale",
    text: "Example 5"
  },
  {
    id: 6,
    photo: "https://picsum.photos/seed/f/600/600?grayscale",
    text: "Example 6"
  },
  {
    id: 7,
    photo: "https://picsum.photos/seed/g/600/600?grayscale",
    text: "Example 7"
  },
  {
    id: 8,
    photo: "https://picsum.photos/seed/h/600/600?grayscale",
    text: "Example 8"
  },
  {
    id: 9,
    photo: "https://picsum.photos/seed/i/600/600?grayscale",
    text: "Example 9"
  },
  {
    id: 10,
    photo: "https://picsum.photos/seed/n/600/600?grayscale",
    text: "Example 10"
  },
  {
    id: 11,
    photo: "https://picsum.photos/seed/k/600/600?grayscale",
    text: "Example 11"
  },
  {
    id: 12,
    photo: "https://picsum.photos/seed/l/600/600?grayscale",
    text: "Example 12"
  }
];

const Gallery = () => {
  const [hovered, setHovered] = useState("");
  const [selected, setSelected] = useState("");

  return (
    <div className="grid">
      {items.map((item, i) => {
        const isHovered = hovered === item.id;
        const isSelected = selected === item.id;

        return (
          <div
            delay={i * 150}
            direction="up"
            triggerOnce
            key={i}
            className={`item ${isSelected ? "selected" : ""}`}
            style={{ backgroundImage: `url(${item.photo})` }}
            onMouseEnter={() => setHovered(item.id)}
            onMouseLeave={() => setHovered("")}
            onClick={() => {
              if (selected !== item.id) {
                setSelected(item.id);
              } else {
                setSelected(null);
              }
            }}
          >
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  className="hoverThing"
                  layoutId="item"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <Fade duration={600} delay={300}>
                    {item.text}
                  </Fade>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;
