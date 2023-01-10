import Box from "../../designSystem/Box/Box";
import Text from "../../designSystem/Text/Text";

export const NoContent = () => (
  <Box flex={1} paddingVertical="xxl" alignItems="center" justifyContent="center">
    <Text 
      color="secondaryText" 
      fontFamily="Roobert-SemiBold" 
      fontSize={16}
      marginBottom="sToM"
    >
      No content available
    </Text>
    <Text color="secondaryText">
      No content is available at this time
    </Text>
  </Box>
)