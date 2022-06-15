import React from 'react'
import SimpleImageSlider from 'react-simple-image-slider'

const Slider = () => {
    const images = [
        {url: 'https://balkangreenenergynews.com/rs/wp-content/uploads/2020/08/solarni-paneli-krov.jpg'},
        {url: 'https://www.vijesti.me/data/images/2021/07/12/13/5347935_solarsystem1_ls.jpg'},
        {url: 'http://3.bp.blogspot.com/-lsYiEAbEOl0/VQGNiPXb4VI/AAAAAAAAANc/7w6SNVHXY10/s1600/paneli_slika.jpg'}
    ]
  return (
    <div className='image-slider'>
      <h1>See our work:</h1>
        <SimpleImageSlider
        width={1096}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
        className='slidd'
        />
    </div>
  )
}

export default Slider