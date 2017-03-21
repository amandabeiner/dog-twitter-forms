import React from 'react';

const MyFeed = props => {
  let tweets = props.tweets.map(item =>{
    return(
      <li key={item.tweet}>
        {item.tweet}
      </li>
    )
  })
  return(
    <div>
      <h1>My Tweets</h1>
      <ul>{tweets}</ul>
    </div>

  );
}

export default MyFeed;
