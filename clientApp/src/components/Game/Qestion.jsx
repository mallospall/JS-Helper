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
  const { width } = useWindowDimensions();
  // const [first, setfirst] = useState({ html: '' });
  // useEffect(() => {
  //   fetch('https://js-helper.herokuapp.com/test')
  //     .then((res) => res.json())
  //     .then((data) => setfirst({ html: `${data}` }));
  // }, []);
  // console.log(qestionCategory[currentQestionId].question);
  console.log(currentQestionId);

  return (
    <View>
      {/* <View
        style={{
          margin: 10,
          alignItems: 'flex-end',
          height: '60%',
          alignItems: 'center',
        }}
      /> */}
      <RenderHtml
        contentWidth={width}
        source={source}
      />
    </View>
  );
}

export default Qestion;
