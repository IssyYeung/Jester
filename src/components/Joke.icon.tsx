import React from 'react';
import {Svg, Path, Circle, G} from 'react-native-svg';

// what?
type JokeIconProps = {
  size?: string;
};

export const JokeIcon: React.FC<JokeIconProps> = ({size = 40}) => {
  return (
    <Svg height={size} width={size} viewBox="0 0 24 24">
      <Circle cx="12" cy="12" fill="#ffd54f" r="12" />
      <Path
        d="m19.537 7.723c-.236-.036-.474.043-.643.211l-10.96 10.96c-.168.168-.247.407-.211.643.036.235.181.44.392.551 3.462 1.822 7.644 1.192 10.404-1.569s3.391-6.942 1.569-10.404c-.111-.211-.315-.356-.551-.392z"
        fill="#e53935"
      />
      <Path
        d="m6.61 15.639c-.518.749-2.205 3.291-2.204 4.569 0 1.555 1.266 2.821 2.821 2.821.778 0 1.483-.316 1.994-.827.51-.51.827-1.216.827-1.994 0-1.279-1.687-3.82-2.204-4.569-.139-.203-.37-.324-.617-.324s-.479.122-.617.324z"
        fill="#00bcd4"
      />
      <Path
        d="m20.208 4.406c-1.278 0-3.82 1.687-4.569 2.204-.204.14-.324.371-.324.617s.121.477.324.617c.748.518 3.29 2.205 4.569 2.204.778 0 1.483-.317 1.993-.827.511-.511.828-1.216.828-1.994 0-1.555-1.266-2.821-2.821-2.821z"
        fill="#00bcd4"
      />
      <G fill="#6d4c41">
        <Path d="m7.581 15.005c-.167.167-.411.253-.661.209-.408-.072-.681-.461-.608-.869l.344-1.95-1.95.344c-.408.073-.797-.2-.869-.608-.074-.408.2-.796.608-.868l3.005-.53c.241-.043.488.035.661.208s.251.419.208.661l-.53 3.005c-.028.156-.103.293-.208.398z" />
        <Path d="m15.005 7.581c-.105.105-.242.18-.399.207l-3.006.531c-.241.043-.488-.035-.661-.208s-.251-.419-.208-.661l.53-3.005c.072-.408.461-.681.868-.608.408.072.681.461.608.869l-.344 1.95 1.95-.344c.408-.073.797.2.869.608.046.25-.04.494-.207.661z" />
      </G>
    </Svg>
  );
};