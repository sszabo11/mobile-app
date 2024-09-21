import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, useWindowDimensions, Pressable, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import Button from "./components/Button";
import ImageViewer from "./components/ImagePicker";
import * as ImagePicker from 'expo-image-picker';
import { useRef, useState } from "react";
import MapView from 'react-native-maps';
import Marker from "react-native-maps";
import { Camera, CameraCapturedPicture, CameraPictureOptions, CameraType, CameraView, useCameraPermissions } from 'expo-camera';
export default function App() {
  const { height, width } = useWindowDimensions()
  const [selectedImage, setSelectedImage] = useState("");

  console.log(width);
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [camera, setCamera] = useState(false);
  const cameraRef = useRef<CameraView>(null);
  const [photo, setPhoto] = useState<CameraCapturedPicture | null>(null);
  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={() => requestPermission()} label='Get permission' />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }


  async function takePicture() {
    if (cameraRef.current) {

      const photo = await cameraRef.current.takePictureAsync();

      if (photo) {
        setPhoto(photo);
        alert(`photo captured with dimensions: ${photo!.width} x ${photo!.height}: ${photo?.uri}`)
        setCamera(false);
      }
    }
  }
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      console.log("babana:", result.assets[0].uri);
      setSelectedImage(result.assets[0].uri);
    } else {
      alert('You did not select any image.');
    }
  };

  return (
    <View style={styles.container} >
      <Button onPress={() => setCamera(!camera)} label='Camera mode' />
      {camera ? (<CameraView ref={cameraRef} style={styles.camera} facing={facing}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={takePicture}>
            <Text style={styles.text}>Take picture</Text>
          </TouchableOpacity>
        </View>
      </CameraView>) : (
        <View>
          {photo ? (




            //            <Image
            //              source={photo.uri} style={{ width: photo.width, height: photo.height }} />
            <Text>Meow</Text>
          ) : (<Text>Noo photo</Text>)}
          <Text>Hwelhet up App.tsx to start working on your app!</Text>
          <Button label="Choose a photo" onPress={pickImageAsync} />


          <ImageViewer
            placeholderImageSource={
              "https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg"}
            selectedImage={selectedImage} />
          <Text>Hwelhet up App.tsx to start working on your app!</Text>
          <MapView style={styles.map} />
          <Marker ></Marker>

        </View>
      )
      }

    </View >
  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    width: "100%",
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: "100%",
    height: "70%"
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
    width: "100%",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});

