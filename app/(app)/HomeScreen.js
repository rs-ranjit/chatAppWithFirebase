import { View, StatusBar } from "react-native";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/authContext";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import ChatList from "../../components/ChatList";
import Loading from "../../components/Loading";
import { userRef } from "../../firebaseConfig";
import { getDocs, orderBy, query, where } from "firebase/firestore";
import Header from "../../components/HomeHeader";

const HomeScreen = () => {
  const { logout, user } = useAuth();
  const [users, setUser] = useState([]);
  useEffect(() => {
    if (user?.uid) getUsers();
  }, [user]);

  const getUsers = async () => {
    const q = query(
      userRef,
      where("userId", "!=", user?.uid),
      orderBy("userId")
    );
    const querySnapshot = await getDocs(q);
    let data = [];
    querySnapshot.forEach((doc) => {
      data.push({ ...doc.data() });
    });
    setUser(data);
  };

  return (
    <View className="bg-white flex-1">
      <StatusBar barStyle="dark-content" />
      <Header />
      {users.length > 0 ? (
        <ChatList users={users} currentUser={user} />
      ) : (
        <View className="flex items-center" style={{ top: hp(30) }}>
          <Loading size={hp(20)} />
        </View>
      )}
    </View>
  );
};

export default HomeScreen;
