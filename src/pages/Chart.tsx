import React, {useState, useEffect} from 'react';
import {LineChart, BarChart} from 'react-native-chart-kit';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  StatusBar,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import {Weget as weget} from '../utils/request';
import {Forecast} from '../types';

const Chart: React.FC = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<Forecast | null>(null);

  const screenWidth = Dimensions.get('window').width;

  useEffect(() => {
    (async () => {
      setLoading(true);
      const r: any = await weget.get('/air/forecast', {});
      if (r?.status === 200) {
        setData(r.data as Forecast);
      }
      setLoading(false);
    })();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <ScrollView>
          <Text>PM25</Text>
          <LineChart
            data={{
              labels: data?.dates.map((d: string) => d.slice(5, 10)) ?? [],
              datasets: [
                {
                  data: data?.all_pm2.map(d => ~~d) ?? [],
                },
              ],
            }}
            width={screenWidth - 16}
            height={220}
            yAxisSuffix="ug/m3"
            yLabelsOffset={8}
            chartConfig={{
              backgroundColor: '#1cc910',
              backgroundGradientFrom: '#eff3ff',
              backgroundGradientTo: '#efefef',
              decimalPlaces: 0,
              color: (opacity = 255) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
          <Text>PM10</Text>
          <BarChart
            data={{
              labels: data?.dates.map((d: string) => d.slice(5, 10)) ?? [],
              datasets: [
                {
                  data: data?.all_pm10.map(d => ~~d) ?? [],
                },
              ],
            }}
            width={Dimensions.get('window').width - 16}
            height={220}
            yAxisSuffix="ug/m3"
            yAxisLabel=""
            yLabelsOffset={8}
            chartConfig={{
              backgroundColor: '#1cc910',
              backgroundGradientFrom: '#eff3ff',
              backgroundGradientTo: '#efefef',
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
            }}
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
          <Text>CO</Text>
          <LineChart
            data={{
              labels: data?.dates.map((d: string) => d.slice(5, 10)) ?? [],
              datasets: [
                {
                  data: data?.all_co.map(d => ~~d) ?? [],
                },
              ],
            }}
            width={screenWidth - 16}
            height={220}
            yAxisSuffix="ug/m3"
            yLabelsOffset={8}
            chartConfig={{
              backgroundColor: '#1cc910',
              backgroundGradientFrom: '#eff3ff',
              backgroundGradientTo: '#efefef',
              decimalPlaces: 0,
              color: (opacity = 255) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
            }}
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(245, 245, 245)',
  },
});

export default Chart;
