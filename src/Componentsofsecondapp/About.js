import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import './CSS/About.css'
import './Images/Image.jpg'
import './Images/Image2.jpg'
import './Images/Image3.jpg'
import './Images/Image4.jpg'
import './Images/Image5.jpg'
import './Images/Image6.jpg'
import './Images/Image7.jpg'
import './Images/Image8.jpg'
import './Images/Image9.jpg'
import './Images/sports.jpg'
import './Images/Image10.jpg'
import './Images/Image11.jpg'
import './Images/dileep.jpg'
export default function StandardImageList() {
  return (
    <div id="About-main-div">
      <div>
        <h2>Games and Sports</h2>
      </div>
      <div>
      <p>Most people play a sport as a hobby or for the love of the game. They are immensely pleased with the advantages of the sport. Playing games and sports improves health and fitness, provides mental peace and calmness and makes them more active. Sporting activities and games give everyone an opportunity to achieve the personal benefits of sport involvement. These activities aim at the optimum physical, mental and social development of an individual.

Games and sports in some form or other have been a part of human life either for survival or for pleasure. Gradually human beings started organising events, including games and sports, as community events. Consequently, the need was felt to acquire specific skills and advancement in many sports. Each sport has its specific skills which need to be developed for playing correctly. Rules and regulations of the sports are revised from time to time by their federations.

Games and sports are essential to enjoy overall health and well-being. Sports and games offer numerous advantages and are thus highly recommended for everyone, irrespective of their age. Playing games and sports maintains the human figure and provides strength, patience and endurance. All doctors recommend exercising as a preventive measure for all types of diseases. One of the best workouts for the body is daily exercise or playing any type of outdoor game or sport. People active in sports have better health than those who do not participate in sports as they are physically and mentally prepared for new challenges in their life.</p>
      </div>
      <div>
        <ImageList sx={{ width: 1000, height: 450 }} cols={3} rowHeight={164}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </div>
  );
}

const myImage = [require('./Images/Image.jpg'),require('./Images/Image2.jpg'),require('./Images/Image3.jpg'),require('./Images/Image4.jpg'),require('./Images/Image5.jpg'),require('./Images/Image6.jpg'),require('./Images/Image7.jpg'),require('./Images/Image8.jpg'),require('./Images/Image9.jpg'),require('./Images/sports.jpg'),require('./Images/Image10.jpg'),require('./Images/Image11.jpg'),require('./Images/dileep.jpg')]; // Import the JPG image


const itemData = [
  {
    img:  myImage[0],
    title: 'Badminton',
  },
  {
    img: myImage[1],
    title: 'Burger',
  },
  {
    img: myImage[2],
    title: 'Camera',
  },
  {
    img: myImage[3],
    title: 'Coffee',
  },
  {
    img: myImage[4],
    title: 'Hats',
  },
  {
    img: myImage[5],
    title: 'Honey',
  },
  {
    img: myImage[6],
    title: 'Basketball',
  },
  {
    img: myImage[7],
    title: 'Fern',
  },
  {
    img: myImage[8],
    title: 'Mushrooms',
  },
  {
    img: myImage[4],
    title: 'Sea star',
  },
  {
    img: myImage[1],
    title: 'Sea star',
  },
  {
    img: myImage[5],
    title: 'Sea star',
  },
  {
    img: myImage[4],
    title: 'Sea star',
  },
  {
    img: myImage[3],
    title: 'Basketball',
  },
  {
    img: myImage[9],
    title: 'Basketball',
  },
  // {
  //   img: myImage[10],
  //   title: 'Basketball',
  // },
  {
    img: myImage[11],
    title: 'Basketball',
  },
  {
    img: myImage[12],
    title: 'Basketball',
  }
];