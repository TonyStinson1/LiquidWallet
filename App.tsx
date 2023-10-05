/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useRef, useMemo, useCallback } from 'react'
import {
    Image,
    ImageBackground,
    Pressable,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet'
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import CustomFooter from './src/components/CustomFooter'

import Stacknavigation from './src/navigation/StackNavigation'

function App(): JSX.Element {
    const bottomSheetModalRef = useRef<BottomSheetModal>(null)

    // variables
    const snapPoints = useMemo(() => [1, '70%'], [])

    // callbacks
    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present()
    }, [])
    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index)
    }, [])

    useEffect(() => {
        SplashScreen.hide()
    }, [])

    return (
        <SafeAreaProvider>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <BottomSheetModalProvider>
                    <StatusBar backgroundColor={'#10193a'} />
                    <SafeAreaView style={{ flex: 1 }}>
                        <Stacknavigation />
                    </SafeAreaView>
                </BottomSheetModalProvider>
            </GestureHandlerRootView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    btn: {
        width: 250,
        height: 30,
        backgroundColor: '#1E2A59',
        borderWidth: 1,
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
    },
})

export default App
