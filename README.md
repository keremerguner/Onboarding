
# Installation

```bash
npm install @react-navigation/native @react-navigation/native-stack
npm install @react-native-async-storage/async-storage
npm install react-native-screens react-native-safe-area-context
```

```bash
cd OnboardingApp
mkdir -p src/{screens,components,navigation,constants,hooks,services,utils,assets,types,store}
mkdir -p src/components/{common,ui}
mkdir -p src/services/{api,storage}
mkdir -p src/assets/{images,fonts}
mkdir -p src/store/slices
```

- types/navigation.ts
- constants/onboarding.ts
- hooks/useOnboarding.ts
- screens/OnboardingScreen/styles.ts
- // src/screens/OnboardingScreen/index.tsx
- // App.tsx
- // src/screens/HomeScreen/index.tsx
- // src/navigation/RootNavigator.tsx

```bash
# tsconfig.json UPDATE

{
  "extends": "@react-native/typescript-config/tsconfig.json",
  "compilerOptions": {
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "baseUrl": "./src",
    "paths": {
      "*": ["node_modules/*", "src/types/*"]
    }
  },
  "include": ["src", "src/types/**/*.d.ts"]
}

```

```bash
- npm install react-native-svg react-native-svg-transformer

# metro.config.js UPDATE:


const { getDefaultConfig } = require('expo/metro-config');

const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

module.exports = mergeConfig(defaultConfig, {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  resolver: {
    assetExts: defaultConfig.resolver.assetExts.filter(ext => ext !== 'svg'),
    sourceExts: [...defaultConfig.resolver.sourceExts, 'svg'],
  },
});
```