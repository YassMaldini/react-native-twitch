import { View } from "react-native";
import Animated, { useEvent, useHandler } from "react-native-reanimated";
import Text from "../../designSystem/Text/Text";
import PagerView from "react-native-pager-view"
import Box from "../../designSystem/Box/Box";
import { useState } from "react";

const AnimatedPager = Animated.createAnimatedComponent(PagerView);

export function usePagerScrollHandler(handlers: any, dependencies?: any) {
  const { context, doDependenciesDiffer } = useHandler(handlers, dependencies);
  const subscribeForEvents = ['onPageScroll'];

  return useEvent<any>(
    (event) => {
      'worklet';
      const { onPageScroll } = handlers;
      if (onPageScroll && event.eventName.endsWith('onPageScroll')) {
        onPageScroll(event, context);
      }
    },
    subscribeForEvents,
    doDependenciesDiffer
  );
}

export const LightTabView = () => {
  const handler = usePagerScrollHandler({
    onPageScroll: (e: any) => {
      'worklet';
      console.log(e.offset, e.position);
    },
  });

  const data = new Array(4).fill({})

  const [index, setIndex]= useState(0)

  return (
    <Box flex={1}>
      <Box flexDirection="row" position="relative">
      {
        data.map((item, index) => (
          <Box 
            key={`tab#${index}`}
            padding="s"
          >
            <Text>tab {index}</Text>
          </Box>
        ))
      }
      <Box 
        width={50} 
        height={6}
        backgroundColor="disabledButtonBackground"
        position="absolute"
        bottom={0}
      ></Box>
      </Box>
      <AnimatedPager
        style={{ flex: 1 }}
        initialPage={0}
        scrollEnabled
        onPageScroll={handler}
        orientation="horizontal"
        onPageSelected={e => {
          console.log("position", e.nativeEvent.position)
        }}
      >
        {
          data.map((item, index) => (
            <Box flex={1} backgroundColor="twitchPurple12" key={`view#${index}`}>
              <Text>page {index}</Text>
              <Box height={2000} />
            </Box>
          ))
        }
      </AnimatedPager>
    </Box>
  )
}