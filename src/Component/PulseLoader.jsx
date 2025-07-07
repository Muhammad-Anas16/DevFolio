import React from "react";
import { Box, keyframes } from "@mui/system";

const pulse1 = keyframes`
  0% { top: 36px; height: 128px; }
  50% { top: 60px; height: 80px; }
  100% { top: 60px; height: 80px; }
`;

const pulse2 = keyframes`
  0% { top: 42px; height: 116px; }
  50% { top: 60px; height: 80px; }
  100% { top: 60px; height: 80px; }
`;

const pulse3 = keyframes`
  0% { top: 48px; height: 104px; }
  50% { top: 60px; height: 80px; }
  100% { top: 60px; height: 80px; }
`;

const PulseLoader = () => {
  return (
    <Box
      sx={{
        width: 200,
        height: 200,
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Bar 1 */}
      <Box
        sx={{
          position: "absolute",
          left: 35,
          width: 30,
          backgroundColor: "#ff0055",
          animation: `${pulse1} 1s cubic-bezier(0,0.5,0.5,1) infinite`,
          animationDelay: "-0.2s",
        }}
      />
      {/* Bar 2 */}
      <Box
        sx={{
          position: "absolute",
          left: 85,
          width: 30,
          backgroundColor: "#ff0055",
          animation: `${pulse2} 1s cubic-bezier(0,0.5,0.5,1) infinite`,
          animationDelay: "-0.1s",
        }}
      />
      {/* Bar 3 */}
      <Box
        sx={{
          position: "absolute",
          left: 135,
          width: 30,
          backgroundColor: "#ff0055",
          animation: `${pulse3} 1s cubic-bezier(0,0.5,0.5,1) infinite`,
        }}
      />
    </Box>
  );
};

export default PulseLoader;
