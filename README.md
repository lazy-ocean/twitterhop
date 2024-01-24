# Twitterhop - your tweets history for today

**[Timehop](https://www.timehop.com/)** is not showing tweets history anymore (thanks Elon). Here's your new, local and secure way to check the tweets history for today.


> [!IMPORTANT]
> This is a work in progress, but you can have a go at it right now using Expo Go local development suite.

## 🧰 Stack and tools

- **[React Native](https://reactnative.dev/)**: React-based native app
- **[Expo](https://expo.dev/)**: mobile apps ecosystem, letting you to develop and run your app instantly
- **TypeScript**: type safety all the way

## 🔗 How to run
> [!NOTE]
> Request your Twitter/X archive beforehand. [Here's how to do it](https://help.twitter.com/en/managing-your-account/how-to-download-your-x-archive).
> This might take some time (24+hrs).

0. Locate `tweets.js` file in `{your twitter archive}.zip/data`. Have this file ready on your phone.
1. Clone this repo and install dependencies
2. Install [Expo Go](https://docs.expo.dev/get-started/expo-go/) on your device
3. Run your local instance
```
yarn start
```
4. Follow the [Expo Go](https://docs.expo.dev/get-started/expo-go/) instructions: either open the app to scan the QR code (Android) or scan the QR code with your camera (iOS).
5. Locate the `tweets.js` file in the app. Don't fret: it is secured on your device and not loaded anywhere.
6. Enjoy!
