import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ViewBase } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style = {styles.acima}>
        <Text style={styles.texto}>DUDA</Text>
        <StatusBar style="auto" />
      </View>
      <View style = {styles.abaixo}>
        <Text style={styles.texto}>LINDA</Text>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7B7B7B",
    alignItems: "center",
    justifyContent: "space-around",
    
  },

  acima:{
    backgroundColor: '#FF009E',
    flex: 0.2,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  abaixo:{
    backgroundColor: '#FFA6DD',
    flex: 0.2,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  texto:{
    color: 'white'
  },

});
