import { View, Text } from "react-native";
import React from "react";
import { Stack, Tabs } from "expo-router";
import icons from "@/constants/icons.js";
import { Image } from "expo-image";
import { useTranslation } from "react-i18next";
import ActiveHomeTabIcon from "@/constants/ActiveHomeTabIcon";
import HomeTabIcon from "@/constants/HomeTabIcon";
import ActiveOfferTabIcon from "@/constants/ActiveOfferTabIcon";
import OffersTabIcon from "@/constants/OffersTabIcon";
import ActiveChatTabIcon from "@/constants/ActiveChatTabIcon";
import ChatTabIcon from "@/constants/ChatTabIcon";
import ActiveDateTabIcon from "@/constants/ActiveDateTabIcon";
import DateTabIcon from "@/constants/DateTabIcon";

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
    {icon}
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
              icon={focused ? <ActiveHomeTabIcon /> : <HomeTabIcon />}
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
              icon={focused ? <ActiveOfferTabIcon /> : <OffersTabIcon />}
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
              icon={focused ? <ActiveChatTabIcon /> : <ChatTabIcon />}
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
              icon={focused ? <ActiveDateTabIcon /> : <DateTabIcon />}
              title={t("tabs.dates")}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
