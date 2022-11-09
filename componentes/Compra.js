import {View,Text, TouchableOpacity} from 'react-native';
import styles from "../estilos";
import { Link } from "react-router-native";
import { useState } from 'react';

export default function Compra(props){
    const {nome,descricao,quantidade} = props

    const [pressed,setPressed] = useState(false);

    return(

        <TouchableOpacity onLongPress={() => {pressed?setPressed(false):setPressed(true)}}>
            <View style={[styles.li, pressed?styles.selected:styles.white]}>
                <Text style={styles.h2}>{nome}</Text>

                <View style={styles.row}>
                    <View style={styles.nItem}>
                        <Text style={styles.nItemText}>{quantidade}</Text>
                    </View>

                    <Link to="/changeCompra">
                        <View style={styles.btn}>
                            <Text>Alterar</Text>
                        </View>
                    </Link>
                </View>



            </View>

        </TouchableOpacity>
    );
}
