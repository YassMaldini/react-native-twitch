import { FlashList } from "@shopify/flash-list"
import { useCallback, useState } from "react"
import { FlatList, ScrollView } from "react-native"
import Box from "../../designSystem/Box/Box"
import SelectableTabItem from "./SelectableTabItem/SelectableTabItem"
import { SelectableTabsProps } from "./SelectableTabs.types"

const SelectableTabs = ({ data, screensProps, tabProps, tabItemProps, ...rest }: SelectableTabsProps) => {
  const [activeTab, setActiveTab] = useState(0)

  const Component = useCallback(
    () => data[activeTab].component,
    [activeTab]
  )

  return (
    <Box flex={1} {...rest}>
      <Box>
        <ScrollView
          scrollEnabled={data.length > 4}
          horizontal
          nestedScrollEnabled
        >
          <Box flexDirection='row' marginBottom="m" paddingHorizontal="sToStoM">
            {
              data.map(({ label }, index) => (
                <SelectableTabItem
                  key={index}
                  {...{
                    label,
                    index,
                    activeTab,
                    setActiveTab
                  }}
                  {...tabItemProps}
                />
              ))
            }
          </Box>
        </ScrollView>
      </Box>
      <Box flex={1} {...tabProps}>
        <Component />
        {/* {data[activeTab].component} */}
        {/* <FlashList
          {...{ data }}
          renderItem={({ item, index }) => (
            <VisibleComponent {...{ index }} />
          )}
          nestedScrollEnabled
          estimatedItemSize={1433}
        /> */}
      </Box>
    </Box>
  )
}

export default SelectableTabs