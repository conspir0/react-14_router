import React from 'react';
import Article from '../../components/Article/Article';
import './../../components/Article/Article.css';


const data = [
  { id: 1, title: 'Nunc consectetur felis a leo ultrices commod', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse scelerisque nunc ut orci dictum, sed pharetra felis ullamcorper. Suspendisse nec velit at erat eleifend vestibulum ac ac sapien. Duis maximus sem et urna porta ullamcorper. Ut sodales dui orci, at posuere nibh tempus sit amet. Nunc consectetur felis a leo ultrices commodo. Nulla a purus maximus, scelerisque nibh non, sodales libero.', date: '2020-10-10' },
  { id: 12, title: 'Suspendisse nec velit at erat eleifend', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse scelerisque nunc ut orci dictum, sed pharetra felis ullamcorper. Suspendisse nec velit at erat eleifend vestibulum ac ac sapien. Duis maximus sem et urna porta ullamcorper. Ut sodales dui orci, at posuere nibh tempus sit amet. Nunc consectetur felis a leo ultrices commodo. Nulla a purus maximus, scelerisque nibh non, sodales libero. Pellentesque auctor condimentum velit.', date: '2020-09-10' },
  { id: 3, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse scelerisque nunc ut orci dictum, sed pharetra felis ullamcorper. Suspendisse nec velit at erat eleifend vestibulum ac ac sapien. Duis maximus sem et urna porta ullamcorper.', date: '2020-05-06' },
  { id: 4, title: 'Pellentesque auctor condimentum velit', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse scelerisque nunc ut orci dictum, sed pharetra felis ullamcorper. Suspendisse nec velit at erat eleifend vestibulum ac ac sapien. Duis maximus sem et urna ullamcorper. Ut sodales dui orci, at posuere nibh tempus sit amet.', date: '2020-01-15' },
  { id: 5, title: 'Suspendisse scelerisque nunc ut orci dictum', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse scelerisque nunc ut orci dictum, sed pharetra felis ullamcorper. Suspendisse nec velit at erat eleifend vestibulum ac ac sapien. Duis maximus sem et urna porta ullamcorper. Ut sodales dui orci, at posuere nibh tempus sit amet. Nunc consectetur felis a leo ultrices commodo.', date: '2019-11-23' },
  { id: 6, title: 'Ut sodales dui orci, at posuere nibh tempus sit ame', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse scelerisque nunc ut orci dictum, sed pharetra felis ullamcorper. Suspendisse nec velit at erat eleifend vestibulum ac ac sapien. Duis maximus sem et urna porta ullamcorper.', date: '2014-05-06' },
];

const Home = () => {
  const articles = data.map(item => (
    <Article
      key={item.id}
      {...item}
    />
  ))
  return (
    <div className="article-list">
      {articles}
    </div>
  );
}

export default Home;