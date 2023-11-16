/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import { Text as DefaultText, View as DefaultView } from 'react-native';

const light: ColorsStyle = {
  primary: 'blue',
  background: '#fff',
  card: 'red',
  text: '#000',
  border: 'orange',
  notification: 'red'

}
 
const dark: ColorsStyle = {
  primary: 'white',
  background: '#000',
  card: '#000',
  text: '#fff',
  border: 'gray',
  notification: 'red'

}

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type ColorsStyle = {
  primary: string, //controls color of active tab
  background: string,
  card: string, //controls background color of tab and header area
  text: string,
  border: string, //controls tab border 
  notification: string
};

export type ThemeProp= {
  dark: boolean,
  colors: ColorsStyle
}

export const DarkTheme: ThemeProp =  {
  dark: true,
  colors: dark
}

export const LightTheme: ThemeProp =  {
  dark: false,
  colors: light
}

export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];



