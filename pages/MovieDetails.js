import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native';
import { api_key } from '../utilities/apikey';

const MovieDetails = () => {
    const route = useRoute();
    const { movieId } = route.params;

    const [movieDetails, setMovieDetails] = useState([]);
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}`);
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        console.log(`error : ${error}`);
      }
      finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, []);

  return (
    <>
    <View style={styles.container}>
        {loading?(<View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </View>):
      <View>
         <Text style={styles.title}>{movieDetails.title}</Text>
         <Text style={styles.overview}>{movieDetails.overview}</Text>
          </View>}
     
    </View>
    </>
  )
}

export default MovieDetails

const styles = StyleSheet.create({})