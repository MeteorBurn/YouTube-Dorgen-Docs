import React from 'react';
import YouTubeEmbed from './YouTubeEmbed';

export default function MDXPage(props: any) {
  const MDXContent = require('@theme/MDXContent').default;
  
  return (
    <MDXContent
      {...props}
      components={{
        YouTubeEmbed,
        ...props.components,
      }}
    />
  );
}
