import * as React from 'react';

import {StyleSheet, View, AppState} from 'react-native';
import PipHandler from './PipHandler';
import Video from 'react-native-video';

AppState.addEventListener('change', nextAppState => {
  if (nextAppState === 'background') {
    // Call your function here
    PipHandler.enterPipMode(300, 214);
  }
});

// Use this boolean to show / hide ui when pip mode changes
const App = () => {
  return (
    <View style={styles.container}>
      <Video
        source={{
          uri: 'https://ticket-management-prod.s3.ap-south-1.amazonaws.com/neoito/ticket-attachments/2023-02-09T09:07:24.468Ztest.mp4',
        }}
        style={styles.video}
        resizeMode="contain"
        controls={true}
        paused={false}
      />
    </View>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  box: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#02ff02',
    width: 200,
    height: 60,
    marginVertical: 20,
    color: 'white',
    borderRadius: 30,
  },
  text: {
    marginBottom: 50,
    fontSize: 22,
  },
  video: {
    width: '100%',
    height: '100%',
  },
});
