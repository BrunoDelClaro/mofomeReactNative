import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Alert } from 'react-native';
import styles from "./estilos";

import Cabecalho from "./componentes/header";
import Lista from "./componentes/Lista"

import { NativeRouter, Routes, Route } from "react-router-native";
import AddCompra from './componentes/AddCompra';
import ChangeCompra from './componentes/ChangeCompra';

export default function App() {

  const [compras, setCompras] = useState([])


  async function armazenaDados() {
    try {
      await AsyncStorage.setItem("compras", JSON.stringify(compras));
    } catch (error) {
      Alert.alert("As compras não foram armazenados");
    }
  }

  async function recuperaDados() {
    try {
      const t = await AsyncStorage.getItem("compras");
      if (t !== null) setCompras(JSON.parse(t));
    } catch (error) {
      Alert.alert("As compras não foram carregadas");
    }
  }


  useEffect(()=>{
    recuperaDados();
  },[])

  useEffect(()=>{
    armazenaDados()
  },[compras])


  return (

    <NativeRouter>
      <View style={styles.app}>
      <Cabecalho nCompras={10}></Cabecalho>
        
        <View style={styles.conteudo}>
          <Routes>
            <Route
              path="/"
              element={
                  <Lista compras={compras}></Lista>
              }
            />
            <Route
              path="/addCompra"
              element={
                <AddCompra setCompras={setCompras}/>
              }
            />

            <Route
              path="/changeCompra"
              element={
                <ChangeCompra/>
              }
            />
            
          </Routes>
        </View>
      </View>
    </NativeRouter>
  );
}
