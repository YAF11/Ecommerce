import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Gap, Header, ItemListFood, ItemValue} from '../../components';
import {FoodDummy1} from '../../assets';

const OrderDetail = ({navigation}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Header
        title="Payment"
        subTitle="You deserve better meal"
        onBack={() => {}}
      />
      <View style={styles.content}>
        <Text style={styles.label}>Item Ordered</Text>
        <ItemListFood
          image={FoodDummy1}
          title="Cherry Healty"
          price="100.000"
          items={14}
          type="order-summary"
        />
        <Text style={styles.label}>Details Transaction</Text>
        <ItemValue label="Cherry Healty" value="Rp1.400.000" />
        <ItemValue label="Driver" value="Rp50.000" />
        <ItemValue label="Tax 10%" value="Rp140.000" />
        <ItemValue
          label="Total Price"
          value="Rp1.590.000"
          valueColor="#1ABC9C"
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.label}>Deliver to:</Text>
        <ItemValue label="Name" value="Irsyad" />
        <ItemValue label="Phone" value="0815151515" />
        <ItemValue label="Address" value="Glagah Lor" />
        <ItemValue label="House No" value="62" />
        <ItemValue label="City" value="Jogja" />
      </View>
      <View style={styles.content}>
        <Text style={styles.label}>Order Status:</Text>
        <ItemValue label="#FM209391" value="Paid" valueColor="#1ABC9C" />
      </View>
      <View style={styles.button}>
        <Button
          text="Cancel My Order"
          color="#D9435E"
          textColor="white"
          onPress={() => navigation.navigate('SuccesOrder')}
        />
      </View>
      <Gap height={40} />
    </ScrollView>
  );
};

export default OrderDetail;

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 16,
    marginTop: 24,
  },
  label: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
    marginBottom: 8,
  },
  button: {paddingHorizontal: 24, marginTop: 24},
});
