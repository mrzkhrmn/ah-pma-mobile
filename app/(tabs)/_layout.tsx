import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import icons from "@/constants/icons.js";

const TabIcon = ({
  focused,
  icon,
  title,
  containerMargin,
}: {
  focused: boolean;
  icon: any;
  title: String;
  containerMargin: String;
}) => (
  <View
    className={`flex flex-col items-center justify-center ${containerMargin}`}
  >
    <Image
      source={icon}
      tintColor={focused ? "#1d3587" : "black"}
      resizeMode="contain"
    />
    <Text
      className={`${
        focused ? "text-[#1D3587] font-[500]" : "text-black font-[400]"
      } text-xs w-full text-center mt-1`}
    >
      {title}
    </Text>
  </View>
);

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              containerMargin="mt-5"
              focused={focused}
              icon={icons.homeInactiveIcon}
              title={"Ana Sayfa"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="offers"
        options={{
          title: "Offers",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              containerMargin="mt-5"
              focused={focused}
              icon={icons.offersInactiveIcon}
              title={"Teklifler"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="operations"
        options={{
          title: "Operations",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View className="flex items-center justify-center mt-2">
              <View className="bg-[#1d3587] rounded-full flex items-center justify-center  h-10 w-10 mb-2">
                <Image
                  source={icons.operationsIcon}
                  tintColor={"white"}
                  resizeMode="contain"
                />
              </View>
              <Text
                className={`${
                  focused
                    ? "text-[#1D3587] font-[500]"
                    : "text-black font-[400]"
                } text-xs w-full text-center`}
              >
                {"Operations"}
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: "Chat",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              containerMargin="mt-[15px]"
              focused={focused}
              icon={icons.chatInactiveIcon}
              title={"Sohbet"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="appointment"
        options={{
          title: "Appointment",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              containerMargin="mt-[18px]"
              focused={focused}
              icon={icons.appointmentInactiveIcon}
              title={"Randevular"}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
