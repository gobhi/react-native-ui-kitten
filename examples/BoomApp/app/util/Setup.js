import {RkConfig} from 'react-native-ui-kit';

RkConfig.setColor('blurText', 'rgba(255,255,255,0.7)');
RkConfig.setColor('blurTextStrong', 'rgba(255,255,255,0.9)');
RkConfig.setColor('blurBg', 'rgba(0,0,0,0.1)');
RkConfig.setColor('blurBgWhite', 'rgba(255,255,255,0.1)');
RkConfig.setColor('blurBg', 'rgba(0,0,0,0.1)');
RkConfig.setColor('blurBgStrong', 'rgba(0,0,0,0.3)');
RkConfig.setColor('blurPrimary', '#00e5bf');
RkConfig.setColor('blurDark', '#15213b');
RkConfig.setColor('blurExtraDark', '#0b162a');
RkConfig.setType('text', 'blurText', {
  color: RkConfig.colors.blurTextStrong
});
RkConfig.setType('text', 'primary', {
  color: RkConfig.colors.primary
});
RkConfig.setType('text', 'montserrat', {
  fontFamily: 'Montserrat-Regular'
});
RkConfig.setType('text', 'transparentBg', {
  backgroundColor: 'transparent'
});
RkConfig.setType('button', 'iconButton', {
  container: {
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  inner: {
    fontSize: 26
  },
});

RkConfig.setType('input', 'classic', {
  input: {
    fontSize: 20,
    color: RkConfig.colors.primary
  },
  container: {
    borderBottomColor: RkConfig.colors.darkGray,
    marginTop: 40
  },
  label: {
    paddingBottom: 15
  }
});


RkConfig.setType('card', 'classic', {
  container: {
    borderRadius: 15,
    marginHorizontal: 10,
    marginTop: 0,
    marginBottom: 15,
    borderWidth: 0,
  },
  content:{
    padding: 0,
    backgroundColor: RkConfig.colors.white
  },
  title: {
    fontSize: 16,
    color: RkConfig.colors.primary
  },
  subTitle: {
    fontSize: 12,
    color: RkConfig.colors.primary
  },
  avatarSmall:{
    width: 48,
    height: 48,
    borderRadius: 24
  },
  header: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: RkConfig.colors.white,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  footer: {
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: RkConfig.colors.white,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  friendContainer:{
    marginBottom: 0,
    marginHorizontal: 0,
    borderBottomColor: RkConfig.colors.lightGray,
    borderBottomWidth: 1
  },
  friendTitle:{
    marginHorizontal: 10,
    fontSize: 14
  },
  friendHeader:{
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  chatItem:{
    marginHorizontal: 0,
    marginBottom: 0,
    alignItems: 'flex-start'
  },
  chatSubtitle:{
    color: RkConfig.colors.gray
  },
  icon:{
    fontSize: 27,
    color: RkConfig.colors.primary
  },
  headerBorder:{
    marginBottom: 0,
    borderBottomWidth: 1,
    borderBottomColor: RkConfig.colors.lightGray
  }
});

RkConfig.setType('card', 'blur', {
  container: {
    borderRadius: 0,
    marginHorizontal: 0,
    shadowOpacity: 0,
    shadowRadius: 0,
    shadowOffset: {
      height: 0,
      width: 0
    }
  },
  content:{
    backgroundColor: RkConfig.colors.blurDark
  },
  title: {
    marginBottom: 3,
    color: RkConfig.colors.blurTextStrong
  },
  subTitle: {
    color: RkConfig.colors.blurText
  },
  header: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    backgroundColor: RkConfig.colors.blurDark,
  },
  footer: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: RkConfig.colors.blurDark,
  },
  friendContainer:{
    borderBottomColor: RkConfig.colors.blurExtraDark,
  },
  friendTitle:{
    fontSize: 16
  },
  chatItem:{
    marginTop: 10,
    marginRight: 10,
    backgroundColor: RkConfig.colors.blurBg,
    borderWidth: 0.1,
    paddingLeft: 5,
    borderColor: RkConfig.colors.blurBgStrong,
    borderLeftWidth: 5,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
  chatAvatar:{
    borderRadius: 28,
    marginLeft: 0,
    height: 56,
    width: 56,
  },
  chatSubtitle:{
    color: RkConfig.colors.blurText
  },
  icon:{
    color: 'white'
  },
  headerBorder:{
    backgroundColor: RkConfig.colors.blurBgStrong,
    borderBottomWidth: 1,
    borderBottomColor: RkConfig.colors.blurExtraDark
  },
});

RkConfig.setTheme('blur', {
  text: {
    defaultType: 'white montserrat transparentBg blurText'
  },
  card: {
    defaultType: 'classic blur',
  }
});

RkConfig.setTheme('classic', {
  text: {
    defaultType: 'montserrat transparentBg primary'
  },
  card: {
    defaultType: 'classic',
  }
});



RkConfig.setStyle('backgroundImage', {
  flex: 1,
  width: null,
  height: null,
  resizeMode: 'cover',
  justifyContent: 'center',
  alignItems: 'stretch'
});

export default {}