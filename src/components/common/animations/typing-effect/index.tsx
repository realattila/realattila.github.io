import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TypingEffectProps {
  text: string;
  speed?: number;
  repeat?: boolean;
  reverse?: boolean;
}

const TypingEffect: React.FC<TypingEffectProps> = ({ text, speed = 0.1, repeat = true, reverse = true }) => {
  const [displayText, setDisplayText] = useState("");
  const [typingIndex, setTypingIndex] = useState(0);
  const [typingDirection, setTypingDirection] = useState<"forward" | "backward">("forward");

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const animateTyping = () => {
      if (typingDirection === "forward") {
        if (typingIndex <= text.length) {
          setDisplayText(text.substring(0, typingIndex));
          setTypingIndex(typingIndex + 1);
        } else if (reverse && typingDirection === "forward") {
          setTypingDirection("backward");
          setTypingIndex(typingIndex - 1);
        } else if (repeat) {
          setTypingDirection("forward");
          setDisplayText("");
          setTypingIndex(0);
        }
      } else {
        if (typingIndex >= 0) {
          setDisplayText(text.substring(0, typingIndex));
          setTypingIndex(typingIndex - 1);
        } else if (repeat) {
          setTypingDirection("forward");
          setDisplayText("");
          setTypingIndex(0);
        }
      }
    };

    // If the full text has been typed and there is no typing left to do
    if (displayText.length === text.length && typingDirection === "forward") {
      timeout = setTimeout(() => {
        animateTyping();
      }, 3000); // 3 seconds delay after typing complete
    } else {
      timeout = setTimeout(animateTyping, speed * 1000);
    }

    return () => clearTimeout(timeout);
  }, [text, speed, repeat, reverse, typingDirection, typingIndex, displayText]);

  return (
    <div className='tw-flex'>
      <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        {displayText}
      </motion.span>
      <span className='tw-animate-[blink_0.5s_ease-in-out_infinite]'>|</span>
    </div>
  );
};

export default TypingEffect;
