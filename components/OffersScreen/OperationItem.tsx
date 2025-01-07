import { View, Text, Keyboard } from "react-native";
import React, { useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
import {
  Pressable,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { StyleSheet } from "react-native";

const OperationItem = ({ data, index, handleDelete, operation }) => {
  const [dropDownValue, setDropDownValue] = useState(null);
  console.log(dropDownValue);

  return (
    <View className=" border-b border-gray-300 py-2">
      <View className="mx-auto mt-4">
        <View className="items-end px-4 ">
          <Pressable onPress={() => handleDelete(operation.id)}>
            <Text className="text-xl">X</Text>
          </Pressable>
        </View>
        <Dropdown
          style={styles.dropdown}
          inputSearchStyle={styles.dropdown}
          selectedTextStyle={styles.dropdown}
          placeholderStyle={styles.dropdown}
          data={data}
          labelField={"label"}
          valueField={"value"}
          value={dropDownValue}
          placeholder="Operason Seçimi"
          onChange={(item) => {
            setDropDownValue(item.value);
          }}
        />
      </View>
      {data.map(
        (d, index) =>
          d.value === dropDownValue && (
            <View key={index}>
              {data[index].questions.map((question, i) => (
                <View key={i}>
                  <View className="px-10 mt-6 gap-1">
                    <Text className="font-inter-medium">Soru {i + 1}</Text>
                    <Text key={i}>{question}</Text>
                  </View>
                  <TouchableWithoutFeedback
                    onPress={Keyboard.dismiss}
                    accessible={false}
                  >
                    <View className=" w-full px-10 mt-4 ">
                      <TextInput
                        multiline
                        placeholder="Cevap"
                        placeholderTextColor={"#00000050"}
                        className="border border-black/20 w-full py-2 px-2 rounded-lg bg-white"
                      />
                    </View>
                  </TouchableWithoutFeedback>
                </View>
              ))}
            </View>
          )
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    marginVertical: 8,
    borderRadius: 8,
    backgroundColor: "white",
    borderColor: "gray",
    paddingHorizontal: 10,
    width: 250,
    fontSize: 14,
  },
});

export default OperationItem;
