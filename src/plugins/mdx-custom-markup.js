const visit = require('unist-util-visit');

module.exports = function customMarkupPlugin() {
  return function transformer(tree) {
    visit(tree, 'text', function (node) {
      const videoRegex = /\[video:(https:\/\/youtu\.be\/([a-zA-Z0-9_-]+))(:)?\]/g;
      if (videoRegex.test(node.value)) {
        const newValue = node.value.replace(videoRegex, (match, url, id) => {
          return `<YouTubeEmbed videoId="${id}" />`;
        });
        node.value = newValue;
      }
      
      const imageRegex = /\[image:(.[^:]+):::[\d,]+:[\d:]+:(\d+)px:(\d+)px\]/g;
      if (imageRegex.test(node.value)) {
        const newValue = node.value.replace(imageRegex, (match, path, width, height) => {
          return `<img src="${path}" width="${width}" height="${height}" />`;
        });
        node.value = newValue;
      }
    });
  };
};
