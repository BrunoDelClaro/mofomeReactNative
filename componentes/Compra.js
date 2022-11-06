import {View,Text} from 'react-native';
import styles from "../estilos";
import { Link } from "react-router-native";

export default function Compra(props){
    const {nome,descricao,quantidade} = props
    return(
        <View style={styles.li}>
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
    );
}
