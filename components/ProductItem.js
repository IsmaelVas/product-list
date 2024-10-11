import { React, View, Text } from 'react-native';

export function ProductItem(props) {
    return (
        <View>
            <View>
                <Text>Nome</Text>
                <Text >{props.name}</Text>
            </View>
            <View>
                <View>
                    <Text>Categoria</Text>
                    <Text >{props.category}</Text>
                </View>
                <View>
                    <Text>Preço</Text>
                    <Text>{props.price}</Text>
                </View>
                <View>
                    <Text>Estoque</Text>
                    <Text>{props.stock}</Text>
                </View>
            </View>
        </View>
    );
};