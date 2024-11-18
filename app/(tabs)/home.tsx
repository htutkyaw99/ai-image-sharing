import { images } from '@/constants/images'
import { View, Text, Image, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import AntDesign from '@expo/vector-icons/AntDesign';

const home = () => {

  return (
    <View className='bg-black flex-1'>
      <SafeAreaView className='m-3'>
          <View className='flex-row justify-between items-center mb-7 mt-2'>
            <Text className='text-3xl text-white font-bold'>Inspirations</Text>
            <Text className=''>
              <AntDesign name="pluscircle" size={28} color="white" />
            </Text>
          </View>
          <FlatList
            data={images}
            renderItem={({ item }) => 
              <Image 
                source={item.url}
                className='w-1/2 h-[300px] m-1 rounded-lg'
                resizeMode='cover'
              />
            }
            numColumns={2}
          />
      </SafeAreaView>
    </View>
  )
}

export default home