import Box from "../../designSystem/Box/Box";
import SafeAreaContainer from "../SafeAreaContainer/SafeAreaContainer";
import { Loader } from "./Loader/Loader";

const Loading = () => (
  <SafeAreaContainer>
    <Box flex={1} alignItems="center" justifyContent="center">
      <Loader />
    </Box>
  </SafeAreaContainer>
)

export default Loading