import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageSourcePropType,
} from 'react-native';
import SPACING from '../contants/spacing';
import COLORS from '../contants/colors';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
export interface EventCardProps {
  id: string;
  title: string;
  date: string;
  price: string;
  location: string;
  tags: string[];
  image: ImageSourcePropType;
  isFavourite?: boolean;
  onPress?: () => void;
  onShare?: () => void;
  onFavourite?: () => void;
}

const EventCard: React.FC<EventCardProps> = ({
  title,
  date,
  price,
  location,
  tags,
  image,
  isFavourite = false,
  onPress,
  onShare,
  onFavourite,
}) => {
  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.85}
      onPress={onPress}
    >
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.thumbnail} resizeMode="cover" />
      </View>
      <View style={styles.body}>
        <TouchableOpacity style={styles.arrowBtn} onPress={onPress}>
          <Feather name="arrow-right" style={styles.arrow} />
        </TouchableOpacity>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <View style={styles.metaRow}>
          <Text style={styles.date}>{date}</Text>
          <Text style={styles.location}>{location}</Text>
        </View>
        <Text style={styles.price}>{price}</Text>
        <View style={styles.footerRow}>
          <View style={styles.tagsWrap}>
            {tags.map(tag => (
              <View key={tag} style={styles.tag}>
                <Text style={styles.tagText}>{tag}</Text>
              </View>
            ))}
          </View>

          <View style={styles.actions}>
            <TouchableOpacity onPress={onShare} style={styles.iconBtn}>
              <Feather name="share" size={18} color={COLORS.textGray} />
            </TouchableOpacity>
            <TouchableOpacity onPress={onFavourite} style={styles.iconBtn}>
              <Text
                style={[styles.iconText, isFavourite && styles.heartActive]}
              >
                {isFavourite ? (
                  <Ionicons name="heart" size={18} color={COLORS.heart} />
                ) : (
                  <Ionicons
                    name="heart-outline"
                    size={18}
                    color={COLORS.textGray}
                  />
                )}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default EventCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    marginHorizontal: SPACING.lg,
    marginVertical: SPACING.xs,
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: COLORS.border,
  },
imageContainer: {
  paddingLeft: SPACING.sm,
  justifyContent: 'center',
  paddingVertical: SPACING.sm,
},
  thumbnail: {
    width: 100,
    height: 100,
    padding: SPACING.md,
    borderRadius: 12,
    paddingVertical: SPACING.lg,
  },

  body: {
    flex: 1,
    padding: SPACING.md,
    justifyContent: 'space-between',
  },
  arrowBtn: {
    position: 'absolute',
    top: SPACING.sm,
    right: SPACING.sm,
  },
  arrow: {
    fontSize: 16,
    color: COLORS.black,
  },

  title: {
    fontSize: 15,
    fontWeight: '700',
    color: COLORS.black,
    marginRight: 24,
    marginBottom: 4,
  },

  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 2,
  },
  date: {
    fontSize: 12,
    color: COLORS.primary,
    fontWeight: '500',
    flexShrink: 1,
  },
  location: {
    fontSize: 11,
    color: COLORS.textGray,
    textAlign: 'right',
    marginLeft: SPACING.sm,
  },

  price: {
    fontSize: 12,
    color: COLORS.textGray,
    marginBottom: 6,
  },

  footerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tagsWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
    flex: 1,
  },
  tag: {
    backgroundColor: COLORS.tagBg,
    borderRadius: 4,
    paddingHorizontal: SPACING.sm,
    paddingVertical: 2,
  },
  tagText: {
    fontSize: 11,
    color: COLORS.textGray,
    fontWeight: '500',
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginLeft: 6,
  },
  iconBtn: {
    padding: 2,
  },
  iconText: {
    fontSize: 18,
    color: COLORS.textGray,
  },
  heartActive: {
    color: COLORS.heart,
  },
});
