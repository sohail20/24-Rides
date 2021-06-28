import React from "react";
import {
  ImageBackground,
  Image,
  StyleSheet,
  StatusBar,
  Dimensions
} from "react-native";
import { Block, Button, Text, theme } from "galio-framework";

const { height, width } = Dimensions.get("screen");

import nowTheme from "../constants/Theme";
import Images from "../constants/Images";

class Pro extends React.Component {
  render() {
    const { navigation } = this.props;

    return (
      <Block flex style={styles.container}>
        <StatusBar hidden />
        <Block flex center>
          <ImageBackground
            source={Images.Pro}
            style={{ height, width, zIndex: 1 }}
          />
        </Block>

        <Block flex space="between" style={styles.padded}>

          <Block middle row style={{ marginTop: -50, marginBottom: 30}}>
            <Text
              color="white"
              size={16}
              style={{ fontFamily: 'montserrat-regular' }}
            >
              This is the articles about driving licenses 
            </Text>
          </Block>

          <Block middle flex space="around" style={{ zIndex: 2 }}>
            <Block center style={styles.title}>
              <Block>
                <Text color="white" size={60} style={styles.font}>
                  How to drive
                </Text>
              </Block>
              <Block row>
                <Text middle color="white" size={34} style={styles.font}>
                  People are
                </Text>
                <Block middle style={styles.pro}>
                  <Text size={14} color="white" style={styles.font}>
                  PRO
                </Text>
                </Block>
              </Block>
            </Block>

            <Block center>
              <Button
                style={styles.button}
                color={nowTheme.COLORS.PRIMARY}
                onPress={() => navigation.navigate("Home")}

              >
                Read More
              </Button>
            </Block>
          </Block>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLORS.BLACK
  },
  padded: {
    top: 270,
    paddingHorizontal: theme.SIZES.BASE * 2,
    position: 'absolute',
    bottom: theme.SIZES.BASE,
    zIndex: 2
  },
  button: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0
  },
  title: {
    marginTop: "-5%"
  },
  subTitle: {
    marginTop: 20
  },
  pro: {
    backgroundColor: nowTheme.COLORS.BLACK,
    paddingHorizontal: 8,
    marginLeft: 3,
    borderRadius: 4,
    height: 22,
    marginTop: 0
  },
  font: {
    fontFamily: 'montserrat-bold'
  }
});

export default Pro;
