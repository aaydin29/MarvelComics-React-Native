import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import {showMessage} from 'react-native-flash-message';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './CharacterDetail.style';

import {getSeriesForCharacter, getComicsForCharacter} from '../../../marvelAPI';

import ComicsAndSeriesCard from '../../../components/cards/ComicsAndSeriesCard';

const CharacterDetail = ({route, navigation}) => {
  const [comics, setComics] = useState([]);
  const [series, setSeries] = useState([]);

  const {character} = route.params;

  useEffect(() => {
    const fetchComicsAndSeries = async () => {
      const comicsResult = await getComicsForCharacter(character.id);
      setComics(comicsResult);

      const seriesResult = await getSeriesForCharacter(character.id);
      setSeries(seriesResult);
    };
    fetchComicsAndSeries();
  }, [character]);

  const handleComicSelect = item => {
    navigation.navigate('ComicDetail', {comic: item});
  };

  const renderComics = ({item}) => {
    return (
      <ComicsAndSeriesCard
        item={item}
        onPress={() => handleComicSelect(item)}
      />
    );
  };

  const renderSeries = ({item}) => {
    return <ComicsAndSeriesCard item={item} />;
  };

  const handleAddFavorites = async () => {
    const user = auth().currentUser;
    if (user) {
      const userId = user.uid;
      const favoritesRef = database().ref(
        `users/${userId}/favorites/characters`,
      );
      const snapshot = await favoritesRef.once('value');
      const data = snapshot.val();
      let isExists = false;
      if (data) {
        for (const key in data) {
          if (data[key]?.character?.id === character.id) {
            isExists = true;
            break;
          }
        }
      }
      if (isExists) {
        showMessage({
          message: 'Failed! This character is already in your favorites!',
          type: 'danger',
        });
      } else {
        favoritesRef.push({
          id: character.id,
          character: character,
        });
        showMessage({
          message: 'The character has been added to favorites successfully!',
          type: 'success',
        });
      }
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.character_container}>
        <Image
          style={styles.character_image}
          source={{
            uri: `${character.thumbnail.path}.${character.thumbnail.extension}`,
          }}
        />
        <Text style={styles.character_name}>{character.name}</Text>
        <Text style={styles.character_description}>
          {character.description}
        </Text>
        <TouchableOpacity onPress={handleAddFavorites}>
          <Icon style={styles.icon} name="heart" size={30} />
        </TouchableOpacity>
      </View>
      <Text style={styles.titles}>Comics</Text>
      <FlatList
        horizontal
        data={comics}
        renderItem={renderComics}
        keyExtractor={item => item.id.toString()}
      />
      <Text style={styles.titles}>Series</Text>
      <FlatList
        horizontal
        data={series}
        renderItem={renderSeries}
        keyExtractor={item => item.id.toString()}
      />
    </ScrollView>
  );
};

export default CharacterDetail;
