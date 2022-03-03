import * as React from 'react';
import {
    Text,
    View,
    SafeAreaView, Image
} from 'react-native';

import Carousel, {Pagination} from 'react-native-snap-carousel';
import {useState} from "react";


const ProfileSlider = ({photos}) => {

    photos = photos.filter(Boolean)

    const [state, setState] = useState({
        activeIndex:0,
        carouselItems: photos
    })

    const [index, setIndex] = useState(0)

    return (
        <>
            <Text style={{ marginBottom: 20, fontWeight: 'bold',  width: '100%', marginTop: 20}}>Фотографии пользователя: </Text>
            <SafeAreaView style={{flex: 1, }}>
                <View >
                    <Carousel
                        layout={"default"}
                        // ref={ref => this.carousel = ref}
                        data={state.carouselItems}
                        sliderWidth={300}
                        itemWidth={300}
                        renderItem={renderItem}
                        onSnapToItem = { index => setIndex(index) }
                    />
                    <Pagination
                        dotsLength={3}
                        activeDotIndex={index}
                        // carouselRef={isCarousel}
                        dotStyle={{
                            width: 10,
                            height: 10,
                            borderRadius: 5,
                            marginHorizontal: 8,
                            backgroundColor: '#F4BB41',
                        }}
                        tappableDots={true}
                        inactiveDotStyle={{
                            backgroundColor: 'black',
                            // Define styles for inactive dots here
                        }}
                        inactiveDotOpacity={0.4}
                        inactiveDotScale={0.6}
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
