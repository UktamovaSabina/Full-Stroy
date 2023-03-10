import React from 'react';
import Container from '../../utils/Container';
import './Posts.scss';

const Posts = () => {
  return (
    <section className='posts-section'>
      <Container>
        <div className='instagram-part'>
          <h3>Instagram</h3>
          <button>Follow</button>
        </div>

        <div className='videos-wrapper'>
          <img src={'https://avatars.mds.yandex.net/i?id=00f84e63c125b99f8313742e5ff31d47d51ac11e-8176762-images-thumbs&n=13'} alt="site's video" />
          <img src={'https://avatars.mds.yandex.net/i?id=00f84e63c125b99f8313742e5ff31d47d51ac11e-8176762-images-thumbs&n=13'} alt="site's video" />
          <img src={'https://avatars.mds.yandex.net/i?id=00f84e63c125b99f8313742e5ff31d47d51ac11e-8176762-images-thumbs&n=13'} alt="site's video" />
          <img src={'https://avatars.mds.yandex.net/i?id=00f84e63c125b99f8313742e5ff31d47d51ac11e-8176762-images-thumbs&n=13'} alt="site's video" />
          <img src={'https://avatars.mds.yandex.net/i?id=00f84e63c125b99f8313742e5ff31d47d51ac11e-8176762-images-thumbs&n=13'} alt="site's video" />
        </div>
      </Container>
    </section>
  )
}

export default Posts