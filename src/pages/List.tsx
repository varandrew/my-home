import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  FlatList,
  Image,
  ActivityIndicator,
} from 'react-native';
import {Weget as weget} from '../utils/request';
import {Air} from '../types';

const getWeekday = (date: string) => {
  var weekArray = new Array(
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  );
  var week = weekArray[new Date(date).getDay()];
  return week;
};

const Item = ({record}: {record: Air}) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemHeader}>
        <Image
          style={styles.logo}
          source={require('./../assets/weather.png')}
        />
        <View style={{marginLeft: 100}}>
          <Text style={styles.title}>{`PM10: ${record.pm10}`}</Text>
          <Text style={styles.title}>{`PM25: ${record.pm25}`}</Text>
        </View>
      </View>
      <Text style={[styles.recordItem, {marginTop: 20}]}>
        {record.co ? `CO: ${record.co}` : 'CO: NO DATA'}
      </Text>
      <Text style={styles.recordItem}>
        {record.no2 ? `NO2: ${record.no2}` : 'NO2: NO DATA'}
      </Text>
      <Text style={styles.recordItem}>
        {record.so2 ? `SO2: ${record.so2}` : 'SO2: NO DATA'}
      </Text>
      <Text style={styles.recordItem}>
        {record.o3 ? `O3: ${record.o3}` : 'O3: NO DATA'}
      </Text>
      <Text style={[styles.date, {marginTop: 20}]}>{`${
        record.date
      }, ${getWeekday(record.date)}`}</Text>
    </View>
  );
};

const List: React.FC = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<Air[]>([]);
  const renderItem = ({item}: {item: Air}) => <Item record={item} />;

  useEffect(() => {
    (async () => {
      setLoading(true);
      const r: any = await weget.get('/air/list', {page: 1, limit: 10});
      if (r?.status === 200) {
        setData(r.data as Air[]);
      }
      setLoading(false);
    })();
  }, []);

  return (
    <SafeAreaView style={[styles.container]}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item._id.$oid}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    justifyContent: 'center',
    backgroundColor: 'rgb(245, 245, 245)',
  },
  item: {
    backgroundColor: 'rgb(255, 255, 255)',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    display: 'flex',
  },
  itemHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
  },
  date: {
    fontSize: 18,
    color: 'grey',
    alignSelf: 'center',
  },
  recordItem: {
    marginTop: 5,
  },
  logo: {
    width: 48,
    height: 48,
    marginLeft: 20,
  },
});

export default List;
