import {StyleSheet} from 'react-native';
import colors from './Colors';
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    marginBottom: 20,
  },
  drawerContainer: {
    flex: 1,
    backgroundColor: 'rgba(18, 41, 72, 1)',
  },
  title: {
    alignItems: 'center',
    marginTop:20,
  },
  titleText:{
    color:colors.primary,
    fontSize:18,
    fontWeight: '400',
  },
  closeButton:{
    alignItems: 'flex-end',
    paddingRight:30,
    paddingBottom:10,
    paddingTop:10,
  },
  menus:{
    flex: 1,
    flexDirection:'column',
  },
  btnBlockDisable:{
    backgroundColor:'rgba(18, 41, 72, 0.86)',
    height:50,alignItems:'center',
    justifyContent:'center',
    marginTop:20,
    margin:8,
    borderRadius:3,
  },
  btnBlock:{
    backgroundColor:colors.primary,
    height:50,
    justifyContent:'center',
    marginTop:20,
    margin:8,
    borderRadius:3,
    alignItems:'center',
  },
  errorBox:{
    marginLeft:12,
    marginRight:12,
    marginTop:20,
    padding:10,
    backgroundColor:'rgba(255,0,0,0.6)',
    borderRadius:3,
    justifyContent:'center',
  },
  menu:{
    height: 40,
    paddingLeft:0,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#ddd',
    justifyContent:'center',
    marginLeft:15,
    marginRight:15,
  },
  menuIcon:{
    fontSize: 22,
    paddingRight: 10,
    color: '#ddd',
  },
  profileMenu:{
    flex:1,
    flexDirection:'column',
    height: 60,
    justifyContent:'center',
    marginLeft: 15,
  },
  footer:{
    paddingBottom: 60,
  },
  navbarTitle:{
    color:'#333',
    fontWeight:'normal',
    fontSize:18,
    alignSelf: 'center',
    // fontWeight: 'bold',
    paddingTop:12,
    paddingBottom:12,
  },
  navbar:{
    alignItems:'center',
    backgroundColor:'rgb(233, 233, 233)',
    flexDirection:'row',
  },
})
export default Styles;