import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
      <Text style={styles.Text1 }>Hello, Devs</Text>
      <Text style={styles.Text2}>14 tasks today</Text>
      <View style={styles.circle}></View>
        </View>
      <StatusBar style="auto" />
      <View style={styles.View2}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F0E8',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
Text1: {
  fontSize: "40px",
  marginBottom: 50,
},
view1: { 
    flexDirection: "row",
    height: "10%",
    width: "95%",
    backgroundColor: "lightblue",
    paddingHorizontal: 2,
    marginBottom: 700,
    alignItems: "center",
    justifyContent: "space-between",
},
circle: {
  backgroundColor: "white",
    width: 73,
    height: 75,
    opacity: 0.4,
    borderRadius: 40,
    marginLeft: 100,
},
Text2: {
  fontsize: 12,
 fontWeight: "normal",
 textAlign: "left",
 marginTop: 50,
 marginLeft: -310,
},
View2: {
  backgroundColor:"pink",
},

}
);
