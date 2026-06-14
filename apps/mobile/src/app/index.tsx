import { useQuery } from "@tanstack/react-query";
import { HealthCheckResponse } from "@food-delivery/types";
import { api } from "../lib/axios";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  const {
    data: health,
    error,
    isLoading,
  } = useQuery<HealthCheckResponse>({
    queryKey: ["health"],
    queryFn: () =>
      api.get<HealthCheckResponse>("/health").then((res) => res.data),
  });

  return (
    <View style={styles.container}>
      <Text>Food Delivery</Text>
      <Text>Connection Text</Text>
      {isLoading && <ActivityIndicator size="large" color="#ff6b35" />}

      {health && (
        <View>
          <Text>Api Status:{health.status}</Text>
          <Text>{new Date(health.timestamp).toLocaleTimeString()}</Text>
        </View>
      )}
      {error && (
        <View>
          <Text>Cannot reach the api</Text>
        </View>
      )}
    </View>
  );
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#fff",
    padding:24
  }

})
