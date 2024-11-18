import { View, Image } from 'react-native'

const ImageCard = ({url}) => {
  return (
    <View className="w-1/2 h-[300px]">
        <Image
        source={item.url}
        className="w-full h-full" 
        style={{ resizeMode: 'cover' }}
        />
  </View>
  )
}

export default ImageCard