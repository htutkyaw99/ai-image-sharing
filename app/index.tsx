import { View, ImageBackground, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient';
import CustomButton from '@/components/CustomButton';

const index = () => {
  return (
    <View className='flex-1'>
      <ImageBackground 
        source={require('@/assets/images/welcome.png')}
        resizeMode='cover'
        className='flex-1'
      />
      <LinearGradient
        colors={['rgba(85, 124, 147, 0.1)', 'rgba(0, 0, 0, 1)']}
        className='w-full h-full absolute flex-1'
      >
        <SafeAreaView className='flex-1 justify-end'>
          <View className='gap-1 mb-3 '>
            <Text className='text-5xl text-white font-bold text-center'>
              Ben Ben
            </Text>
            <Text className='text-3xl text-white font-bold text-center'>
              Your Ai Assistant
            </Text>
            <Text className='text-lg text-white/65 font-bold text-center'>
              Transform your ideas into visual masterpieces
            </Text>
            <CustomButton/>
          </View>
        </SafeAreaView>
      </LinearGradient>
    </View>
  )
}

export default index