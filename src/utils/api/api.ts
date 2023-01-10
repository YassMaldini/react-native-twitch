import { create } from 'apisauce';

// const api = create({
//   baseURL: `https://android.linguee.com`,
// });

export const DEVICE_ID = '4b7e32a54aa14ce9b1d43b40b75f5562'
export const CLIENT_ID = 'kd1unb4b3q4t58fwlpcbzcbnm76a8dp'

export const passportApi = create({
  baseURL: 'passport.twitch.tv',
  headers: {
    'Host': 'https://passport.twitch.tv',
    'Content-Type': 'application/json; charset=UTF-8',
    'Content-Length': '205',
    'Accept-Encoding': 'gzip, deflate',
    'Client-Id': CLIENT_ID,
    'Accept': 'application/vnd.twitchtv.v3+json',
    'Accept-Language': 'en-us',
    'X-Device-Id': DEVICE_ID,
    'User-Agent': 'Dalvik/2.1.0 (Linux; U; Android 13; sdk_gphone64_arm64 Build/TPB4.220624.004) tv.twitch.android.app/11.0.0/1100000',
    'Connection': 'close'
  }
})

export const graphqlApi = create({
  baseURL: 'https://gql.twitch.tv'
})

// export default api;
