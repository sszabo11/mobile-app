import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { InspectionsData } from "../../utils/types";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import PrimaryButton from "../../components/buttons/PrimaryButton";

export default function Page() {
  const { id } = useLocalSearchParams();
  const [mapLat, setMapLat] = useState(-37.989665);
  const [mapLong, setMapLong] = useState(145.044422);
  const [error, setError] = useState<string | null>(null);
  const [inspection, setInspection] = useState<InspectionsData | undefined>(
    undefined,
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchInspection() {
      try {
        const res = await fetch(
          `https://dsdrt4dtjg7n4ifr5yxqi6rfei0xepyc.lambda-url.us-east-1.on.aws/inspections/get/${id}`,
        );

        if (!res.ok) {
          throw Error("Failed to get inspection");
        }
        const data = await res.json();

        setError(null);
        setLoading(false);
        setInspection(data.results[0]);
      } catch (error) {
        setError(`${error}`);
      }
    }

    fetchInspection();
  }, []);
  const locationData = [
    { latitude: -37.989665, longitude: 145.044422 },
    { latitude: -37.989665, longitude: 145.044422 },
  ];
  //        <MapView
  //          style={styles.map}
  //          initialRegion={{
  //            latitude: mapLat,
  //            longitude: mapLong,
  //            latitudeDelta: 0.0922,
  //            longitudeDelta: 0.0421,
  //          }}
  //        >
  //          <Marker
  //            coordinate={{
  //              latitude: -37.989665,
  //              longitude: 145.044422,
  //            }}
  //          ></Marker>
  //        </MapView>
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        {loading && <Text>Loading...</Text>}
        {error && <Text>{error}</Text>}
        {inspection && (
          <View>
            <View style={styles.section}>
              <Text style={styles.heading}>{inspection.address}</Text>
              <Text
                style={styles.paragraph}
              >{`${inspection.suburb}, Victoria ${inspection.postcode}`}</Text>

              <View style={styles.flex}>
                <Ionicons name="person-outline" size={16} color="grey" />
                <Text style={[styles.paragraph, { color: "grey" }]}>
                  {inspection.client}
                </Text>
              </View>
            </View>
            <View style={styles.line}></View>
            <View style={[styles.section, styles.sectionFlex]}>
              <View>
                <Text style={styles.subHeading}>Active drafts</Text>
                <Text style={styles.paragraph}>House inspection</Text>
              </View>
              <View style={styles.buttons}>
                <PrimaryButton
                  label="Edit"
                  icon={
                    <Ionicons name="create-outline" size={24} color="white" />
                  }
                />
                <PrimaryButton
                  label="Create new"
                  icon={<Ionicons name="add-outline" size={24} color="white" />}
                />
                <View style={styles.expand}>
                  <Ionicons
                    name="chevron-forward-outline"
                    size={24}
                    color="grey"
                  />
                </View>
              </View>
            </View>

            <View style={styles.line}></View>
            <View style={styles.section}>
              <View>
                <Text style={styles.subHeading}>Submitted reports</Text>
                <Text style={styles.paragraph}>House inspection</Text>
              </View>
              <View style={styles.expand}>
                <Ionicons
                  name="chevron-forward-outline"
                  size={24}
                  color="grey"
                />
              </View>
            </View>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
  },
  item: {
    flex: 1,
    borderRightColor: "#ebebeb",
    borderWidth: 0.5,
    display: "flex",
    flexDirection: "column",
    //width: "50%",
    height: "100%",
  },
  map: {
    width: "100%",
    height: "50%",
  },
  wrapper: {
    width: "100%",
    height: "100%",
    padding: 20,
  },
  heading: {
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    marginTop: 15,
    marginBottom: 15,
  },
  subHeading: {
    fontSize: 24,
    fontWeight: "bold",
  },
  flex: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
  line: {
    width: "100%",
    height: 1,
    backgroundColor: "#C2C2C2",
    borderRadius: 10,
  },
  section: {
    padding: 20,
    width: "100%",
    position: "relative",
    marginBottom: 40,
  },
  sectionFlex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttons: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
  expand: {
    alignSelf: "flex-end",
    //position: "absolute",
    //right: 15,
    //bottom: 0,
  },
});
