import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';

export function PasswordItem({ data, removePassword }) {

    const copyPassword = async () => {
        await Clipboard.setStringAsync(data);
        alert('Senha copiada com sucesso');
    }

    return (
        <View style={styles.container} >
            <Pressable onPress={copyPassword} >
                <Text style={styles.text}>{data}</Text>
            </Pressable>

            <Pressable onPress={removePassword} >
                <Feather
                    name='trash'
                    size={24}
                    color="#ff0000"
                />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0e0e0e',
        padding: 14,
        width: '100%',
        marginBottom: 14,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    text: {
        color: '#fff'
    },
    clipboard: {

    }
})