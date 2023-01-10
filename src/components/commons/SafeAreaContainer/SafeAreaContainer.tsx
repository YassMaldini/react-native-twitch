import { useTheme } from "@shopify/restyle"
import { SafeAreaView } from "react-native-safe-area-context"
import { Theme } from "../../../utils/theme/theme"
import { SafeAreaContainerProps } from "./SafeAreaContainer.types"

const SafeAreaContainer = ({ children }: SafeAreaContainerProps) => {
  const theme = useTheme<Theme>()

  return (
    <SafeAreaView
      edges={['top']}
      style={{ flex: 1, backgroundColor: theme.colors.primaryBackground }}>
      {children}
    </SafeAreaView>
  )
}

export default SafeAreaContainer