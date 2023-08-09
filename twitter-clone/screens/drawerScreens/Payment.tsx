import { useNavigation } from "@react-navigation/native";
import { Button, SafeAreaView, Text } from "react-native";
import { RootStackParams } from "../../Navigation";
import { DrawerNavigationProp } from '@react-navigation/drawer'

type Props = DrawerNavigationProp<RootStackParams, 'DrawerStackGroup'>

const Payments = () => {
  const navigation = useNavigation<Props>();

  return (
    <SafeAreaView>
      <Text>Payments</Text>
      <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
      <Button title="Back" onPress={() => navigation.goBack()}/>
    </SafeAreaView>
  )
}

export default Payments;
