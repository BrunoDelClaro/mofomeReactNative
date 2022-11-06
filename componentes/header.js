import React from "react";
import { Text, View } from "react-native";
import styles from "../estilos";


export default function Cabecalho({ nCompras }) {
  return (
    <View style={styles.headerBar}>
        <Text style={styles.appName}>Mó Fome</Text>
        <Text style={styles.badge}>{nCompras}</Text>
    </View>
  );
}
