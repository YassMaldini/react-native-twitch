import { useCallback, useEffect, useMemo, useState } from 'react';
import getRootStackScreens from './getRootStackScreens/getRootStackScreens';
import * as SplashScreen from 'expo-splash-screen';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import useIsSignedIn from '../../../hooks/auth/useIsSignedIn/useIsSignedIn';
import { Stream } from '../../../types/models/gql/stream.types';
import { RootContextProps } from './RootStack.types';
import { RootContext } from './RootStack.context';
import { setPlayedMedia as setPlayedMediaRedux } from '../../../store/main/mainActions/mainActions';
import { useUserbyLogin } from '../../../hooks/useUserbyLogin/useUserbyLogin';
import { secretsSelector } from '../../../store/authentication/authenticationReducerSelectors';
import { setProfile } from '../../../store/authentication/authenticationActions/authenticationActions';
import Loading from '../../commons/Loading/Loading';
import Text from '../../designSystem/Text/Text';
import PlayedVideo from '../../commons/PlayedVideo/PlayedVideo';
import { playedMediaSelector } from '../../../store/main/mainReducerSelectors';

SplashScreen.preventAutoHideAsync();

const RootStack = () => {

  const dispatch = useDispatch()

  const secrets = useSelector(secretsSelector)
  const playedMediaRedux = useSelector(playedMediaSelector)

  const isSignedIn = useIsSignedIn()

  const { data: user, isLoading, error } = useUserbyLogin({ username: secrets?.username as string })

  useEffect(() => {
    if (user) {
      setProfile(user)(dispatch)
    }
  }, [user])

  const screens = useMemo(() => getRootStackScreens({ isSignedIn }), [isSignedIn]);

  const [playedMedia, setPlayedMedia] = useState<Stream>()
  const [bottomBarHeight, setBottomBarHeight] = useState<number>(0)

  const contextValue = useMemo<RootContextProps>(
    () => ({
      playedMedia,
      setPlayedMedia,
      bottomBarHeight,
      setBottomBarHeight
    }),
    [playedMedia, setPlayedMedia, bottomBarHeight, setBottomBarHeight]
  )

  useEffect(() => {
    console.log('playedMediaRedux', playedMediaRedux)
  }, [playedMediaRedux])

  const PlayVideoCallback = useCallback(() => {
    if (playedMediaRedux) {
      return <PlayedVideo />
    } else {
      return null
    }
  }, [playedMediaRedux])

  if (isLoading) return <Loading />
  if (error) return <Text>{error.message}</Text>

  return (
    <RootContext.Provider value={contextValue}>
      {playedMediaRedux && <PlayVideoCallback />}
      {screens}
    </RootContext.Provider>
  );
};

export default RootStack;
