import { Image, View } from "react-native";


export default function ImageViewer({ placeholderImageSource, selectedImage }: { placeholderImageSource: string, selectedImage: string }) {
  const imageSource = selectedImage ? selectedImage : placeholderImageSource;
  console.log("cat", imageSource);
  return <View><Image width={100} height={100} source={{ uri: imageSource }} /></View>;
}
