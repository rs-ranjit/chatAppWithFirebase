import { Image } from "expo-image";
import { View, Platform, Text } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { blurhash } from "../utils/common";
import { useAuth } from "../context/authContext";
import { Menu, MenuOptions, MenuTrigger } from "react-native-popup-menu";
import { MenuItem } from "./CustomeMenuItems";
import { AntDesign, Feather } from "@expo/vector-icons";

const android = Platform.OS == "android";

const Header = () => {
  const { top } = useSafeAreaInsets();
  const { user, logout } = useAuth();

  const handleProfile = () => {};

  const handleLogOut = async () => {
    await logout();
  };

  return (
    <View
      style={{ paddingTop: android ? top + 10 : top }}
      className="flex-row justify-between px-5 bg-indigo-400 pb-6 rounded-b-3xl shadow"
    >
      <View>
        <Text style={{ fontSize: hp(3) }} className="font-mediun text-white">
          Chats
        </Text>
      </View>
      <View>
        <Menu>
          <MenuTrigger
            customeStyles={{
              triggerWrapper: {
                //trigger wrapper style
              },
            }}
          >
            <Image
              style={{ height: hp(4.3), aspectRatio: 1, borderRadius: 100 }}
              source={user?.profileUrl}
              placeholder={blurhash}
              transition={500}
            />
          </MenuTrigger>
          <MenuOptions
            customeStyles={{
              optionContainer: {
                borderRadius: 80,
                borderCurve: "continuous",
                marginTop: 40,
                marginLeft: -30,
                backgroudColor: "white",
                shadowOpacity: 0.2,
                shadowOffset: { width: 0, height: 0 },
                width: 160,
              },
            }}
          >
            <MenuItem
              text="profile"
              action={handleProfile}
              value={null}
              icon={<Feather name="user" size={hp(2.5)} color="#737373" />}
            />
            <Divider />
            <MenuItem
              text="Sign Out"
              action={handleLogOut}
              value={null}
              icon={<AntDesign name="logout" size={hp(2.5)} color="#737373" />}
            />
          </MenuOptions>
        </Menu>
      </View>
    </View>
  );
};

const Divider = () => {
  return <View className="my-1 h-[1px] w-full bg-neutral-200" />;
};

export default Header;
