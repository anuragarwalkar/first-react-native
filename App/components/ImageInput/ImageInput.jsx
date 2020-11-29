import React, {useEffect } from 'react';
import { Alert, Image, StyleSheet } from 'react-native';
import colors from '../../config/colors';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';


const ImageInput = ({imageUri, onSelectImage, onDeleteImage}) => {

  const requestCameraPermission = async () => {
    const result = await ImagePicker.requestCameraPermissionsAsync();
    if (!result.granted) {
      alert('You need to enable permission to access the library')
    }
  };

  useEffect(() => {
    requestCameraPermission();
  },[]);

  onPress = () => {
      if (!imageUri) {
        selectImage();
      } else {
          Alert.alert('Delete', 'Are you sure you want to delete this image?', [
              { text: 'Yes', onPress: () => onDeleteImage(imageUri)},
              { text: 'No'}
          ])
      }
  }

  const selectImage = async () => {
    try {
      const result =  await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          quality: 0.5
      });
      if (!result.cancelled) {
        onSelectImage(result.uri);
      }
    } catch (error) {
      console.error('error reding while image:', error)
    }
  }

    return <TouchableWithoutFeedback onPress={onPress} style={styles.container}>
    {!imageUri && <MaterialCommunityIcons name="camera" color={colors.dark} size={50}/>}
    {imageUri && <Image style={styles.image} source={{uri: imageUri}} />}      
    </TouchableWithoutFeedback>
}


const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 100,
        backgroundColor: colors.light,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        marginRight: 10
    },
    image: {
        width: 100,
        height: 100
    }
})


export default ImageInput;