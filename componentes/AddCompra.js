import {View,Text, KeyboardAvoidingView , TextInput, Button, TouchableOpacity} from 'react-native';
import styles from "../estilos";
import { Link } from "react-router-native";
import { useState } from 'react';


const AddCompra = (props) =>{

    const {compras , setCompras} = props

    const [nome, setNome] = useState("")
    const [descricao, setDescricao] = useState("")
    const [quantidade, setQuantidade] = useState(0)

    const adicionarCompra = ()=>{
        const c = {
            id:compras.length,
            nome: nome,
            descricao: descricao,
            quantidade: parseInt(quantidade)
        }
        setCompras([...compras, c])
    }

    return(
        <KeyboardAvoidingView style={styles.component}>
            <View style={styles.inputHeader}>
                <Text style={styles.h1}>Adicionar Produto</Text>
            </View>
            <View style={styles.componentContent}>
                <View style={styles.inputGroup}>
                    <TextInput
                        placeholder="Nome"
                        style={styles.input}
                        defaultValue={nome}
                        onChangeText={(nome) => setNome(nome)}
                    />
                        <TextInput
                        placeholder="Descrição"
                        style={styles.input}
                        defaultValue={descricao}
                        onChangeText={(descricao) => setDescricao(descricao)}
                    />
                    <TextInput
                        placeholder="Quantidade"
                        style={styles.input}
                        defaultValue={quantidade}
                        onChangeText={(quantidade) => setQuantidade(quantidade)}
                    />
                </View>
                <View style={styles.btnGroup}>
                    <Link to="/">
                        <View style={[styles.btn, styles.white]}>
                            <Text>Cancelar</Text>
                        </View>
                    </Link>
                    <Link to="/">
                        <TouchableOpacity onPress={adicionarCompra}>
                            <View style={[styles.btn, styles.red]}>
                                <Text>Incluir</Text>
                            </View>
                        </TouchableOpacity>

                    </Link>
                </View>
            </View>
        </KeyboardAvoidingView>
    );

}

export default AddCompra;