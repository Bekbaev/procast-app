import * as React from 'react';
import {
    Text,
    View,
    SafeAreaView, Dimensions, Image, TouchableOpacity
} from 'react-native';

import Carousel from 'react-native-snap-carousel';

const { width: viewportWidth , height: viewportHeight } = Dimensions.get('window');
const SLIDE_WIDTH = Math.round(viewportWidth / 2.6);
const ITEM_HORIZONTAL_MARGIN = 15;
const ITEM_WIDTH = SLIDE_WIDTH + ITEM_HORIZONTAL_MARGIN * 2;
const SLIDER_WIDTH = viewportWidth;


export default class FilterSwiper extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            activeIndex:0,
            carouselItems: [
                {
                    title:"Item 1",
                    text: "Фильмы",
                    icon: require('../assets/fi1.png')
                },
                {
                    title:"Item 2",
                    text: "Сериалы",
                    icon: require('../assets/fi2.png')
                },
                {
                    title:"Item 3",
                    text: "Клипы",
                    icon: require('../assets/fi3.png')
                },
                {
                    title:"Item 4",
                    text: "Театры",
                    icon: require('../assets/fi4.png')
                }
            ]
        }
    }

    _renderItem({item,index}){
        return (
            <TouchableOpacity onPress={() => alert('321')}>
                <>
                <View style={{
                    backgroundColor:'rgba(42,42,42,0.75)',
                    borderRadius: ITEM_WIDTH / 1.6,
                    height: 80,
                    marginLeft: 5,
                    marginRight: 5,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Image style={{ width: '53%', height: 45, resizeMode: 'stretch', }} source={item.icon} />
                </View>
                <Text style={{textAlign: 'center'}}>{item.text}</Text>
                </>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <SafeAreaView style={{flex: 1 }}>
                <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
                    <Carousel
                        layout={"default"}
                        ref={ref => this.carousel = ref}
                        data={this.state.carouselItems}
                        sliderWidth={SLIDER_WIDTH / 1.12}
                        itemWidth={90}
                        loop={true}
                        contentContainerCustomStyle={{overflow: 'hidden', width: ITEM_WIDTH * (5)}}
                        inactiveSlideOpacity={1}
                        inactiveSlideScale={1}
                        activeSlideAlignment={'start'}
                        renderItem={this._renderItem}
                        lockScrollWhileSnapping={true}
                        enableSnap={true}
                        onSnapToItem = { index => this.setState({activeIndex:index}) } />
                </View>
            </SafeAreaView>
        );
    }
}

