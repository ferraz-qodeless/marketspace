import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignIn } from "@screens/SignIn";
import { SignUp } from "@screens/SignUp";

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="signUp" component={SignUp} />
      <Screen name="signIn" component={SignIn} />
    </Navigator>
  );
}
