import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";

import { Eye } from "phosphor-react-native";

const logo = require("@assets/logo.png");

export function SignIn() {
  return (
    <View className="flex-1 bg-gray-7 ">
      <View className="flex-1 mb-64 items-center justify-around bg-gray-6 rounded-b-3xl">
        <View className="items-center mt-20">
          <Image className="mb-6" source={logo} />
          <Text className=" text-5xl text-gray-1">marketspace</Text>
          <Text className="text-lg font-karla-regular mt-[-5px] text-gray-3">
            Seu espaço de compra e venda
          </Text>
        </View>
        <View className="w-full px-12">
          <Text className="text-sm mb-3 text-gray-3 self-center">
            Acesse sua conta
          </Text>
          <TextInput
            className="bg-gray-7 rounded-md py-3 px-4 mb-3"
            placeholder="E-mail"
          />
          <View className="justify-between bg-gray-7 flex-row items-center mb-3 py-3 px-4 rounded-md">
            <TextInput placeholder="Senha" />
            <Eye size={20} color="#757575" />
          </View>
          <TouchableOpacity className="bg-blue-light rounded-md p-3 mb-3 mt-6">
            <Text className="text-lg font-karla-bold text-gray-7 text-center">
              Entrar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="flex-col w-full mb-20 px-12 absolute bottom-0">
        <Text className="text-sm self-center text-gray-2">
          Ainda não tem acesso?
        </Text>
        <TouchableOpacity className="bg-gray-5 rounded-md p-3 mb-3 mt-5">
          <Text className="text-lg font-karla-bold text-gray-2 text-center">
            Criar uma conta
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
