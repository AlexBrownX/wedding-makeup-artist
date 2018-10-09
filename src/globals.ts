/** Global variable definitions */
'use strict';

interface Scripts {
    name: string;
    src: string;
}

export const contact = {
    emailAddress: 'jana.jurakova.makeup@gmail.com',
    facebook: 'https://www.facebook.com/jana.jurakova',
    twitter: 'https://twitter.com/JurakovaJana',
    instagram: 'https://www.instagram.com/janajurakova11mua/'
};

export const ScriptStore: Scripts[] = [
    {name: 'instagram', src: 'https://platform.instagram.com/en_US/embeds.js'}
];

export interface GalleryDefinition {
    mainImage: String;
    thumbnailImage: String;
    caption: String;
    size: String;
}

export const weddingGalleryDefinitions = [
    {
        mainImage: '1a.jpg',
        thumbnailImage: '1c.jpg',
        caption: 'Wedding Photo 2017 1',
        size: '1024x681'
    }, {
        mainImage: '2a.jpg',
        thumbnailImage: '2c.jpg',
        caption: 'Wedding Photo 2017 2',
        size: '1024x681'
    }, {
        mainImage: '3a.jpg',
        thumbnailImage: '3c.jpg',
        caption: 'Wedding Photo 2017 3',
        size: '1024x681'
    }, {
        mainImage: '4a.jpg',
        thumbnailImage: '4c.jpg',
        caption: 'Wedding Photo 2017 4',
        size: '1024x681'
    }, {
        mainImage: '5a.jpg',
        thumbnailImage: '5c.jpg',
        caption: 'Wedding Photo 2017 5',
        size: '1024x681'
    }, {
        mainImage: '6a.jpg',
        thumbnailImage: '6c.jpg',
        caption: 'Wedding Photo 2017 6',
        size: '1024x681'
    }, {
        mainImage: '7a.jpg',
        thumbnailImage: '7c.jpg',
        caption: 'Wedding Photo 2017 7',
        size: '1024x681'
    }, {
        mainImage: '8a.jpg',
        thumbnailImage: '8c.jpg',
        caption: 'Wedding Photo 2017 8',
        size: '1024x681'
    }, {
        mainImage: '43a.jpg',
        thumbnailImage: '43c.jpg',
        caption: 'Wedding Photo 2017 9',
        size: '681x1024'
    }, {
        mainImage: '44a.jpg',
        thumbnailImage: '44c.jpg',
        caption: 'Wedding Photo 2017 10',
        size: '681x1024'
    }, {
        mainImage: '45a.jpg',
        thumbnailImage: '45c.jpg',
        caption: 'Wedding Photo 2017 11',
        size: '681x1024'
    }, {
        mainImage: '46a.jpg',
        thumbnailImage: '46c.jpg',
        caption: 'Wedding Photo 2017 12',
        size: '681x1024'
    }, {
        mainImage: '47a.jpg',
        thumbnailImage: '47c.jpg',
        caption: 'Wedding Photo 2017 13',
        size: '1024x681'
    }, {
        mainImage: '48a.jpg',
        thumbnailImage: '48c.jpg',
        caption: 'Wedding Photo 2017 14',
        size: '1024x681'
    }, {
        mainImage: '49a.jpg',
        thumbnailImage: '49c.jpg',
        caption: 'Wedding Photo 2017 15',
        size: '1024x681'
    }, {
        mainImage: '50a.jpg',
        thumbnailImage: '50c.jpg',
        caption: 'Wedding Photo 2018 1',
        size: '1024x681'
    }, {
        mainImage: '51a.jpg',
        thumbnailImage: '51c.jpg',
        caption: 'Wedding Photo 2018 2',
        size: '1024x681'
    }, {
        mainImage: '52a.jpg',
        thumbnailImage: '52c.jpg',
        caption: 'Wedding Photo 2018 3',
        size: '1024x681'
    }, {
        mainImage: '53a.jpg',
        thumbnailImage: '53c.jpg',
        caption: 'Wedding Photo 2018 4',
        size: '681x1024'
    }, {
        mainImage: '54a.jpg',
        thumbnailImage: '54c.jpg',
        caption: 'Wedding Photo 2018 5',
        size: '681x1024'
    }, {
        mainImage: '55a.jpg',
        thumbnailImage: '55c.jpg',
        caption: 'Wedding Photo 2018 6',
        size: '681x1024'
    }, {
        mainImage: '56a.jpg',
        thumbnailImage: '56c.jpg',
        caption: 'Wedding Photo 2018 7',
        size: '681x1024'
    }, {
        mainImage: '57a.jpg',
        thumbnailImage: '57c.jpg',
        caption: 'Wedding Photo 2018 8',
        size: '681x1024'
    }, {
        mainImage: '58a.jpg',
        thumbnailImage: '58c.jpg',
        caption: 'Wedding Photo 2018 9',
        size: '681x1024'
    }
];

export const bridesGalleryDefinitions = [
    {
        mainImage: '9a.jpg',
        thumbnailImage: '9c.jpg',
        caption: 'Luisa Bride Photo 2017 1',
        size: '1024x683'
    }, {
        mainImage: '10a.jpg',
        thumbnailImage: '10c.jpg',
        caption: 'Luisa Bride Photo 2017 2',
        size: '1024x683'
    }, {
        mainImage: '11a.jpg',
        thumbnailImage: '11c.jpg',
        caption: 'Luisa Bride Photo 2017 3',
        size: '1024x683'
    }, {
        mainImage: '12a.jpg',
        thumbnailImage: '12c.jpg',
        caption: 'Luisa Bride Photo 2017 4',
        size: '681x1021'
    }, {
        mainImage: '13a.jpg',
        thumbnailImage: '13c.jpg',
        caption: 'Luisa Bride Photo 2017 5',
        size: '681x957'
    }, {
        mainImage: '14a.jpg',
        thumbnailImage: '14c.jpg',
        caption: 'Luisa Bride Photo 2017 6',
        size: '681x946'
    }, {
        mainImage: '15a.jpg',
        thumbnailImage: '15c.jpg',
        caption: 'Viera Bride Photo 2017 1',
        size: '681x1021'
    }, {
        mainImage: '16a.jpg',
        thumbnailImage: '16c.jpg',
        caption: 'Charlotte Bride Photo 2018 1',
        size: '681x1021'
    }, {
        mainImage: '17a.jpg',
        thumbnailImage: '17c.jpg',
        caption: 'Charlotte Bride Photo 2018 2',
        size: '681x1021'
    }, {
        mainImage: '18a.jpg',
        thumbnailImage: '18c.jpg',
        caption: 'Charlotte Bride Photo 2018 3',
        size: '681x1021'
    }, {
        mainImage: '19a.jpg',
        thumbnailImage: '19c.jpg',
        caption: 'Charlotte Bride Photo 2018 4',
        size: '681x1021'
    }, {
        mainImage: '20a.jpg',
        thumbnailImage: '20c.jpg',
        caption: 'Charlotte Bride Photo 2018 5',
        size: '681x1021'
    }, {
        mainImage: '21a.jpg',
        thumbnailImage: '21c.jpg',
        caption: 'Charlotte Bride Photo 2018 6',
        size: '681x1021'
    }, {
        mainImage: '22a.jpg',
        thumbnailImage: '22c.jpg',
        caption: 'Charlotte Bride Photo 2018 7',
        size: '681x1021'
    },  {
        mainImage: '23a.jpg',
        thumbnailImage: '23c.jpg',
        caption: 'Ines Bride Photo 2018 1',
        size: '681x1021'
    }, {
        mainImage: '24a.jpg',
        thumbnailImage: '24c.jpg',
        caption: 'Ines Bride Photo 2018 2',
        size: '681x1021'
    }, {
        mainImage: '25a.jpg',
        thumbnailImage: '25c.jpg',
        caption: 'Ines Bride Photo 2018 3',
        size: '681x1022'
    }, {
        mainImage: '26a.jpg',
        thumbnailImage: '26c.jpg',
        caption: 'Ines Bride Photo 2018 4',
        size: '681x1021'
    }, {
        mainImage: '27a.jpg',
        thumbnailImage: '27c.jpg',
        caption: 'Ines Bride Photo 2018 5',
        size: '524x536'
    }, {
        mainImage: '28a.jpg',
        thumbnailImage: '28c.jpg',
        caption: 'Bohemian Bride Photo 2018 1',
        size: '681x1008'
    }, {
        mainImage: '29a.jpg',
        thumbnailImage: '29c.jpg',
        caption: 'Bohemian Bride Photo 2018 2',
        size: '681x1011'
    }, {
        mainImage: '30a.jpg',
        thumbnailImage: '30c.jpg',
        caption: 'Bohemian Bride Photo 2018 3',
        size: '681x1015'
    }, {
        mainImage: '31a.jpg',
        thumbnailImage: '31c.jpg',
        caption: 'Bohemian Bride Photo 2018 4',
        size: '681x1010'
    }, {
        mainImage: '32a.jpg',
        thumbnailImage: '32c.jpg',
        caption: 'Bohemian Bride Photo 2018 5',
        size: '681x1010'
    }, {
        mainImage: '33a.jpg',
        thumbnailImage: '33c.jpg',
        caption: 'Bohemian Bride Photo 2018 6',
        size: '681x1012'
    }, {
        mainImage: '34a.jpg',
        thumbnailImage: '34c.jpg',
        caption: 'Bohemian Bride Photo 2018 7',
        size: '1024x678'
    }, {
        mainImage: '35a.jpg',
        thumbnailImage: '35c.jpg',
        caption: 'Bohemian Bride Photo 2018 8',
        size: '1024x675'
    }, {
        mainImage: '36a.jpg',
        thumbnailImage: '36c.jpg',
        caption: 'Bohemian Bride Photo 2018 9',
        size: '1024x672'
    }, {
        mainImage: '37a.jpg',
        thumbnailImage: '37c.jpg',
        caption: 'Bohemian Bride Photo 2018 10',
        size: '1024x674'
    }
];

export const maternityGalleryDefinitions = [
    {
        mainImage: '38a.jpg',
        thumbnailImage: '38c.jpg',
        caption: 'Caroline Pretty & Pregnant Photo 2018 1',
        size: '681x1021'
    }, {
        mainImage: '39a.jpg',
        thumbnailImage: '39c.jpg',
        caption: 'Caroline Pretty & Pregnant Photo 2018 2',
        size: '681x1021'
    }, {
        mainImage: '40a.jpg',
        thumbnailImage: '40c.jpg',
        caption: 'Caroline Pretty & Pregnant Photo 2018 3',
        size: '681x1021'
    }, {
        mainImage: '41a.jpg',
        thumbnailImage: '41c.jpg',
        caption: 'Caroline Pretty & Pregnant Photo 2018 4',
        size: '681x1021'
    }, {
        mainImage: '42a.jpg',
        thumbnailImage: '42c.jpg',
        caption: 'Caroline Pretty & Pregnant Photo 2018 5',
        size: '681x1021'
    }
];
