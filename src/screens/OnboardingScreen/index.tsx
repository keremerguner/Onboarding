// src/screens/OnboardingScreen/index.tsx
import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StatusBar,
  Dimensions,
} from 'react-native';
import {useOnboarding} from '../../hooks/useOnboarding';
import {ONBOARDING_DATA} from '../../constants/onboarding';
import {styles} from './styles';
import LeftIcon from '../../assets/icons/left.svg';
import RightIcon from '../../assets/icons/right.svg';
import CheckIcon from '../../assets/icons/check.svg';
const {width} = Dimensions.get('window');

const OnboardingScreen: React.FC = () => {
  const {currentPage, handlePageChange, completeOnboarding} = useOnboarding();
  const flatListRef = React.useRef<FlatList>(null);

  const renderItem = ({item}: {item: (typeof ONBOARDING_DATA)[0]}) => (
    <View style={styles.slideContainer}>
      <Image source={item.image} style={styles.image} resizeMode="contain" />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  const goToNextPage = () => {
    flatListRef.current?.scrollToIndex({
      index: currentPage + 1,
      animated: true,
    });
  };

  const goToPrevPage = () => {
    flatListRef.current?.scrollToIndex({
      index: currentPage - 1,
      animated: true,
    });
  };

  const onViewableItemsChanged = React.useCallback(
    ({viewableItems}: any) => {
      if (viewableItems[0]) {
        handlePageChange(viewableItems[0].index);
      }
    },
    [handlePageChange],
  );

  const viewabilityConfig = React.useMemo(
    () => ({
      viewAreaCoveragePercentThreshold: 50,
    }),
    [],
  );

  // src/screens/OnboardingScreen/index.tsx
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <FlatList
        ref={flatListRef}
        data={ONBOARDING_DATA}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        keyExtractor={item => item.id}
      />

      <View style={styles.navigationContainer}>
        <View style={styles.leftButtonContainer}>
          {currentPage > 0 ? (
            <TouchableOpacity
              style={styles.navButton}
              onPress={goToPrevPage}
              activeOpacity={0.8}>
              <LeftIcon width={24} height={24} fill="#fff" />
            </TouchableOpacity>
          ) : (
            <View style={{width: 48}} />
          )}
        </View>

        <View style={styles.paginationContainer}>
          {ONBOARDING_DATA.map((_, index) => (
            <View
              key={index}
              style={[
                styles.paginationDot,
                currentPage === index && styles.paginationDotActive,
              ]}
            />
          ))}
        </View>

        <View style={styles.rightButtonContainer}>
          {currentPage === ONBOARDING_DATA.length - 1 ? (
            <TouchableOpacity
              style={styles.atlaButton}
              onPress={completeOnboarding}
              activeOpacity={0.8}>
              <CheckIcon width={24} height={24} fill="#fff" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.navButton}
              onPress={goToNextPage}
              activeOpacity={0.8}>
              <RightIcon width={24} height={24} fill="#fff" />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

export default OnboardingScreen;
