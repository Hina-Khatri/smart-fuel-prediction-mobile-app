import React, { useMemo, memo } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { FontSize, FontFamily, Color, Border, Padding } from '../../GlobalStyles';

type TypePrimaryType = {
  getStarted?: string;

  /** Style props */
  typePrimaryPosition?: string;
  typePrimaryBackgroundColor?: string;
  typePrimaryElevation?: number | string;
  typePrimaryPaddingHorizontal?: number | string;
  typePrimaryMarginLeft?: number | string;
  typePrimaryTop?: number | string;
  typePrimaryLeft?: number | string;
  typePrimaryWidth?: number | string;
  typePrimaryHeight?: number | string;
  onPress?: () => void; // Add onPress prop
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === 'unset' ? undefined : value };
};

const TypePrimary = memo(
  ({
    getStarted,
    typePrimaryPosition,
    typePrimaryBackgroundColor,
    typePrimaryElevation,
    typePrimaryPaddingHorizontal,
    typePrimaryMarginLeft,
    typePrimaryTop,
    typePrimaryLeft,
    typePrimaryWidth,
    typePrimaryHeight,
    onPress, // Add onPress prop
  }: TypePrimaryType) => {
    const typePrimaryStyle = useMemo(() => {
      return {
        ...getStyleValue('position', typePrimaryPosition),
        ...getStyleValue('backgroundColor', typePrimaryBackgroundColor),
        ...getStyleValue('elevation', typePrimaryElevation),
        ...getStyleValue('paddingHorizontal', typePrimaryPaddingHorizontal),
        ...getStyleValue('marginLeft', typePrimaryMarginLeft),
        ...getStyleValue('top', typePrimaryTop),
        ...getStyleValue('left', typePrimaryLeft),
        ...getStyleValue('width', typePrimaryWidth),
        ...getStyleValue('height', typePrimaryHeight),
      };
    }, [
      typePrimaryPosition,
      typePrimaryBackgroundColor,
      typePrimaryElevation,
      typePrimaryPaddingHorizontal,
      typePrimaryMarginLeft,
      typePrimaryTop,
      typePrimaryLeft,
      typePrimaryWidth,
      typePrimaryHeight,
    ]);

    return (
      <TouchableOpacity onPress={onPress} style={[styles.typeprimary, typePrimaryStyle]}>
        <Text style={styles.getStarted}>{getStarted}</Text>
      </TouchableOpacity>
    );
  }
);

const styles = StyleSheet.create({
  getStarted: {
    fontSize: FontSize.bodyMedium_size,
    lineHeight: 20,
    fontWeight: '600',
    fontFamily: FontFamily.h2,
    color: Color.greyscaleWhite,
    textAlign: 'left',
  },
  typeprimary: {
    borderRadius: Border.br_980xl,
    backgroundColor: Color.colorSalmon,
    shadowColor: '#FF7966',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 50,
    elevation: 8,
    shadowOpacity: 0.85,
    width: 324,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_sm,
  },
});

export default TypePrimary;
