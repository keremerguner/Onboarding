// src/hooks/useOnboarding.ts
import { useState, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { OnboardingScreenNavigationProp } from '../types/navigation';

export const useOnboarding = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const navigation = useNavigation<OnboardingScreenNavigationProp>();

  const completeOnboarding = useCallback(async () => {
    try {
      await AsyncStorage.setItem('hasSeenOnboarding', 'true');
      navigation.replace('Home');
    } catch (error) {
      console.error('Onboarding kaydedilirken hata:', error);
    }
  }, [navigation]);

  const handlePageChange = useCallback((pageIndex: number) => {
    setCurrentPage(pageIndex);
  }, []);

  return {
    currentPage,
    handlePageChange,
    completeOnboarding,
  };
};