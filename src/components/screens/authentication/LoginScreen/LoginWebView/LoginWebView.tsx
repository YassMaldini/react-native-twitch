import Box from "../../../../designSystem/Box/Box"
import { WebView, WebViewNavigation } from 'react-native-webview';
import { NativeSyntheticEvent } from "react-native";
import { WebViewMessage } from "react-native-webview/lib/WebViewTypes";
import CookieManager from '@react-native-cookies/cookies';
import { createRef } from "react";
import { useDispatch } from "react-redux";
import { SetSecretsAction, SET_SECRETS } from "../../../../../store/authentication/authenticationActions/authenticationActions.types";
import { graphqlApi } from "../../../../../utils/api/api";

const LoginWebView = () => {
  const dispatch = useDispatch();
  const webViewRef = createRef<WebView>();

  const CHECK_COOKIE: string = `
    window.ReactNativeWebView.postMessage("Cookie: " + document.cookie);
    true;
  `;

  const onNavigationStateChange = (navigationState: WebViewNavigation) => {
    // Check cookies every time URL changes
    if (webViewRef.current) {
      webViewRef.current.injectJavaScript(CHECK_COOKIE);
    }
  };

  const onMessage = async (event: NativeSyntheticEvent<WebViewMessage>) => {
    const { data } = event.nativeEvent;

    const authTokenMatches = data.match(/auth-token=.*?;/g)
    const uniqueIdMatches = data.match(/unique_id=.*?;/g)
    const loginMatches = data.match(/ login=.*?;/g)
    
    if (authTokenMatches && uniqueIdMatches && loginMatches) {
      const token = (authTokenMatches as string[])[0].replace('auth-token=', '').replace(';', '')
      const deviceId = (uniqueIdMatches as string[])[0].replace('unique_id=', '').replace(';', '')
      const username = (loginMatches as string[])[0].replace(' login=', '').replace(';', '')
 
      CookieManager.clearAll().then( () =>  console.log(`All Cookies cleared`) )

      graphqlApi.setHeaders({
        'Accept': '*/*',
        'Accept-Language': 'en-GB',
        'Authorization': `OAuth ${token}`,
        'Client-Id': 'kimne78kx3ncx6brgo4mv6wki5h1ko',
        'Connection': 'keep-alive',
        'Content-Type': 'text/plain;charset=UTF-8',
        'Origin': 'https://www.twitch.tv',
        'Referer': 'https://www.twitch.tv/',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
        'X-Device-Id': deviceId
      })

      dispatch<SetSecretsAction>({
        type: SET_SECRETS,
        secrets: {
          token,
          deviceId,
          username
        }
      });
    } else {
      console.log('not logged')
    }

  }

  return (
    <Box flex={1}>
      <WebView
        source={{ uri: 'https://twitch.tv/login' }}
        ref={webViewRef}
        onNavigationStateChange={onNavigationStateChange}
        onMessage={onMessage}
        thirdPartyCookiesEnabled={true}
        injectedJavaScript={`
          window.localStorage.setItem('twilight.theme', '1'); 
          true;
        `
        }
        cacheEnabled={false}
        sharedCookiesEnabled
        style={{
          flex: 1
        }}
      />
    </Box>
  )
}

export default LoginWebView