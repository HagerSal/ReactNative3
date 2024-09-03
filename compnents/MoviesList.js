import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import routes from '../utilities/routes';
import { useNavigation } from '@react-navigation/native';


const MoviesList = ({url , searchWord}) => {
    const [movies, setMovies] = useState([])
    const navigation = useNavigation();

    useEffect(() => {
      const fetchMovies = async () => {
        try {
          const response = await fetch(url)
          const data = await response.json()
          // console.log(data.results)
          setMovies(data.results)
          return data.results;
        }
        catch (error) {
          console.log(`error : ${error}`)
        }
      }
  
      fetchMovies()
    }, [])

    const filteredMovies = searchWord? movies.filter(movie=>
      movie.title.toLowerCase().includes(searchWord.toLowerCase())
    ) : movies
  
    return (
      <>
        <FlatList
          data={filteredMovies}
          renderItem={({ item }) =>
  
            <TouchableOpacity style={styles.card}
            onPress={() => navigation.navigate(routes.movieDetails, { movieId: item.id })}
            >
  
              <Image source={{ uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}` }} style={styles.cardImg} />
              <Text style={styles.cardText}>{item.title}</Text>

<View style={{flexDirection:"row" , alignItems:'center', width:'100%' , justifyContent:'space-between'}}>
              <Text style={styles.cardText}>{item.original_language}</Text>

              <View style={{flexDirection:"row" , alignItems:'center'}}>
              <Ionicons name="star" size={24} color="gold" />
              <Text style={styles.rating}>{item.vote_average}</Text>
              </View>

</View>
            </TouchableOpacity>
  
          }
          keyExtractor={item => item.id}
        >
  
        </FlatList>
      </>
    )
}

const styles = StyleSheet.create({
    card:{
      marginHorizontal:'auto',
      marginVertical:15,
      textAlign:'center',
      width:300,
      backgroundColor:"grey",
      // alignItems:"center",
      // paddingVertical:15,
      borderRadius:10,
    },
    cardImg:{
      width: '100%', 
      height: 250,
      borderRadius:10
    },
    cardText: {
      color:"white",
      fontSize:18,
      marginVertical:5
    },
    rating : {
      color:"white",
      fontSize:18,
      marginHorizontal:5
    }
  })

export default MoviesList