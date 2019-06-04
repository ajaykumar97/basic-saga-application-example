import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Button,
    ActivityIndicator,
    Text
} from 'react-native';
import { connect } from 'react-redux';
import { onRequestDog } from '../actions';

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    getDogs = () => this.props.onRequestDog()

    renderImageView() {
        const { fetchingDog, dogImage, error } = this.props;

        if (fetchingDog) {
            return (<ActivityIndicator />);
        } else if (dogImage) {
            return (
                <Image
                    source={{ uri: dogImage }}
                    style={styles.image}
                />
            );
        } else if (error) {
            return (
                <Text style={styles.error}>{error}</Text>
            );
        }
        return null;
    }
    render() {
        return (
            <View style={styles.container}>
                <Button
                    title={'Get Rendom Labrador Image'}
                    onPress={this.getDogs}
                    disabled={this.props.fetchingDog}
                />
                <View style={styles.imageContainer}>
                    {this.renderImageView()}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#F5FCFF'
    },
    imageContainer: {
        alignItems: 'center'
    },
    image: {
        height: 300,
        width: 300,
        backgroundColor: 'grey'
    },
    error: {
        flex: 1,
        color: 'red',
        fontSize: 16
    }
});

const mapStateToProps = ({ dogs }) => {
    const {
        dogImage,
        fetchingDog,
        error
    } = dogs;
    return {
        fetchingDog,
        dogImage,
        error
    };
};

export default connect(mapStateToProps, { onRequestDog })(HomeScreen);
