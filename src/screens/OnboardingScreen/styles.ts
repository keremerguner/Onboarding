// src/screens/OnboardingScreen/styles.ts
import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  // src/screens/OnboardingScreen/styles.ts
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    bottom: 50,
    paddingHorizontal: 16,
    width: '100%',
  },
  paginationContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 16,
  },
  navButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 0,
    shadowColor: 'transparent',
  },
  buttonContainer: {
    width: 48,
    alignItems: 'center',
  },
  leftButtonContainer: {
    width: 48,
    alignItems: 'flex-start',
  },
  rightButtonContainer: {
    width: 48,
    alignItems: 'flex-end',
  },
  atlaButton: {
    width: 48, // navButton ile aynı boyutta
    height: 48,
    borderRadius: 24,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    // Gölge efektlerini kaldırdık
    elevation: 0,
    shadowColor: 'transparent',
  },
  atlaButtonText: {
    color: '#fff',
    fontSize: 14, // Metni biraz küçülttük
    fontWeight: '600',
    textAlign: 'center', // Metni ortala
    width: '100%', // Tam genişlik kullan
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  slideContainer: {
    flex: 1,
    width,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  image: {
    width: width * 0.8,
    height: width * 0.8,
    marginBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 16,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 20,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },
  paginationDotActive: {
    backgroundColor: '#4CAF50',
    width: 24,
  },

  navButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
