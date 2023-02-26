import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './FavComicCard.style';

const FavComicCard = ({item}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: `${item.comic.thumbnail.path}.${item.comic.thumbnail.extension}`,
        }}
      />
      <Text style={styles.title}>{item.comic.title}</Text>
    </View>
  );
};

export default FavComicCard;
