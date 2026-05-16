import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import Header from '../../components/Header';
import EventCard from '../../components/EventCard';
import COLORS from '../../contants/colors';
import {toggleFavourite} from '../../redux/slices/favoriteSlice';

const FavouriteScreen = ({navigation}: any) => {
  const dispatch = useDispatch();
  const favourites = useSelector(
    (state: any) => state.favorites.favourites,
  );
  const events = useSelector(
    (state: any) => state.events.events,
  );
  const favouriteEvents = events.filter((item: any) =>
    favourites.includes(item.id),
  );

  return (
     <SafeAreaView style={styles.safe} edges={['bottom']}>
      <Header
        title="Favourites"
        subtitle="Your liked events"
      />

      {favouriteEvents.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>
            No favourite events yet
          </Text>
        </View>
      ) : (
        <FlatList
          data={favouriteEvents}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <EventCard
              id={item.id}
              title={item.title}
              date={item.date}
              price={item.price}
              location={item.location}
              tags={item.tags}
              image={{uri: item.image||'https://picsum.photos/seed/adicto/200/300'}}
              isFavourite={true}
              onPress={() =>
                navigation.navigate('EventDetail', {
                  event: item,
                })
              }
              onFavourite={() =>
                dispatch(toggleFavourite(item.id))
              }
              onShare={() =>
                console.log('share', item.id)
              }
            />
          )}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => (
            <View style={styles.separator} />
          )}
        />
      )}
    </SafeAreaView>
  );
};

export default FavouriteScreen;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: COLORS.gray,
  },

  list: {
    paddingTop: 12,
    paddingBottom: 24,
  },

  separator: {
    height: 8,
  },

  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  emptyText: {
    fontSize: 16,
    color: COLORS.textGray,
    fontWeight: '500',
  },
});