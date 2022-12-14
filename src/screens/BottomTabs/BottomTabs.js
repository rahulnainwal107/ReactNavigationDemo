import * as React from "react";
import { View, StyleSheet } from "react-native";

import Button from "../../components/Button";

function BottomTabs({ navigation }) {
  const onButtonPress = (routeName) => {
    navigation.navigate(routeName);
  };

  return (
    <View style={styles.mainContainer}>
      <Button
        buttonName={"Basic Bottom Tab"}
        onPress={onButtonPress.bind(this, "BottomTab1")}
      />
      <Button
        buttonName={"Custom Bottom Tab 1"}
        onPress={onButtonPress.bind(this, "BottomTab2")}
      />
      <Button
        buttonName={"Custom Bottom Tab 2"}
        onPress={onButtonPress.bind(this, "BottomTab3")}
      />
    </View>
  );
}

export default BottomTabs;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});
