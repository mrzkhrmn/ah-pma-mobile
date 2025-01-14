import { View, Text } from "react-native";
import React from "react";
import { Stack, Tabs } from "expo-router";
import icons from "@/constants/icons.js";
import { Image } from "expo-image";
import { useTranslation } from "react-i18next";

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
      style={{ width: 22, height: 22 }}
      contentFit="contain"
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
  const { t } = useTranslation();
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
              title={t("tabs.home")}
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
              title={t("tabs.offers")}
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
            <View className="flex flex-col items-center justify-cente gap-1 mt-2.5">
              <Image
                source={icons.operationsIcon}
                style={{ width: 32, height: 32 }}
                contentFit="contain"
              />
              <Text
                className={`${
                  focused
                    ? "text-[#1D3587] font-[500]"
                    : "text-black font-[400]"
                } text-xs w-full text-center`}
              >
                {t("tabs.operations")}
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
              containerMargin="mt-[12px]"
              focused={focused}
              icon={icons.chatInactiveIcon}
              title={t("tabs.chat")}
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
              title={t("tabs.dates")}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
