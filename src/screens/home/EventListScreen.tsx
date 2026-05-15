import React, {useState} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import EventCard, { EventCardProps } from '../../components/EventCard';
import COLORS from '../../contants/colors';
import Header from '../../components/Header';


// ── Mock data ──────────────────────────────────────────────────────────────
const EVENTS: Omit<EventCardProps, 'onPress' | 'onShare' | 'onFavourite'>[] = [
  {
    id: '1',
    title: 'ADICTO: Berlin Festival',
    date: '24.02.2022 – 26.02.2022',
    price: '€30 – €100',
    location: 'Berlin, Germany',
    tags: ['Workshop', 'Bachata'],
    image: {uri: 'https://picsum.photos/seed/adicto/200/300'},
    isFavourite: true,
  },
  {
    id: '2',
    title: 'Bachata: Open level',
    date: '27.02.2022 @8pm',
    price: '€12',
    location: 'Berlin, Germany',
    tags: ['Course', 'Bachata'],
    image: {uri: 'https://picsum.photos/seed/bachata/200/300'},
    isFavourite: false,
  },
  {
    id: '3',
    title: 'SSD Rovinj 2022',
    date: '07.06.2022 – 13.06.2022',
    price: '€65 – €450',
    location: 'Rovinj, Croatia',
    tags: ['Festival', 'Bachata'],
    image: {uri: 'https://picsum.photos/seed/rovinj/200/300'},
    isFavourite: false,
  },
  {
    id: '4',
    title: 'Berlin Sensual Nights',
    date: '29.02.2022 | 21:00 – 04:00',
    price: '€30 – €100',
    location: 'Berlin, Germany',
    tags: ['Party', 'Bachata', 'Salsa', 'Kizz'],
    image: {uri: 'https://picsum.photos/seed/bebo/200/300'},
    isFavourite: true,
  },
  {
    id: '5',
    title: 'Salsa & Bachata Night',
    date: '05.03.2022 | 19:00 – 01:00',
    price: '€7',
    location: 'Berlin, Germany',
    tags: ['Course', 'Party', 'Bachata', 'Salsa'],
    image: {uri: 'https://picsum.photos/seed/saturday/200/300'},
    isFavourite: false,
  },
  {
    id: '6',
    title: 'Soda Social Club – Salsa, Bachata, …',
    date: '06.03.2022 | 19:00 – 02:00',
    price: '€8',
    location: 'Berlin, Germany',
    tags: ['Party', 'Bachata', 'Salsa', 'Kiz'],
    image: {uri: 'https://picsum.photos/seed/soda/200/300'},
    isFavourite: false,
  },
];

// ── Screen ─────────────────────────────────────────────────────────────────
const EventListScreen = ({navigation}: any) => {
  const [events, setEvents] = useState(EVENTS);

  const toggleFavourite = (id: string) => {
    setEvents(prev =>
      prev.map(e => (e.id === id ? {...e, isFavourite: !e.isFavourite} : e)),
    );
  };

  return (
    <SafeAreaView style={styles.safe}>
      <Header
        title="Hello Renzo!"
        subtitle="Are you ready to dance?"
      />
      <FlatList
        data={events}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <EventCard
            {...item}
            onPress={() => navigation.navigate('EventDetail', {event: item})}
            onFavourite={() => toggleFavourite(item.id)}
            onShare={() => console.log('share', item.id)}
          />
        )}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
};

export default EventListScreen;

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
});
