import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

export const stage5 = [
    {
      latitude: 52.229373,
      longitude: 6.900906,
    },
    {
      latitude: 52.233483,
      longitude: 6.906287,
    },
    {
      latitude: 52.240018,
      longitude: 6.916337
    },
    {
      latitude: 52.238235,
      longitude: 6.918029
    }
]

export const stage1 = {
    "type": "FeatureCollection",
    "name": "all-stages",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
    { "type": "Feature", "properties": { "Name": "Stage 1 start\n", "description": "Something about this place", "tessellate": -1 }, "geometry": { "type": "Point", "coordinates": [ 5.8372264, 51.8125626 ] } },
    { "type": "Feature", "properties": { "Name": "Stage 1 route\n", "description": "About stage 1 route", "tessellate": 1 }, "geometry": { "type": "LineString", "coordinates": [ [ 5.8372611, 51.8126488 ], [ 5.8369584, 51.8126987 ], [ 5.8356495, 51.8129507 ], [ 5.835156, 51.8132824 ], [ 5.8385023, 51.8150846 ], [ 5.8455405, 51.8199394 ], [ 5.8463988, 51.8204965 ], [ 5.8474287, 51.8201251 ], [ 5.8501753, 51.8196476 ], [ 5.8554968, 51.8191436 ], [ 5.8562693, 51.821027 ], [ 5.8608612, 51.8206557 ], [ 5.8628353, 51.8203108 ], [ 5.8644232, 51.8202843 ], [ 5.8666548, 51.8200721 ], [ 5.8669981, 51.8189048 ] ] } },
    { "type": "Feature", "properties": { "Name": "Stage 2 start\n", "description": "Something about stage 2", "tessellate": -1 }, "geometry": { "type": "Point", "coordinates": [ 5.8674126, 51.8185272 ] } }
    ]
    }


export const lineUp = [
    {   
        firstName: 'Sandra',
        lastName: 'Briede',
        runnersId: '32hu312',
        stage: 1,
    },
    {
        firstName: 'Sandra',
        lastName: 'Briede',
        runnersId: '32hu332',
        stage: 2,
    },
    {
        firstName: 'Sandra',
        lastName: 'Briede',
        runnersId: '32hu342',
        stage: 3,
    },
    {   
        firstName: 'Sandra',
        lastName: 'Briede',
        runnersId: 'user1',
        stage: 4,
    },
    {
        firstName: 'Sandra',
        lastName: 'Briede',
        runnersId: 'rf287hf',
        stage: 5,
    },
    {
        firstName: 'Briede',
        lastName: 'Sandra',
        runnersId: '22hu332',
        stage: 6,
    },
    {
        firstName: 'Sandra',
        lastName: 'Briede',
        runnersId: '34hu342',
        stage: 7,
    },
    {
        firstName: 'Sandra',
        lastName: 'Briede',
        runnersId: 'random1',
        stage: 8,
    },
    {
        firstName: 'Briede',
        lastName: 'Sandra',
        runnersId: 'random2',
        stage: 9,
    },
    {
        firstName: 'Sandra',
        lastName: 'Briede',
        runnersId: 'random3',
        stage: 10,
    },
    {
        firstName: 'Sandra',
        lastName: 'Briede',
        runnersId: 'random4',
        stage: 11,
    },
    {
        firstName: 'Briede',
        lastName: 'Sandra',
        runnersId: 'random5',
        stage: 12,
    },
    {
        firstName: 'Sandra',
        lastName: 'Briede',
        runnersId: 'random6',
        stage: 13,
    },
    {
        firstName: 'Sandra',
        lastName: 'Briede',
        runnersId: 'random7',
        stage: 14,
    },
    {
        firstName: 'Briede',
        lastName: 'Sandra',
        runnersId: 'random8',
        stage: 15,
    },
    {
        firstName: 'Sandra',
        lastName: 'Briede',
        runnersId: 'random9',
        stage: 16,
    },
    {
        firstName: 'Sandra',
        lastName: 'Briede',
        runnersId: 'random10',
        stage: 17,
    },
    {
        firstName: 'Briede',
        lastName: 'Sandra',
        runnersId: 'random11',
        stage: 18,
    },
    {
        firstName: 'Sandra',
        lastName: 'Briede',
        runnersId: 'random12',
        stage: 19,
    },
    {
        firstName: 'Sandra',
        lastName: 'Briede',
        runnersId: 'random13',
        stage: 20,
    },
    {
        firstName: 'Briede',
        lastName: 'Sandra',
        runnersId: 'random14',
        stage: 21,
    },
    {
        firstName: 'Sandra',
        lastName: 'Briede',
        runnersId: 'random15',
        stage: 22,
    },
    {
        firstName: 'Sandra',
        lastName: 'Briede',
        runnersId: 'random16',
        stage: 23,
    },
    {
        firstName: 'Briede',
        lastName: 'Sandra',
        runnersId: 'random17',
        stage: 24,
    },
    {
        firstName: 'Sandra',
        lastName: 'Briede',
        runnersId: 'random18',
        stage: 25,
    },
]

export const volunteerMessages = (init) => {
    let messages;
    if (init) {
        messages = [
            {
                _id: uuidv4(),
                text: 'How may I help you?',
                createdAt: new Date().getTime(),
                user: {
                _id: 2,
                },
            },
            {
                _id: uuidv4(),
                text: 'Hello, my name is Peter and I am a volunteer for the batavierenrace organization.',
                createdAt: new Date().getTime(),
                user: {
                    _id: 2,
                },
            },
        ]
    } else {
        let messageArray = [
            {
                _id: uuidv4(),
                  text: 'Can you share your location?',
                  createdAt: new Date().getTime(),
                  user: {
                      _id: 2,
                  },  
            },
            
        ]
        messages = [messageArray[Math.floor(Math.random() * messageArray.length)]]
    }
    return messages
}

export const systemMessages = [
    {
        _id: 4,
        text: 'Write a message and we will connect you with a volunteer as soon as possible.',
        system: true,
    },
    {
        _id: 3,
        text: 'If you have any questions regarding Batavierenrace or urgent matters, dont hesitate to ask!',
        system: true,
    },
]