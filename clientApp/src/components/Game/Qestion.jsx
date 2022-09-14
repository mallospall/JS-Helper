import React from 'react';
import { useWindowDimensions, View } from 'react-native';
import { useSelector } from 'react-redux';
import RenderHtml from 'react-native-render-html';

const source = {
  html: `<pre style='height: 10em; background-color: rgba(255, 255, 128, .5);'>
<code>
 Что такое DOM?
</code>
</pre>`,
};
function Qestion({ currentQestionId }) {
  const { qestionCategory } = useSelector((state) => state);
  const { width, height } = useWindowDimensions();
  // const [first, setfirst] = useState({ html: '' });
  // useEffect(() => {
  //   fetch('https://js-helper.herokuapp.com/test',{
  // body: JSON.stringify({path:qestionCategory[currentQestionId].question})
  // })
  //     .then((res) => res.json())
  //     .then((data) => setfirst({ html: `${data}` }));
  // }, []);
  // console.log(qestionCategory[currentQestionId].question);

  return (
    <View
      style={{
        display: 'flex',
      }}
    >
      <RenderHtml
        contentWidth={width}
        source={source}
      />
    </View>
  );
}

export default Qestion;
