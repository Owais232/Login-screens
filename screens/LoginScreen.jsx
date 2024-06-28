import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const LoginScreen = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.loginScreen1}>
      <Image
        style={[styles.illustrationIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/illustration.png")}
      />
      <Image
        style={styles.backgroundIcon}
        resizeMode="cover"
        source={require("../assets/background.png")}
      />
      <View style={styles.objects}>
        <Image
          style={styles.frontShapesIcon}
          resizeMode="cover"
          source={require("../assets/front-shapes.png")}
        />
        <Image
          style={styles.frontShapesIcon1}
          resizeMode="cover"
          source={require("../assets/front-shapes1.png")}
        />
        <Image
          style={[styles.saly16Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/saly16.png")}
        />
      </View>
      <Pressable
        style={[styles.signinButton, styles.signinLayout]}
        onPress={() => navigation.navigate("LoginScreen1")}
      >
        <LinearGradient
          style={[styles.signinButtonChild, styles.signinLayout]}
          locations={[0, 1]}
          colors={["#9c3fe4", "#c65647"]}
          useAngle={true}
          angle={90.3}
        />
        <Text style={[styles.signIn, styles.signInFlexBox]}>Sign in</Text>
      </Pressable>
      <View style={styles.continueWith}>
        <Text style={[styles.orContinueWith, styles.signInFlexBox]}>
          Or continue with
        </Text>
        <Image
          style={[styles.continueWithChild, styles.continueLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-3.png")}
        />
        <Image
          style={[styles.continueWithItem, styles.continueLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-4.png")}
        />
      </View>
      <Image
        style={[styles.buttonsIcon, styles.buttonsIconLayout]}
        resizeMode="cover"
        source={require("../assets/buttons.png")}
      />
      <Image
        style={[styles.buttonsIcon1, styles.buttonsIconLayout]}
        resizeMode="cover"
        source={require("../assets/buttons1.png")}
      />
      <Image
        style={[styles.buttonsIcon2, styles.buttonsIconLayout]}
        resizeMode="cover"
        source={require("../assets/buttons2.png")}
      />
      <View style={[styles.username, styles.usernameLayout]}>
        <Image
          style={[styles.cardIcon, styles.usernameLayout]}
          resizeMode="cover"
          source={require("../assets/card.png")}
        />
        <Image
          style={[styles.vectorIcon, styles.vectorIconPosition]}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
        <Text style={[styles.username1, styles.passwordTypo]}>Username</Text>
      </View>
      <Text style={[styles.username2, styles.passwordTypo]}>Username</Text>
      <Text style={[styles.password, styles.passwordTypo]}>Password</Text>
      <Text style={[styles.password, styles.passwordTypo]}>Password</Text>
      <Text style={[styles.forgotPassword, styles.passwordTypo]}>
        Forgot Password?
      </Text>
      <View style={[styles.password2, styles.usernameLayout]}>
        <Image
          style={[styles.cardIcon, styles.usernameLayout]}
          resizeMode="cover"
          source={require("../assets/card1.png")}
        />
        <Image
          style={[styles.vectorIcon1, styles.vectorIconPosition]}
          resizeMode="cover"
          source={require("../assets/vector1.png")}
        />
        <Image
          style={[styles.vectorIcon2, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector2.png")}
        />
        <View style={styles.ellipseParent}>
          <Image
            style={styles.frameLayout}
            resizeMode="cover"
            source={require("../assets/ellipse-5.png")}
          />
          <Image
            style={[styles.frameItem, styles.frameLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-6.png")}
          />
          <Image
            style={[styles.frameItem, styles.frameLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-7.png")}
          />
          <Image
            style={[styles.frameItem, styles.frameLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-8.png")}
          />
          <Image
            style={[styles.frameItem, styles.frameLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-9.png")}
          />
          <Image
            style={[styles.frameItem, styles.frameLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-10.png")}
          />
          <Image
            style={[styles.frameItem, styles.frameLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-11.png")}
          />
          <Image
            style={[styles.frameItem, styles.frameLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-12.png")}
          />
          <Image
            style={[styles.frameItem, styles.frameLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-13.png")}
          />
        </View>
      </View>
      <View style={styles.title}>
        <Text style={[styles.welcomeBackWe, styles.passwordTypo]}>
          welcome back we missed you
        </Text>
        <Text style={[styles.welcomeBack, styles.signInFlexBox]}>
          Welcome Back!
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  signinLayout: {
    height: 50,
    width: 314,
    position: "absolute",
  },
  signInFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  continueLayout: {
    height: 1,
    width: 98,
    top: 8,
    position: "absolute",
  },
  buttonsIconLayout: {
    height: 44,
    width: 58,
    top: 712,
    position: "absolute",
  },
  usernameLayout: {
    height: 55,
    width: 314,
    position: "absolute",
  },
  vectorIconPosition: {
    left: "6.37%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  passwordTypo: {
    color: Color.colorDarkgray,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  frameLayout: {
    height: 5,
    width: 5,
  },
  illustrationIcon: {
    height: "42.17%",
    width: "100.47%",
    right: "0%",
    bottom: "57.83%",
    left: "-0.47%",
    top: "0%",
    maxWidth: "100%",
  },
  backgroundIcon: {
    top: 126,
    left: -215,
    width: 904,
    height: 1037,
    position: "absolute",
  },
  frontShapesIcon: {
    top: 16,
    width: 75,
    height: 81,
    left: 0,
    position: "absolute",
  },
  frontShapesIcon1: {
    top: 53,
    left: 352,
    width: 118,
    height: 98,
    position: "absolute",
  },
  saly16Icon: {
    height: "100%",
    width: "19.13%",
    right: "0.09%",
    bottom: "0%",
    left: "80.78%",
    top: "0%",
    maxWidth: "100%",
  },
  objects: {
    top: 230,
    left: -14,
    width: 470,
    height: 197,
    position: "absolute",
  },
  signinButtonChild: {
    borderRadius: Border.br_mini,
    backgroundColor: "transparent",
    top: 0,
    left: 0,
  },
  signIn: {
    top: 11,
    left: 126,
    fontSize: FontSize.size_mid_9,
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  signinButton: {
    top: 609,
    left: 65,
  },
  orContinueWith: {
    left: 105,
    color: Color.colorSilver,
    fontSize: FontSize.size_xs_3,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
    top: 0,
  },
  continueWithChild: {
    left: 0,
  },
  continueWithItem: {
    left: 205,
  },
  continueWith: {
    top: 677,
    left: 70,
    width: 303,
    height: 17,
    position: "absolute",
  },
  buttonsIcon: {
    left: 272,
  },
  buttonsIcon1: {
    left: 115,
  },
  buttonsIcon2: {
    left: 193,
  },
  cardIcon: {
    top: 0,
    left: 0,
  },
  vectorIcon: {
    height: "30.36%",
    width: "5.54%",
    top: "36.36%",
    right: "88.09%",
    bottom: "33.27%",
  },
  username1: {
    top: 17,
    fontSize: FontSize.size_mini_3,
    color: Color.colorDarkgray,
    left: 58,
  },
  username: {
    top: 409,
    left: 58,
  },
  username2: {
    top: 376,
    fontSize: FontSize.size_mini_3,
    color: Color.colorDarkgray,
    left: 58,
  },
  password: {
    top: 476,
    fontSize: FontSize.size_mini_3,
    color: Color.colorDarkgray,
    left: 58,
  },
  forgotPassword: {
    top: 568,
    left: 272,
    fontSize: FontSize.size_xs_3,
  },
  vectorIcon1: {
    height: "33.27%",
    width: "5.83%",
    top: "35.82%",
    right: "87.8%",
    bottom: "30.91%",
  },
  vectorIcon2: {
    height: "25.64%",
    width: "5.57%",
    top: "40%",
    right: "5.57%",
    bottom: "34.36%",
    left: "88.85%",
  },
  frameItem: {
    marginLeft: 3,
  },
  ellipseParent: {
    top: 25,
    flexDirection: "row",
    left: 58,
    position: "absolute",
  },
  password2: {
    top: 503,
    left: 59,
  },
  welcomeBackWe: {
    top: 52,
    left: 51,
    fontSize: FontSize.size_mini_3,
    color: Color.colorDarkgray,
  },
  welcomeBack: {
    fontSize: FontSize.size_21xl_3,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorWhitesmoke,
    top: 0,
    left: 0,
  },
  title: {
    top: 281,
    left: 55,
    width: 320,
    height: 73,
    position: "absolute",
  },
  loginScreen1: {
    borderRadius: Border.br_7xl,
    backgroundColor: Color.colorGray_100,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default LoginScreen;
