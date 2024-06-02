import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList, ScrollView, Image, TextInput, SafeAreaView } from "react-native";

export default function App() {
  const categories = [
    {
      key: "Exercise",
      image: require("./assets/pic.jpg"),
    },
    { key: "Study", image: require("./assets/pic2.jpg") },
    { key: "Shop" , image: require("./assets/shopping.png")},
    { key: "Gym" , image: require("./assets/gym.jpeg")},
    { key: "Go to market", image: require("./assets/market.jpeg") },
    { key: "Do laundry", image: require("./assets/laundry.png") },
    { key: "Read Bible", image: require("./assets/bible.png") },
    { key: "Sleep", image: require("./assets/sleep.png") },
  ];

  const categoriess = [
    { key: "Mobile App Development" },
    { key: "Web Development" },
    { key: "Push ups" },
    { key: "Learning" },
    { key: "Gardening" },
    { key: "Office" },
    { key: "Shows" },
    { key: "Vacation" },
    { key: "Hungout" },
    { key: "Family-time" },
    { key: "Self-reflection" },
    { key: "Heavy studying" },
    { key: "Assignments" },
    { key: "Research" },
    { key: "Vlogs" },
  ];


  return (
    
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <View style={styles.container1}>
            <Text style={styles.text1}>Hello , Devs</Text>
            <Text style={styles.text2}>14 Tasks today</Text>
            <View style={styles.round}>
              <Image
                style={styles.image1}
                source={require("./assets/pic3.jpg")}
              />
            </View>
          </View>
          <View style={styles.container2}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "white",
                borderWidth: 1,
                borderColor: "white",
                padding: 5,
                width: "70%",
                height: "100%",
                borderRadius: 10,
              }}
            >
              <Image
                source={require("./assets/pic 4.jpg")}
                style={{
                  width: 30,
                  height: 30,
                  marginRight: 10,
                  marginLeft: 5,
                }}
              />
              <TextInput
                placeholder="Search"
                style={{ flex: 1, height: "80%" }}
              />
            </View>
            <View style={styles.rectangle2}>
              <Image
                style={styles.image}
                source={require("./assets/Vector.png")}
              />
            </View>
          </View>
          <Text style={styles.textt}>Categories</Text>
          <FlatList
            data={categories}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={styles.category}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "normal",
                    textAlign: "left",
                    marginBottom: 5,
                    marginLeft: 20,
                  }}
                >
                  {item.key}
                </Text>
                <Text style={styles.additionalText}>12 Tasks</Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "white",
                    borderWidth: 1,
                    borderColor: "white",
                    padding: 5,
                    width: "80%",
                    height: "60%",
                    borderRadius: 10,
                    marginLeft: 20,
                  }}
                >
                  <Image source={item.image} style={styles.categoryImage} />
                </View>
              </View>
            )}
          />
          <Text style={styles.texttt}>Ongoing Task</Text>
          <FlatList
            data={categoriess}
            vertical={true}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={styles.categoryy}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "normal",
                    textAlign: "left",
                    marginBottom: 50,
                    marginLeft: 20,
                  }}
                >
                  {item.key}
                </Text>
              </View>
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F7F0E8",
  },
  container: {
    flex: 1,
    backgroundColor: "#F7F0E8",
    alignItems: "center",
    justifyContent: "center",
  },
  container1: {
    flexDirection: "row",
    width: "92%",
    paddingHorizontal: 2,
    marginTop: 100,
    marginBottom: 30,
    alignItems: "center",
    justifyContent: "space-between",
  },
  text1: {
    fontSize: 40,
    fontWeight: "normal",
    textAlign: "left",
    marginBottom: 20,
  },
  text2: {
    fontSize: 12,
    fontWeight: "normal",
    textAlign: "left",
    marginTop: 40,
    marginLeft: -335,
  },
  round: {
    backgroundColor: "white",
    width: 70,
    height: 70,
    borderRadius: 40,
    marginLeft: 100,
  },
  container2: {
    flexDirection: "row",
    width: "92%",
    paddingHorizontal: 2,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
  rectangle1: {
    backgroundColor: "white",
    width: 280,
    height: 70,
    borderRadius: 20,
    marginLeft: "",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  rectangle2: {
    backgroundColor: "#DC4D01",
    width: 70,
    height: 70,
    borderRadius: 25,
    marginRight: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  textt: {
    fontSize: 30,
    marginTop: 40,
    marginBottom: 20,
    marginLeft: -225,
  },
  category: {
    backgroundColor: "white",
    width: 220,
    height: 250,
    marginBottom: "",
    justifyContent: "center",
    alignItems: "left",
    marginLeft: 20,
    borderRadius: 20,
  },
  texttt: {
    fontSize: 30,
    marginTop: 40,
    marginBottom: "",
    marginLeft: -190,
  },
  categoryy: {
    backgroundColor: "white",
    width: 390,
    height: 180,
    justifyContent: "center",
    alignItems: "left",
    marginTop: 20,
    borderRadius: 20,
    marginBottom: 20,
  },
  image1: {
    width: "100%",
    height: "100%",
  },
  image2: {
    width: 20,
    height: 20,
    color: "black",
  },
  textttt: {
    fontSize: 20,
    fontColor: "black",
    marginRight: 150,
  },
  image3: {
    width: "70%",
    height: "70%",
  },
  additionalText: {
    fontSize: 15,
    fontWeight: "normal",
    textAlign: "left",
    marginBottom: 2,
    marginLeft: 20,
  },
});
