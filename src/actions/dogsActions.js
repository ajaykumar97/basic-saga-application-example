import { GET_ALL_DOGS_REQUEST } from './Types';

export const onRequestDog = () => ({
    type: GET_ALL_DOGS_REQUEST,
    params: {
        dogBreedName: 'labrador'
    }
});
