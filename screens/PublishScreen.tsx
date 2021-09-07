import * as FileSystem from "expo-file-system";
import React, { useEffect, useState } from "react";
import { Image, StyleSheet, TextInput } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack/lib/typescript/src/types";

type RootStackParamList = {
  PublishScreen: any;
};

type Props = NativeStackScreenProps<RootStackParamList, "PublishScreen">;

export default function ImagesScreen({ route }: Props) {

  return (
    <>
      <Image
        style={{
          resizeMode: "contain",
          height: 300,
        }}
        source={{ uri: route.params !== undefined && route.params.picture.uri }}
      />
      <TextInput
        multiline
        numberOfLines={4}
        // onChangeText={(text) => onChangeText(text)}
        // value={value}
        style={{ padding: 10 }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
