[![npm](https://github.com/oscmedgon/logo-images/blob/master/logos/npm.png)](https://www.npmjs.com)
[![ES6](https://github.com/oscmedgon/logo-images/blob/master/logos/es6.png)](http://www.ecma-international.org/ecma-262/6.0/)
[![Reactjs](https://video-react.js.org/assets/logo.png)](https://reactjs.org/)


# carrusel-package
installable package for an image carousel


## Installation

```sh
$ npm install carrusel-package
```


### Basic usage
```js
import Carrusel from 'carrusel-package'

const onCurrentChange = current => {
  console.log(`click on the image: ${current}`)
}

const SliderData = [
  {
    image:
      'https://moto.suzuki.es/assets/images/listado_motos/2021/1050XT/DL1050RCM1_YVB_Right.jpg',
    id: 'b'
  },
  {
    image:
      'https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80',
    id: 'a'
  },
  {
    image:
      'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
    id: 'c'
  },
  {
    image:
      'https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80',
    id: 'd'
  }
]


return (<Carrusel onCurrentChange={onCurrentChange} slides={SliderData} />)
```

To work with repository

```
1. git clone https://github.com/emiliovillu/carrusel-package.git
2. npm i
3. npm run start
```
