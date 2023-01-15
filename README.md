<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">

  <p align="center">
  <a href="[https://github.com/YassMaldini/react-native-twitch](https://github.com/YassMaldini/react-native-twitch)">
    <img src="assets/icon.png" style="border-radius: 5px;" alt="Logo" width="80" height="80">
      <h1 align="center">React Native Twitch</h1>
  </a>
  </p>
  
  <img src="https://img.shields.io/github/package-json/dependency-version/YassMaldini/react-native-twitch/react?logo=React" />
  <img src="https://img.shields.io/github/package-json/dependency-version/YassMaldini/react-native-twitch/react-native?logo=React" />
  <img src="https://img.shields.io/github/package-json/dependency-version/YassMaldini/react-native-twitch/expo?color=blueviolet&logo=Expo" />
  <img src="https://img.shields.io/github/actions/workflow/status/YassMaldini/react-native-twitch/eas-build.yml" />
  <br />
  <br />
  
  <p align="center">
    <b>A clone of Twitch's mobile app based on the same API as the real app.</b>
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
   git clone https://github.com/YassMaldini/react-native-twitch.git
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
   
<!-- ROADMAP -->
## Roadmap

- [ ] Improve general performance
- [x] Add Hermes and Flipper for debugging
- [ ] Write unit tests for every design system's components
- [ ] Finish the Player component
- [x] Change colors to match React colors
- [ ] Multi-theme Support
    - [ ] Light mode
    - [x] Dark mode
- [ ] Multi-language Support
    - [x] English
    - [ ] French

See the [open issues](https://github.com/YassMaldini/react-native-twitch/issues) for a full list of proposed features (and known issues).

<!-- CURRENT LIMITS -->
## Current limits

The main limit is the `/integrity` endpoint which is a new security implemented by Twitch at the end of 2022. It prevents me to make the login flow in the same way as the real app and to use some mutations.

So to overcome the login issue I used a WebView for the login. But I still can't handle some mutations as following a user or a game.

<!-- ABOUT THE PROJECT -->
## About The Project

It's a revisited version of the twitch's mobile app based on the same API as the real app. 

This project was made using React Native, Expo and Typescript unlike the real app who's made using the native languages for both platform.

Here is an interesting bolg post who's explaining the reasons why they didn't choose to switch to React Native.

https://blog.twitch.tv/en/2017/04/25/investigating-react-native-6032ecced610/

Note that this post was written almost 6 years ago and many improvments have been made to React Native since then.

<!-- CONTACT -->
## Contact

Yacine Berkane - yacine.berkane66s@gmail.com

Project Link: [https://github.com/YassMaldini/react-native-twitch](https://github.com/YassMaldini/react-native-twitch)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
