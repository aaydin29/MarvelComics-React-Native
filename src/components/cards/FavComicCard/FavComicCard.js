import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import {showMessage} from 'react-native-flash-message';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './FavComicCard.style';

const FavComicCard = ({item, onPress}) => {
  const handleDeleteComic = () => {
    const user = auth().currentUser;
    const userId = user.uid;
    database()
      .ref(`/users/${userId}/favorites/comics/${item.id}`)
      .remove()
      .then(() =>
        showMessage({
          message: 'Comic deleted from favorites.',
          type: 'success',
        }),
      );
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: `${item.comic.thumbnail.path}.${item.comic.thumbnail.extension}`,
          }}
        />
        <Text style={styles.title}>{item.comic.title}</Text>
        <Icon name="remove" color="red" size={25} onPress={handleDeleteComic} />
      </View>
    </TouchableOpacity>
  );
};

export default FavComicCard;
