import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function FeedScreen() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.header}>SOS Maringá</Text>
        <Text style={styles.text}>Emergências e serviços úteis!</Text>

        <Text style={styles.header}>Emergências</Text>
        <Text style={styles.header}>Serviços por categoria</Text>
        <Text style={styles.header}>Serviços úteis</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fefffe",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    backgroundColor: "#fcfcfd",
  },
  text: {
    fontSize: 14,
    marginTop: 4,
  },
});
