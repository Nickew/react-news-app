import fetch from 'node-fetch';

// TODO: make array of objects, which contain title and link to item.
const future = (req, res) => {
  fetch('http://bbc.com/future/')
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      let futureStories = [];
      const regex = /(a href="\/future\/story)+([a-zA-Z0-9/-]+)/g;
      const dataArray = data.match(regex);
      const dataLength = dataArray.length;
      // TODO: find and parse title by link
      for (let i = 0; i < dataLength; i++) {
        if (/(a href=)+/g.exec(dataArray[i])) {
          futureStories = [...futureStories, {
            link: /(\/future)+([a-zA-Z0-9/-]+)/.exec(dataArray[i])[0],
          }];
        }
      }

      res.send(futureStories);
    })
    .catch((error) => {
      res.send(error);
      console.log(error);
    });
};

export default future;
