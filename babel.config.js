module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      "babel-preset-expo", // Required for Expo
      "@babel/preset-react", // To handle JSX
      "@babel/preset-typescript", // To handle TypeScript
    ],
    plugins: ["nativewind/babel"], // For NativeWind (Tailwind CSS in React Native)
  };
};
