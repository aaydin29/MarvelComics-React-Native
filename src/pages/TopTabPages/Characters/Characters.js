import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import {getCharacters} from '../../../marvelAPI';
import styles from './Characters.style';

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getCharacters();
      setCharacters(result);
    };
    fetchData();
  }, []);

  const renderCharacters = ({item}) => {
    return (
      <View style={styles.characters_container}>
        <Image
          style={styles.characters_image}
          source={{uri: `${item.thumbnail.path}.${item.thumbnail.extension}`}}
        />
        <Text style={styles.characters_title}>{item.name}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={characters}
        renderItem={renderCharacters}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default Characters;
