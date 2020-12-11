/* eslint-disable no-alert */
/* eslint-disable no-bitwise */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Text,
  TouchableOpacity,
  SafeAreaView,
  ToastAndroid,
  Platform,
} from 'react-native';
import NfcManager, {
  Ndef,
  NfcEvents,
  NfcTech,
  NfcAdapter,
  NdefParser,
} from 'react-native-nfc-manager';

class Nfc extends React.Component {


  componentDidMount(){
    NfcManager.start();
    NfcManager.setEventListener(NfcEvents.DiscoverTag, this._onTagDiscovered);
  }
  componentWillUnmount() {
    this._cleanUp();
    NfcManager.setEventListener(NfcEvents.DiscoverTag, null);
    NfcManager.unregisterTagEvent().catch(() => 0);
  }
  _cleanUp = () => {
    NfcManager.cancelTechnologyRequest().catch(() => 0);
  }
  readData = async () => {
    try {
      await NfcManager.registerTagEvent()

    } catch (ex) {
      console.warn('ex', ex);
      NfcManager.unregisterTagEvent().catch(() => 0);
    }
  }
  _onTagDiscovered = tag => {
    this.setState({ tag });

    let parsed = null;
    if (tag.ndefMessage && tag.ndefMessage.length > 0) {
        // ndefMessage is actually an array of NdefRecords,
        // and we can iterate through each NdefRecord, decode its payload
        // according to its TNF & type
        const ndefRecords = tag.ndefMessage;

        function decodeNdefRecord(record) {
            if (Ndef.isType(record, Ndef.TNF_WELL_KNOWN, Ndef.RTD_TEXT)) {
                return Ndef.text.decodePayload(record.payload);
            }

            return ['unknown', '---']
        }

        parsed = ndefRecords.map(decodeNdefRecord);
    }
    this.setState({parsed});

    NfcManager.setAlertMessageIOS('Login Successful');
    NfcManager.unregisterTagEvent().catch(() => 0);
  }


  
render(){
  return (
    <SafeAreaView style={{padding: 20}}>
      <Text>NFC SCANNER</Text>

      <TouchableOpacity
        style={{
          padding: 10,
          width: 200,
          margin: 20,
          borderWidth: 1,
          borderColor: 'black',
        }}
        onPress={this.readData}>
        <Text>Read</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}
}
  
export default Nfc;