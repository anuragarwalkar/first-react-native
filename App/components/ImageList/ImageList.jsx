import React, { useRef } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import ImageInput from '../ImageInput/ImageInput';

const ImageList = ({imageUris = [], onDeleteImage, onSelectImage}) => {
    const scrollToView = useRef();

    return <View style={styles.container}>
        <ScrollView ref={scrollToView} onContentSizeChange={() => scrollToView.current.scrollToEnd()} horizontal>
            {imageUris.map(item => <ImageInput key={item} onDeleteImage={onDeleteImage} imageUri={item} />)}
            <ImageInput onSelectImage={onSelectImage} />
        </ScrollView>
    </View> ;
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row"
    }
})

export default ImageList;