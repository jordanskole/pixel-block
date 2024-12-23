import { Box, AspectRatio } from "@chakra-ui/react";
import { useState } from "react";
import { colors } from "@/constants/colors";

function Pixel() {
  const [colorIndex, setColorIndex] = useState<number>(0);
  const [isPressed, setIsPressed] = useState<boolean>(false);

  const handleClick = () =>
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
        onClick={handleClick}
      >
        {colorIndex}
      </Box>
    </AspectRatio>
  );
}
export default Pixel;
