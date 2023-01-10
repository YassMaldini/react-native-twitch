import { BoxProps } from "@shopify/restyle";
import { Theme } from "../../../../utils/theme/theme";
import Box from "../../../designSystem/Box/Box";
import Image from "../../../designSystem/Image/Image";

import LoadingSpinnerImage from "../../../../../assets/images/dark/loading_spinner_static.png";
import { LoaderProps, LoaderSizes } from "./Loader.types";
import { useEffect, useRef } from "react";
import { Animated, Easing } from "react-native";

const CurrentLoaderSize = (size?: LoaderSizes) => {
  switch (size) {
    case LoaderSizes.Small:
      return 30
    case LoaderSizes.Medium:
      return 50
    case LoaderSizes.Large:
      return 80
    default:
      return 50
  }
}

export const Loader = ({ size, ...rest }: LoaderProps) => {
  const rotationDegree = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotationDegree, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true
      })
    ).start();
  }, [rotationDegree])

  return (
    <Box alignSelf="center" {...rest}>
      <Animated.View
        style={{
          width: CurrentLoaderSize(size),
          transform: [{
            rotateZ: rotationDegree.interpolate({
              inputRange: [0, 1],
              outputRange: ['0deg', '360deg']
            })
          }]
        }}
      >
        <Image
          source={LoadingSpinnerImage}
          width={CurrentLoaderSize(size)}
          height={CurrentLoaderSize(size)}
        />
      </Animated.View>
    </Box>
  )
}