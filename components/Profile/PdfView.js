// External imports
import Pdf from 'react-native-pdf';
import React from 'react';
import { View } from 'react-native';


// Internal imports
import styles from './Styles'



const PdfView = () => {

    return (
        <View style={{flex: 1}}> 
            <Pdf 
                style={{flex: 1}}
                source={{uri: 'https://www.batavierenrace.nl/content/bestanden/en-deelnemersboekje-inhoud_1.pdf',cache:true}}
                
            />
        </View>
    );
};




export default PdfView;