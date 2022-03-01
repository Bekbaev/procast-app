import * as React from 'react';
import {
    Text,
    View,
    SafeAreaView } from 'react-native';

import Carousel from 'react-native-snap-carousel';

export default class ProfileSlider extends React.Component {


    constructor(props){
        super(props);
        this.state = {
            activeIndex:0,
            carouselItems: [
                {
                    title:"фото 1",
                    text: "фото 1",
                },
                {
                    title:"фото 2",
                    text: "фото 2",
                },
                {
                    title:"фото 3",
                    text: "фото 3",
                }
            ]
        }
    }

    _renderItem({item,index}){
        return (
            <View style={{
                backgroundColor:'floralwhite',
                borderRadius: 5,
                height: 200, }}>
                <Text style={{fontSize: 30}}>{item.title}</Text>
                <Text>{item.text}</Text>
            </View>

        )
    }

    render() {
        return (
            <>
            <Text style={{ marginBottom: 20, fontWeight: 'bold',  width: '100%', marginTop: 20}}>Фотографии пользователя: </Text>
            <SafeAreaView style={{flex: 1, backgroundColor:'#f4511e' }}>
                <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
                    <Carousel
                        layout={"default"}
                        ref={ref => this.carousel = ref}
                        data={this.state.carouselItems}
                        sliderWidth={300}
                        itemWidth={300}
                        renderItem={this._renderItem}
                        onSnapToItem = { index => this.setState({activeIndex:index}) } />
                </View>
            </SafeAreaView>
            </>
        );
    }
}

