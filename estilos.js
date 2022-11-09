import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({

    app:{
        flexDirection: "column",
        flex: 1,
        backgroundColor: "#1d3a4e",
    },

    headerBar:{
        display:"flex",
        flexDirection: "row",
        flex:1,
        backgroundColor:"#1d3a4e",
        alignItems:"center",
        justifyContent:"space-between",
        paddingLeft:20,
        paddingRight: 20,
        
    },

    badge:{
        borderWidth: 1,
        borderRadius: 10,
        overflow: "hidden",
        padding: 5,
        minWidth: 20,
        textAlign: "center",
        marginRight: 12,
        fontSize: 16,
        fontWeight: "bold",
        backgroundColor:"#fff"
    },

    appName:{
        fontSize:36,
        fontWeight:"bold",
    },

    conteudo:{
        display:"flex",
        flex:10,
        flexDirection:"column",
        backgroundColor:"#a1a6aa"
    },

    component:{
        padding:1,
        backgroundColor:"#a1a6aa",
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between",
    },

    componentHeader:{
        height: 60,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
        marginRight: 20,
        marginLeft: 20,

    },

    h1:{
        fontSize:24,
        fontWeight:"bold"
    },

    h2:{
        fontSize:16,
    },

    componentContent:{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "stretch",
    },
    list: {
        borderColor: "#dce5e8",
        borderStyle: "solid",
        borderWidth: 2,
        borderRadius: 10,
        flex: 1,
      },
      li: {
        padding: 5,
        flex: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      },
      liText: {
        fontSize: 18,
        margin: 10,
        flex: 1,
      },
      liSeparator: {
        height: 1,
        backgroundColor: "#CED0CE",
      },

      btn:{
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor:"red",
        padding:10,
        margin:5
      },

      inputHeader:{
        height: 60,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
        marginRight: 20,
        marginLeft: 20,
      },
      input: {
        flex: 1,
        padding: 16,
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: "#dce5e8",
        borderRadius: 10,
        fontSize: 18,
        margin:10,
        backgroundColor:"#fff",
      },

      btnGroup:{
        display:"flex",
        flex:1,
        flexDirection:"row",
        justifyContent:"flex-end",
        margin:10,
      },

      inputGroup:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        alignContent:"stretch",
        margin:1,
      },

      red:{
        backgroundColor:"red",
        color:"black"
      },
      white:{
        backgroundColor:"white",
        color:"black"
      },
      nItem:{
        borderWidth: 1,
        borderRadius: 10,
        overflow: "hidden",
        padding: 5,
        minWidth: 20,
        textAlign: "center",
        marginRight: 12,
        fontSize: 16,
        fontWeight: "bold",
        backgroundColor:"#1d3a4e",
        color:"white"
      },

      nItemText:{
        color:"white"
      },

      row:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center"
      },

      selected:{

        backgroundColor:"green"
      }


});