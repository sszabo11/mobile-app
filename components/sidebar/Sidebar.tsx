import { ScrollView, StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { systemBlue, systemHeading } from "../../utils/variables";
import { Feather } from "@expo/vector-icons";
//import { SearchBar } from "react-native-elements";
import { useEffect, useState } from "react";
import SearchBar from "react-native-elements/dist/searchbar/SearchBar-ios";
import { Icon } from "react-native-elements";
import Item from "./Item";
import SidebarSVG from "../../assets/SidebarSVG";
import { InspectionsData } from "../../utils/types";
//import More from '../../assets/more.svg';

export default function Sidebar() {
  const [search, setSearch] = useState("");
  const [inspections, setInspections] = useState<InspectionsData[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<null | number>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchInspections() {
      try {
        const res = await fetch(
          "https://dsdrt4dtjg7n4ifr5yxqi6rfei0xepyc.lambda-url.us-east-1.on.aws/inspections/get",
        );

        if (!res.ok) {
          throw new Error(`Failed to fetch inspections!`);
        }

        const data = await res.json();

        setInspections(data.results);
        setError(null);
        setLoading(false);
      } catch (error) {
        setError(`${error}`);
      }
    }

    fetchInspections();
  }, []);
  //let inspections = [
  //  {
  //    address: "37 Tramway Parade",
  //    suburb: "Beaumaris",
  //    postcode: 3193,
  //    client: "David Smith",
  //    id: 1,
  //  },
  //  {
  //    address: "21 Jolly Street",
  //    suburb: "Vale South",
  //    postcode: 3044,
  //    client: "John Doe",
  //    id: 2,
  //  },
  //  {
  //    address: "73 Koal Court",
  //    suburb: "Berwick",
  //    postcode: 3978,
  //    client: "Mark Lop",
  //    id: 3,
  //  },
  //  {
  //    address: "212 Hall Street",
  //    suburb: "Clyde North",
  //    postcode: 3806,
  //    client: "Jane Doe",
  //    id: 4,
  //  },
  //];

  /* <Ionicons name="ellipsis-horizontal-circle-outline" size={32} color={systemBlue} /> */

  function handleText(v: string) {
    setSearch(v);
  }
  return (
    <View style={styles.sidebar}>
      <View style={styles.container}>
        <View style={styles.head}>
          <SidebarSVG />
          <Ionicons name="add-circle-sharp" size={32} color={systemBlue} />
        </View>

        <View style={styles.search}>
          <SearchBar
            value={search}
            placeholder="Search..."
            clearIcon={{ name: "close-circle-outline", color: "#C7C7C7" }}
            searchIcon={{ name: "search-outline", color: "#C7C7C7" }}
            platform="ios"
            onChangeText={handleText}
          />
        </View>

        <ScrollView style={styles.scroll}>
          <Text style={[systemHeading, { marginBottom: 30, paddingLeft: 10 }]}>
            Inspections
          </Text>
          {loading && <Text>Loading...</Text>}
          {error && <Text style={styles.error}>{error}</Text>}
          {inspections.map((i) => {
            return (
              <View style={styles.inspection} key={i.id}>
                <Item
                  address={i.address}
                  suburb={i.suburb}
                  postcode={i.postcode}
                  client={i.client}
                  selected={selectedId === i.id}
                  onPress={() => setSelectedId(i.id)}
                  id={i.id}
                />
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sidebar: {
    //width: "28%",
    width: "100%",
    height: "100%",
    backgroundColor: "#FCFCFC",
    //backgroundColor: "black",
    borderRightWidth: 0.5,
    borderRightColor: "#D7D7D7",
  },

  container: {
    padding: 15,
    width: "100%",
    height: "100%",
  },

  scroll: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 50,
    marginTop: 70,
  },

  inspection: {
    width: "100%",
    height: 100,
  },

  head: {
    width: "100%",
    height: 40,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  search: {
    width: "100%",
    height: 20,
    padding: 0,
    marginTop: 20,
    position: "absolute",
    top: 70,
    left: 20,
    //borderColor: "black",
    //borderWidth: 1,
  },
  error: {
    color: "red", // Style the error message
    marginBottom: 20,
  },
});
