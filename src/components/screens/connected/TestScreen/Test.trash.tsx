const TestTrash = () => {
  // useConfigureApi();

  // const dispatch = useDispatch()
  // const firebaseConfig = useSelector(firebaseConfigSelector)

  // const isFirebaseInitialised = firebaseConfig !== null

  // const { data, isLoading } = useFirebaseInstallations(isFirebaseInitialised)

  // useEffect(() => {
  //   if (!isFirebaseInitialised && data) {
  //     console.log('dataxxx', data)
  //     setFirebaseConfig(data)(dispatch)
  //   }
  // }, [data, isFirebaseInitialised])
  
    // useEffect(() => {
  //   (async () => {
  //     if (Boolean(firebaseConfig)) {

  //       const register3 = await axios.post(
  //         'https://android.apis.google.com/c2dm/register3',
  //         `X-subtype=1047662895952&sender=1047662895952&X-app_ver=1100000&X-osv=33&X-cliv=fiid-20.3.0&X-gmsv=221821044&X-appid=${firebaseConfig?.fid}&X-scope=*&X-Goog-Firebase-Installations-Auth=${firebaseConfig?.authToken.token}&X-gmp_app_id=1%3A1047662895953%3Aandroid%3A9eab9e119f8004fc&X-Firebase-Client=fire-cls-ndk%2F17.3.0+android-installer%2F+fire-android%2F33+fire-rc%2F19.1.4+device-model%2Femu64a+fire-cls%2F17.3.0+fire-abt%2F19.0.1+fire-core%2F19.4.0+fire-analytics%2F17.6.0+device-brand%2Fgoogle+device-name%2Fsdk_gphone64_arm64+fire-iid%2F20.3.0+android-min-sdk%2F21+android-target-sdk%2F29+android-platform%2F+fire-fcm%2F20.1.7_1p+kotlin%2F1.5.0+fire-installations%2F16.3.4&X-firebase-app-name-hash=R1dAH9Ui7M-ynoznwBdw01tLxhI&X-Firebase-Client-Log-Type=1&X-app_ver_name=11.0.0&app=tv.twitch.android.app&device=3941777948888058894&app_ver=1100000&info=468v4nbhC2cRQKri541rkWUVl_weThg&gcm_ver=221821044&plat=0&cert=8c68c13822723a2b1fa844bed340031beb1f9463&target_ver=29`,
  //         {
  //           headers: {
  //             'Host': 'android.apis.google.com',
  //             'Authorization': 'AidLogin 3941777948888058894:4104306278156052449',
  //             'App': 'tv.twitch.android.app',
  //             'Gcm_ver': '221821044',
  //             'User-Agent': 'Android-GCM/1.5 (emu64a TPB4.220624.004)',
  //             'Content-Type': 'application/x-www-form-urlencoded',
  //             'Accept-Encoding': 'gzip, deflate'
  //           }
  //         }
  //       );

  //       const token = (register3.data as string).replace('token=', '')

  //       console.log('token', token)

  //       const addDeviceToken = await axios.post(
  //         'https://gql.twitch.tv/gql',
  //         {
  //           'operationName': 'AddDeviceToken',
  //           'variables': {
  //             'input': {
  //               'deviceID': DEVICE_ID,
  //               'deviceName': 'sdk_gphone64_arm64',
  //               'deviceToken': token,
  //               'notificationCapabilitiesTypes': [
  //                 'selfliveup',
  //                 'dartliveup',
  //                 'destination:Homepage',
  //                 'destination:ChannelPage',
  //                 'destination:NotificationSettingsPage',
  //                 'destination:BroadcasterDashboard',
  //                 'destination:BrowseGame',
  //                 'destination:ExternalLink',
  //                 'destination:WhisperThread'
  //               ],
  //               'platform': 'android'
  //             }
  //           },
  //           'extensions': {
  //             'persistedQuery': {
  //               'version': 1,
  //               'sha256Hash': '65077f882f819f166ab38c80230bae913d596bcc419c60618fca5fe58c100f5d'
  //             }
  //           }
  //         },
  //         {
  //           headers: {
  //             'Host': 'gql.twitch.tv',
  //             'Accept': 'application/json',
  //             'X-Apollo-Operation-Name': 'AddDeviceToken',
  //             'Content-Type': 'application/json; charset=utf-8',
  //             'Accept-Encoding': 'gzip, deflate',
  //             'Client-Id': CLIENT_ID,
  //             'Accept-Language': 'en-us',
  //             'X-Device-Id': DEVICE_ID,
  //             'User-Agent': 'Dalvik/2.1.0 (Linux; U; Android 13; sdk_gphone64_arm64 Build/TPB4.220624.004) tv.twitch.android.app/11.0.0/1100000',
  //             'Connection': 'close'
  //           }
  //         }
  //       );

  //       console.log(addDeviceToken.data)

  //     }
  //   })
  // }, [firebaseConfig])

  // useEffect(() => {
  //   (async () => {
  //     const response = await api.post(
  //       'https://gql.twitch.tv/gql',
  //       [
  //           {
  //               'operationName': 'IpCountryCodeQuery',
  //               'variables': {},
  //               'extensions': {
  //                   'persistedQuery': {
  //                       'version': 1,
  //                       'sha256Hash': 'c41536aa193b4a9734ef493220ac656cf807ce33f29ddaa18d25eea9102758d2'
  //                   }
  //               }
  //           }
  //       ],
  //       {
  //           headers: {
  //               'Host': 'gql.twitch.tv',
  //               'X-Apollo-Operation-Id': 'c41536aa193b4a9734ef493220ac656cf807ce33f29ddaa18d25eea9102758d2',
  //               'X-Apollo-Operation-Name': 'IpCountryCodeQuery',
  //               'Content-Type': 'application/json',
  //               'Accept-Encoding': 'gzip, deflate',
  //               'Client-Id': CLIENT_ID,
  //               'Accept': 'application/vnd.twitchtv.v3+json',
  //               'Accept-Language': 'en-us',
  //               'X-Device-Id': 'e97eab12f58b44f294bbbfa6559d07b3',
  //               'Api-Consumer-Type': 'mobile; Android/11403003',
  //               'X-App-Version': '14.3.0',
  //               'Client-Session-Id': '7510ce75-556f-4cb6-b941-f634a75ea2ea',
  //               'User-Agent': 'Dalvik/2.1.0 (Linux; U; Android 13; sdk_gphone64_arm64 Build/TPB4.220624.004) tv.twitch.android.app/14.3.0_BETA/11403003',
  //               'Content-Length': '181',
  //               'Connection': 'close'
  //           }
  //       }
  //   );

  //   console.log(response.data)
  //   })()
  // }, [])
}