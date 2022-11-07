import React, { useState } from "react";
import {
  Text,
  View,
  FlatList,
  TextInput,
  Keyboard,
  Image,
  TouchableOpacity,
} from "react-native";
import { Button } from "react-native-web";
import styles from "../estilos";

import Compra from "./Compra"
import { Link } from "react-router-native";


const Lista = (props) => {

    const {compras,setCompras} = props
    console.log(compras)

    const apagarCompras = ()=>{
        setCompras([])
    }

    return(
        <View style={styles.component}>
            <View style={styles.componentHeader}>
                <Text style={styles.h1}>Minha Lista de Compras</Text>
                <Link to="/addCompra">
                    <View>
                        <Text style={styles.btn}>Adicionar</Text>
                    </View>
                </Link>
                <TouchableOpacity onPress={apagarCompras}>
                        <View style={[styles.btn, styles.white]}>
                            <Text>Apagar</Text>
                        </View>
                </TouchableOpacity>
            </View>
            <View style={styles.componentContent}>
                <FlatList
                    data={props.compras}
                    renderItem={({ item }) => (
                        <Compra
                          id={item.id}
                          nome={item.nome}
                          descricao={item.descricao}
                          quantidade={item.quantidade}
                        />
                      )}
                      keyExtractor={(item) => item.id}
                      ItemSeparatorComponent={() => <View style={styles.liSeparator} />}
                      ListFooterComponent={() => <View style={styles.liSeparator} />}
                      style={styles.list}
                />

            </View>
        </View>
    );
}

export default Lista;