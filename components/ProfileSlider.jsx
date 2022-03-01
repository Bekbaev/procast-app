import * as React from 'react';
import {
    Text,
    View,
    SafeAreaView, Image
} from 'react-native';

import Carousel from 'react-native-snap-carousel';
import {useState} from "react";


const ProfileSlider = ({photos}) => {

    photos = photos.filter(Boolean)

    const [state, setState] = useState({
        activeIndex:0,
        carouselItems: photos
    })

    return (
        <>
            <Text style={{ marginBottom: 20, fontWeight: 'bold',  width: '100%', marginTop: 20}}>Фотографии пользователя: </Text>
            <SafeAreaView style={{flex: 1, backgroundColor:'#f4511e' }}>
                <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
                    <Carousel
                        layout={"default"}
                        // ref={ref => this.carousel = ref}
                        data={state.carouselItems}
                        sliderWidth={300}
                        itemWidth={300}
                        renderItem={renderItem}
                        // onSnapToItem = { index => this.setState({activeIndex:index}) }
                    />
                </View>
            </SafeAreaView>
        </>
    );
}

const renderItem = ({item,index}) => {

    return (
            <Image
                style={{
                    backgroundColor:'floralwhite',
                    borderRadius: 5,
                    height: 200,
                }}
                source={{
                    uri: 'http://food-j.kz/uploads/' + item,
                }}
            />
    )
}

export default ProfileSlider;
