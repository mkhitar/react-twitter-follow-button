# React twitter follow button

React component for twitter follow button!

## How to install

```
npm install react-twitter-follow-button --save
```

## How to use
```
var ReactTwitterFollowButton = require('react-twitter-follow-button');
<ReactTwitterFollowButton twitterAccount="your-twitter-account-here" showLarge={true} showName={false} showCount={false} />
```

ES2015 style
```
import ReactTwitterFollowButton from 'react-twitter-follow-button';
```

## For dynamically inserted content
If content is dynamically inserted into a page it’s necessary to parse new buttons and widgets using the `twttr.widgets.load()` function.

## Result
![reacttwitterfollow](https://github.com/mkhitar/react-twitter-follow-button/blob/master/twitter-follow.png)

## Props

### Required props
- twitterAccount

### Other props
- showLarge 
- showName
- showCount

## Wanna Contribute?
Please contribute to this package via **Pull Request**, or you can open **Issues**!

## License
MIT
