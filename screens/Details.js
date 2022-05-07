import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  StatusBar,
} from "react-native";

import {
  DetailsBid,
  FocusedStatusBar,
  RectButton,
  CircleButton,
} from "../components";
import { assets, SHADOWS, SIZES } from "../constants";

const DetailsHeader = ({ data, navigation }) => {
  return (
    <View style={{ width: "100%", height: 373 }}>
      <Image
        source={data.image}
        style={{ width: "100%", height: "100%" }}
        resizeMode="cover"
      />

      <CircleButton
        imgUrl={assets.left}
        handlePress={() => navigation.goBack()}
      />
    </View>
  );
};

export default function Details({ route, navigation }) {
  const { data } = route.params;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />

      <View
        style={{
          position: "absolute",
          bottom: 0,
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          paddingVertical: SIZES.font,
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          zIndex: 1,
        }}
      >
        <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
      </View>

      <FlatList
        data={data.bids}
        renderItem={({ item }) => <DetailsBid bid={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
        ListHeaderComponent={() => (
          <>
            <DetailsHeader data={data} navigation={navigation} />
          </>
        )}
      />
    </SafeAreaView>
  );
}
