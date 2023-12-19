import React, { useState, useEffect } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselItems, setCarouselItems] = useState([
    {
      image: require('../../assets/favicon.png'),
      title: 'Slide 1',
    },
    {
      image: require('../../assets/favicon.png'),
      title: 'Slide 2',
    },
    {
      image: require('../../assets/favicon.png'),
      title: 'Slide 3',
    },
    // Add more slides as needed
  ]);

  const renderItem = ({ item }) => (
    <View
      style={{
        backgroundColor: 'floralwhite',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 20,
        height: '100%',
        width: '100%',
        marginLeft: 25,
        marginRight: 25,
        overflow: 'hidden',
      }}
    >
      <Image
        source={item.image}
        style={{ width: '100%', height: '100%', resizeMode: 'center' }}
      />
    </View>
  );

  return (
    <View>
      <Carousel
        layout="default"
        data={carouselItems}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={Dimensions.get('window').width - 50}
        renderItem={renderItem}
        onSnapToItem={(index) => setActiveIndex(index)}
      />
      <Pagination
        dotsLength={carouselItems.length}
        activeDotIndex={activeIndex}
        containerStyle={{ marginTop: -20 }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: 'rgba(0, 0, 0, 0.92)',
        }}
        inactiveDotStyle={{
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </View>
  );
};

export default Slider;
