import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import {getComics} from '../../../marvelAPI';
import styles from './Comics.style';

const Comics = () => {
  const [comics, setComics] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getComics();
      setComics(result);
    };
    fetchData();
  }, []);

  const renderComics = ({item}) => {
    return (
      <View style={styles.comic_container}>
        <Image
          style={styles.comic_image}
          source={{uri: `${item.thumbnail.path}.${item.thumbnail.extension}`}}
        />
        <Text style={styles.comic_title}>{item.title}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={comics}
        renderItem={renderComics}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default Comics;
