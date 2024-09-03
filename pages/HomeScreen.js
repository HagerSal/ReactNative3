
import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import { api_key } from "../utilities/apikey";
import MoviesList from "../components/MoviesList";

const HomeScreen = () => {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`;

  const [searchValue, setSearchValue] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Movie Finder</Text>
      <TextInput
        placeholder="Search for movies..."
        style={styles.search}
        placeholderTextColor={"#D3D3D3"}
        selectionColor={"#FF69B4"}
        onChangeText={(text) => setSearchValue(text)}
        value={searchValue}
      />
      <MoviesList url={url} searchWord={searchValue} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1C", 
    padding: 20,
  },
  title: {
    fontSize: 28,
    color: "#FF6347", 
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "bold",
  },
  search: {
    height: 50,
    width: "100%",
    borderRadius: 10,
    backgroundColor: "#2F4F4F", 
    paddingHorizontal: 15,
    fontSize: 18,
    color: "white",
    marginBottom: 20,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});

export default HomeScreen;