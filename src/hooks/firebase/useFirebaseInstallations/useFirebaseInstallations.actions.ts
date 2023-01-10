import axios from 'axios';

const PREFIX = '[queryFirebaseInstallations]';

export const queryFirebaseInstallations = async () => {
  console.log(PREFIX, `Fetching firebase installations...`);

  const response = await axios.post(
    'https://firebaseinstallations.googleapis.com/v1/projects/twitch-bebf6/installations',
    {
      'appId': '1:1047662895952:android:9eab9e119f8004fc',
      'sdkVersion': 't:1'
    },
    {
      headers: {
        'Host': 'firebaseinstallations.googleapis.com',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Content-Encoding': 'gzip',
        'Cache-Control': 'no-cache',
        'X-Android-Package': 'tv.twitch.android.app',
        'X-Firebase-Client': 'fire-cls/18.2.6 kotlin/1.7.10 android-installer/ fire-core/20.0.0 fire-android/33 fire-rc/19.1.4 device-model/emu64a fire-cls-ndk/18.2.6 fire-abt/19.0.1 fire-installations/17.0.0 fire-analytics/17.6.0 device-brand/google device-name/sdk_gphone64_arm64 fire-iid/20.3.0 android-min-sdk/21 fire-fcm/20.1.7_1p android-platform/ android-target-sdk/33',
        'X-Firebase-Client-Log-Type': '3',
        'X-Android-Cert': '8C68C13822723A2B1FA844BED340031BEB1F9463',
        'X-Goog-Api-Key': 'AIzaSyBRkkpHITeav9Ux3I5Y5Lke1L9BngCwUcQ',
        'User-Agent': 'Dalvik/2.1.0 (Linux; U; Android 13; sdk_gphone64_arm64 Build/TPB4.220624.004)',
        'Accept-Encoding': 'gzip, deflate'
      }
    }
  );

  const { status, data } = response;

  if (status !== 200) {
    throw data;
  }

  console.log(PREFIX, `Received firebase installations.`);
  return data;
};
