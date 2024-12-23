import { Box, AspectRatio } from "@chakra-ui/react";
import { useState } from "react";
import { colors } from "@/constants/colors";

function Pixel() {
  const [colorIndex, setColorIndex] = useState<number>(0);

  const incrementColorIndex = () =>
    setColorIndex((oldIndex) => {
      if (oldIndex + 1 >= colors.length) {
        return 0;
      }
      return oldIndex + 1;
    });

  return (
    <AspectRatio ratio={1 / 1} borderRadius={1}>
      <Box
        bg={colors[colorIndex]}
        w={"100%"}
        h="100%"
        onTouchStart={incrementColorIndex}
        onClick={incrementColorIndex}
      />
    </AspectRatio>
  );
}
export default Pixel;
