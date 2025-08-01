declare module '*.jpg' {
  export default '' as string;
}
declare module '*.png' {
  export default '' as string;
}
declare module '*.mp4' {
  export default '' as string;
}

declare module '*.mov' {
  export default '' as string;
}

declare module '*.svg' {
  import React from 'react';

  import { SvgProps } from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}
