import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import { Eye, PencilSimpleLine, User } from "phosphor-react-native";

const logo = require("@assets/logo.png");

export function SignUp() {
  return (
    <View className="flex-1 items-center justify-around bg-gray-6">
      <View className="items-center gap-3 px-8 mt-12">
        <Image className="h-12 w-[70px]" source={logo} />
        <Text className="font-karla-bold text-3xl text-gray-1 mt-4">
          Boas vindas!
        </Text>
        <Text className="text-center text-xl  font-karla-regular text-gray-2">
          Crie sua conta e use o espaço para comprar itens variados e vender
          seus produtos
        </Text>
      </View>
      <View className="w-full px-12">
        <View className="items-center justify-center mb-8">
          <View className="w-28 h-28 rounded-full border-4 border-blue-light items-center justify-center bg-gray-5">
            <User size={60} color="#9ca3af" />
          </View>
          <TouchableOpacity className="absolute right-[120px] bottom-0 w-12 h-12 rounded-full bg-blue-light items-center justify-center">
            <PencilSimpleLine size={20} color="#fff" />
          </TouchableOpacity>
        </View>
        <TextInput
          placeholder="Nome"
          className="bg-gray-7 rounded-md py-3 px-4 mb-3 text-gray-1"
        />
        <TextInput
          placeholder="E-mail"
          className="bg-gray-7 rounded-md py-3 px-4 mb-3 text-gray-1"
        />
        <TextInput
          placeholder="Telefone"
          className="bg-gray-7 rounded-md py-3 px-4 mb-3 text-gray-1"
        />
        <View className="flex-row items-center bg-gray-7 rounded-md mb-3 px-4">
          <TextInput
            placeholder="Senha"
            secureTextEntry
            className="flex-1 py-3 text-gray-1"
          />
          <TouchableOpacity>
            <Eye size={24} color="#9ca3af" />
          </TouchableOpacity>
        </View>
        <View className="flex-row items-center bg-gray-7 rounded-md mb-6 px-4">
          <TextInput
            placeholder="Confirmar senha"
            secureTextEntry
            className="flex-1 py-3 text-gray-1"
          />
          <TouchableOpacity>
            <Eye size={24} color="#9ca3af" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity className="bg-gray-1 rounded-md p-3 mb-6">
          <Text className="text-lg font-karla-bold text-gray-7 text-center">
            Criar
          </Text>
        </TouchableOpacity>
      </View>
      <View className="flex-col w-full px-12 pb-8">
        <Text className="text-sm text-gray-2 text-center mb-3">
          Já tem uma conta?
        </Text>
        <TouchableOpacity className="bg-gray-5 rounded-md p-3">
          <Text className="text-lg font-karla-bold text-gray-2 text-center">
            Ir para o login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
