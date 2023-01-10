import Box from "../../designSystem/Box/Box";
import Text from "../../designSystem/Text/Text";
import { VideoIndicationProps } from "./VideoIndication.types";

export const VideoIndication = ({ children }: VideoIndicationProps) => (
  <Box
    backgroundColor="primaryBackground" 
    borderRadius="xxs"
    paddingVertical="xxxs"
    paddingHorizontal="xxs"
  >
    <Text>{children}</Text>
  </Box>
)