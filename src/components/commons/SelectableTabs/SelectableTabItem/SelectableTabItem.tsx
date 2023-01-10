import { useTheme } from "@shopify/restyle"
import { Theme } from "../../../../utils/theme/theme"
import Box from "../../../designSystem/Box/Box"
import Pressable from "../../../designSystem/Pressable/Pressable"
import Text from "../../../designSystem/Text/Text"
import { SelectableTabItemProps } from "./SelectableTabItem.types"

const SelectableTabItem = ({ 
  label,
  index,
  activeTab,
  setActiveTab,
  gap,
  ...props
}: SelectableTabItemProps) => {

  const isTabActive = activeTab === index;

  const theme = useTheme<Theme>();

  return (
    <Pressable 
      onPress={() => setActiveTab(index)}
      paddingVertical="sToStoM"
      borderBottomWidth={3}
      borderBottomColor={isTabActive ? "primaryHighlight" : undefined}
      style={{
        marginRight: gap ? gap : theme.spacing.l
      }}
      {...props}
    >
      <Text 
        fontSize={16}
        fontFamily="Roobert-SemiBold"
        color={isTabActive ? "primaryHighlight" : undefined}
      >
        {label}
      </Text>
    </Pressable>
  )
}

export default SelectableTabItem