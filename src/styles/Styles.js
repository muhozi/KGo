import { StyleSheet } from 'react-native';
import colors from './Colors';
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  mapContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  homeMap: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  topSearchInputContainer: {
    flex: 12,
    top: 0,
    left: 0,
  },
  topSearchBarIcon:{
    flex:2,
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: 40,
    padding: 0,
    position: 'absolute',
    top: 10,
    left: 10,
    alignItems: 'flex-start',
    justifyContent: 'center',
    right: 10,
    zIndex: 2000,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#ccc',
  },
  searchBar2: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: 40,
    padding: 0,
    position: 'absolute',
    top: 60,
    left: 10,
    alignItems: 'flex-start',
    justifyContent: 'center',
    right: 10,
    zIndex: 2000,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#ccc',
  },
  bottomBigMenus: {
    flex: 1,
    flexDirection: 'column',
    height: 120,
    padding: 0,
    position: 'absolute',
    bottom: 5,
    left: 0,
    alignItems: 'flex-start',
    justifyContent: 'center',
    right: 0,
    zIndex: 2000,
  },
  bigMenuBar:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#ba5858',
    marginTop:5,
    borderColor: '#eee',
    padding:15,
    borderRadius: 30,
    marginLeft:5,
    marginRight:5,
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
    marginTop: 20,
  },
  titleText: {
    color: colors.primary,
    fontSize: 18,
    fontWeight: '400',
  },
  closeButton: {
    alignItems: 'flex-end',
    paddingRight: 30,
    paddingBottom: 10,
    paddingTop: 10,
  },
  menus: {
    flex: 1,
    flexDirection: 'column',
  },
  btnBlockDisable: {
    backgroundColor: 'rgba(18, 41, 72, 0.86)',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    margin: 8,
    borderRadius: 3,
  },
  btnBlock: {
    backgroundColor: colors.primary,
    height: 50,
    justifyContent: 'center',
    marginTop: 20,
    margin: 8,
    borderRadius: 3,
    alignItems: 'center',
  },
  errorBox: {
    marginLeft: 12,
    marginRight: 12,
    marginTop: 20,
    padding: 10,
    backgroundColor: 'rgba(255,0,0,0.6)',
    borderRadius: 3,
    justifyContent: 'center',
  },
  menu: {
    height: 40,
    paddingLeft: 0,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#ddd',
    justifyContent: 'center',
    marginLeft: 15,
    marginRight: 15,
  },
  menuIcon: {
    fontSize: 22,
    paddingRight: 10,
    color: '#ddd',
  },
  profileMenu: {
    flex: 1,
    flexDirection: 'column',
    height: 60,
    justifyContent: 'center',
    marginLeft: 15,
  },
  footer: {
    paddingBottom: 60,
  },
  navbarTitle: {
    color: '#333',
    fontWeight: 'normal',
    fontSize: 18,
    alignSelf: 'center',
    // fontWeight: 'bold',
    paddingTop: 12,
    paddingBottom: 12,
  },
  navbar: {
    alignItems: 'center',
    backgroundColor: 'rgb(233, 233, 233)',
    flexDirection: 'row',
  },
});
export default Styles;
