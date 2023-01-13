<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="[https://github.com/YassMaldini/react-native-twitch](https://github.com/YassMaldini/react-native-twitch)">
    <img src="assets/twitch_logo.png" style="border-radius: 5px;" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">React Native Twitch</h3>

  <p align="center">
    A clone of the Twitch app using the same API as the real app (android).
    <br />
    <br />
    <a href=""><strong>Online Demo »</strong></a>
    <br />
    <div align="center">
      <img src="https://miro.medium.com/max/800/1*yWUgGAQuiROzilwG_tEU2Q.png" alt="rn_ts" width="85" height="50">
    </div>
  </p>
</div>

<!-- GETTING STARTED -->
## Getting Started

Follow these steps to set up the project locally.

### Prerequisites

* expo
  ```sh
  npm install -g expo-cli
  ```
* eas (recommended)
  ```sh
  npm install -g eas-cli
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/YassMaldini/instagram-clone.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Prebuild the project
   ```sh
   npx expo prebuild
   ```
4. Create a development build locally
   ```sh
   npx expo run:android|ios
   ```

### Build

* Development build
   ```sh
   eas build --platform android|ios|all --profile development
   ```
* Production build
   ```sh
   eas build --platform android|ios|all --profile production
   ```

<!-- CURRENT LIMITS -->
## Current limits

The main limit was the `/integrity` endpoint which is a new security implemented by Twitch at the end of 2022. It prevents me to make a login flow in the same way as the real app.

So to overcome it I used a WebView for the login. But I still can't handle some mutation as following a user or a game.

<!-- ABOUT THE PROJECT -->
## About The Project

It's a revisited version of the twitch's mobile app based on the same API as the real app. 

This project was made using React Native, Expo and Typescript unlike the real app who's made using the native languages for both platform.

Here is an intersting bolg post who's explaining the reasons why they didn't choose to switch to React Native.

https://blog.twitch.tv/en/2017/04/25/investigating-react-native-6032ecced610/

Note that this blog was written almost 6 years ago and many improvments have been made to React Native since then.

<!-- CONTACT -->
## Contact

Yacine Berkane - yacine.berkane66s@gmail.com

Project Link: [https://github.com/YassMaldini/react-native-twitch](https://github.com/YassMaldini/react-native-twitch)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
