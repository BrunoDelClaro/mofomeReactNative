import {View,Text, KeyboardAvoidingView , TextInput, Button, TouchableOpacity} from 'react-native';
import styles from "../estilos";
import { Link } from "react-router-native";


const ChangeCompra = (props) =>{
    return(
        <KeyboardAvoidingView style={styles.component}>
            <View style={styles.inputHeader}>
                <Text style={styles.h1}>Alterar Produto</Text>
            </View>
            <View style={styles.componentContent}>
                <View style={styles.inputGroup}>
                    <TextInput
                        placeholder="Nome"
                        style={styles.input}
                    />
                        <TextInput
                        placeholder="Descrição"
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="Quantidade"
                        style={styles.input}
                    />
                </View>
                <View style={styles.btnGroup}>
                    <Link to="/">
                        <View style={[styles.btn, styles.white]}>
                            <Text>Cancelar</Text>
                        </View>
                    </Link>
                    <TouchableOpacity>
                        <View style={[styles.btn, styles.red]}>
                            <Text>Incluir</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    );

}

export default ChangeCompra;