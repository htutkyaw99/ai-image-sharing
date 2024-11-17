import { View, Text, Image, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient';

const index = () => {
  return (
    <SafeAreaView className='flex-1'>
      <Image 
          source={require('@/assets/images/welcome.png')}
          className='w-screen h-screen absolute z-0 bg-transparent'
      />
      <LinearGradient
          colors={['rgba(85, 124, 147, 0.1)', 'rgba(0, 0, 0, 1)']}
          className='w-screen h-screen absolute justify-end flex-1 z-10'
      >
        <View className='m-3'>
          <Text className='text-white text-center 
            mb-3 text-5xl font-bold'>
            Generate{'\n'}
            anything what's in{'\n'}
            your mind now
          </Text>
          <Text className='text-center text-white/50 mb-5'>
            An Ai which is developed to help you 
            generate what's in your mind into stunning visual.
          </Text>
          <TouchableOpacity
            activeOpacity={0.8}
            className='bg-[#C0E205] hover:bg-[#C0E205]
            font-bold p-5 rounded-full'  
            onPress={() => {}}
          >
            <Text className='text-center font-semibold'>
              Let's go!
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </SafeAreaView>
  )
}

export default index