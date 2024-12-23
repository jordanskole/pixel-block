import { Box, AspectRatio } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { colors } from "@/constants/colors";

function Pixel() {
  const [colorIndex, setColorIndex] = useState<number>(0);
  const [isPressed, setIsPressed] = useState<boolean>(false);

  useEffect(() => {
    if (isPressed) {
      //Implementing the setInterval method
      const interval = setInterval(() => {
        incrementColorIndex();
      }, 500);

      //Clearing the interval
      return () => clearInterval(interval);
    }
  }, [isPressed]);

  const incrementColorIndex = () =>
    setColorIndex((oldIndex) => {
      if (oldIndex + 1 >= colors.length) {
        return 0;
      }
      return oldIndex + 1;
    });

  return (
    <AspectRatio
      ratio={1 / 1}
      borderRadius={1}
      maxW={"100%"}
      boxShadow={isPressed ? "inset" : undefined}
    >
      <Box
        bg={colors[colorIndex]}
        maxW={"100%"}
        onTouchStart={() => setIsPressed(true)}
        onTouchEnd={() => setIsPressed(false)}
        // onMouseEnter={() => setIsPressed(true)}
        // onMouseLeave={() => setIsPressed(false)}
        // onClick={incrementColorIndex}
      />
    </AspectRatio>
  );
}
export default Pixel;
