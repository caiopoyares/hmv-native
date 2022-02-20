import { StyleSheet } from 'react-native'
import { View } from '../components/Themed'
import { Title, Card, Button } from 'react-native-paper'

const emergencies = [
  {
    title: 'Parada respiratória',
    address: 'Rua Nove de Julho, 183',
  },
  {
    title: 'Miocárdio',
    address: 'Rua Barão do Cotegipe, 39',
  },
  {
    title: 'Arritmia cardíaca',
    address: 'Avenida Bandeirantes, 1231',
  },
]

export default function Emergency() {
  return (
    <View style={styles.container}>
      <Title style={styles.title}>Chamados</Title>
      <View style={{ margin: 10 }}>
        {emergencies.map((emergency: any) => (
          <Card elevation={1} style={{ marginBottom: 10 }}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1 }}>
                <Card.Title
                  title={emergency.title}
                  subtitle={emergency.address}
                />
              </View>
              <View style={{ justifyContent: 'center' }}>
                <Card.Actions>
                  <Button>Ver mais</Button>
                </Card.Actions>
              </View>
            </View>
          </Card>
        ))}
      </View>

      {/* <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    marginTop: 15,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
})
