import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const LoginScreen1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.loginScreen2}>
      <Image
        style={[styles.saly16Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/saly161.png")}
      />
      <View style={styles.illustration}>
        <Image
          style={[styles.avatarIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/avatar.png")}
        />
        <Image
          style={styles.illustrationChild}
          resizeMode="cover"
          source={require("../assets/ellipse-14.png")}
        />
        <Image
          style={[styles.image1Icon, styles.strongPosition]}
          resizeMode="cover"
          source={require("../assets/image-1.png")}
        />
      </View>
      <Image
        style={styles.backgroundIcon}
        resizeMode="cover"
        source={require("../assets/background1.png")}
      />
      <View style={styles.title}>
        <Text style={styles.getStartedFree}>Get Started Free</Text>
        <Text style={[styles.freeForeverNo, styles.yourNameTypo]}>
          Free Forever. No Credit Card Needed
        </Text>
      </View>
      <Pressable
        style={[styles.signupButton, styles.signupLayout1]}
        onPress={() => navigation.navigate("LoginScreen")}
      >
        <LinearGradient
          style={[styles.signupButtonChild, styles.signupLayout1]}
          locations={[0, 1]}
          colors={["#9c3fe4", "#c65647"]}
          useAngle={true}
          angle={90.3}
        />
        <Text style={[styles.signUp, styles.signTypo]}>Sign up</Text>
      </Pressable>
      <View style={[styles.name, styles.nameLayout]}>
        <Image
          style={[styles.cardIcon, styles.nameLayout]}
          resizeMode="cover"
          source={require("../assets/card2.png")}
        />
        <Image
          style={[styles.vectorIcon, styles.vectorIconPosition]}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
        <Text style={[styles.yourname, styles.yournameTypo]}>@yourname</Text>
      </View>
      <Text style={[styles.emailAdress, styles.yourNameTypo]}>
        Email Adress
      </Text>
      <Text style={[styles.yourName, styles.yourNameTypo]}>Your Name</Text>
      <Text style={[styles.password, styles.yourNameTypo]}>Password</Text>
      <Text style={[styles.password, styles.yourNameTypo]}>Password</Text>
      <View style={[styles.password2, styles.nameLayout]}>
        <Image
          style={[styles.cardIcon, styles.nameLayout]}
          resizeMode="cover"
          source={require("../assets/card3.png")}
        />
        <Image
          style={[styles.vectorIcon1, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector1.png")}
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
            source={require("../assets/ellipse-81.png")}
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
        <View style={[styles.strong, styles.strongPosition]}>
          <Text style={[styles.strong1, styles.signTypo]}>Strong</Text>
          <View style={[styles.strongChild, styles.strongLayout]} />
          <View style={[styles.strongItem, styles.strongLayout]} />
          <View style={[styles.strongInner, styles.strongLayout]} />
        </View>
      </View>
      <View style={styles.signupWith}>
        <Text style={[styles.orSignUp, styles.signTypo]}>Or sign up with</Text>
        <Image
          style={[styles.signupWithChild, styles.signupLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-3.png")}
        />
        <Image
          style={[styles.signupWithItem, styles.signupLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-4.png")}
        />
      </View>
      <Image
        style={[styles.buttonsIcon, styles.buttonsIconLayout]}
        resizeMode="cover"
        source={require("../assets/buttons3.png")}
      />
      <Image
        style={[styles.buttonsIcon1, styles.buttonsIconLayout]}
        resizeMode="cover"
        source={require("../assets/buttons4.png")}
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
          source={require("../assets/front-shapes2.png")}
        />
        <Image
          style={[styles.frontShapesIcon2, styles.frontIconLayout]}
          resizeMode="cover"
          source={require("../assets/front-shapes3.png")}
        />
        <Image
          style={[styles.frontShapesIcon3, styles.frontIconLayout]}
          resizeMode="cover"
          source={require("../assets/front-shapes4.png")}
        />
      </View>
      <View style={[styles.email, styles.nameLayout]}>
        <Image
          style={[styles.cardIcon, styles.nameLayout]}
          resizeMode="cover"
          source={require("../assets/email.png")}
        />
        <Text style={[styles.yournamegmailcom, styles.yournameTypo]}>
          yourname@gmail.com
        </Text>
        <Image
          style={[styles.vectorIcon2, styles.vectorIconPosition]}
          resizeMode="cover"
          source={require("../assets/vector3.png")}
        />
      </View>
      <Image
        style={[styles.buttonsIcon2, styles.buttonsIconLayout]}
        resizeMode="cover"
        source={require("../assets/buttons5.png")}
      />
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
  strongPosition: {
    top: 20,
    position: "absolute",
  },
  yourNameTypo: {
    color: Color.colorDarkgray,
    fontSize: FontSize.size_mini_3,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  signupLayout1: {
    height: 50,
    width: 314,
    position: "absolute",
  },
  signTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  nameLayout: {
    height: 55,
    width: 314,
    position: "absolute",
  },
  vectorIconPosition: {
    top: "36.36%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  yournameTypo: {
    top: 17,
    color: Color.colorDarkgray,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_mini_3,
    textAlign: "left",
    position: "absolute",
  },
  frameLayout: {
    height: 5,
    width: 5,
  },
  strongLayout: {
    height: 2,
    width: 11,
    borderRadius: Border.br_3xs,
    top: 8,
    position: "absolute",
  },
  signupLayout: {
    height: 1,
    width: 98,
    top: 8,
    position: "absolute",
  },
  buttonsIconLayout: {
    height: 44,
    width: 58,
    top: 793,
    position: "absolute",
  },
  frontIconLayout: {
    height: 98,
    width: 118,
    position: "absolute",
  },
  saly16Icon: {
    height: "21.14%",
    width: "20.93%",
    top: "24.68%",
    right: "-6.05%",
    bottom: "54.18%",
    left: "85.12%",
  },
  avatarIcon: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    width: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  illustrationChild: {
    top: 15,
    left: 85,
    width: 40,
    height: 40,
    position: "absolute",
  },
  image1Icon: {
    left: 89,
    width: 24,
    height: 30,
  },
  illustration: {
    height: "25.54%",
    width: "78.6%",
    top: "0.86%",
    right: "-12.79%",
    bottom: "73.61%",
    left: "34.19%",
    position: "absolute",
  },
  backgroundIcon: {
    top: 126,
    left: -215,
    width: 904,
    height: 1037,
    position: "absolute",
  },
  getStartedFree: {
    fontSize: FontSize.size_21xl_3,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorWhitesmoke,
    textAlign: "left",
    left: 0,
    top: 0,
    position: "absolute",
  },
  freeForeverNo: {
    top: 52,
    left: 24,
  },
  title: {
    top: 281,
    left: 51,
    width: 330,
    height: 73,
    position: "absolute",
  },
  signupButtonChild: {
    borderRadius: Border.br_mini,
    backgroundColor: "transparent",
    left: 0,
    top: 0,
  },
  signUp: {
    top: 11,
    left: 130,
    fontSize: FontSize.size_mid_9,
    color: Color.colorWhite,
  },
  signupButton: {
    top: 689,
    left: 58,
  },
  cardIcon: {
    left: 0,
    top: 0,
  },
  vectorIcon: {
    height: "30.36%",
    width: "5.54%",
    right: "87.77%",
    bottom: "33.27%",
    left: "6.69%",
  },
  yourname: {
    left: 57,
  },
  name: {
    top: 513,
    left: 59,
    height: 55,
  },
  emailAdress: {
    top: 386,
    left: 58,
  },
  yourName: {
    top: 486,
    left: 58,
  },
  password: {
    top: 580,
    left: 58,
  },
  vectorIcon1: {
    height: "33.27%",
    width: "5.83%",
    top: "35.82%",
    right: "87.8%",
    bottom: "30.91%",
    left: "6.37%",
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
  strong1: {
    left: 44,
    fontSize: 10,
    color: "#9fdba1",
    top: 0,
  },
  strongChild: {
    left: 28,
    backgroundColor: "#909090",
  },
  strongItem: {
    left: 14,
    backgroundColor: "#4caf50",
  },
  strongInner: {
    backgroundColor: "#009606",
    left: 0,
  },
  strong: {
    left: 223,
    width: 79,
    height: 16,
  },
  password2: {
    top: 607,
    left: 59,
    height: 55,
  },
  orSignUp: {
    left: 109,
    fontSize: FontSize.size_xs_3,
    color: Color.colorSilver,
    top: 0,
  },
  signupWithChild: {
    left: 0,
  },
  signupWithItem: {
    left: 205,
  },
  signupWith: {
    top: 758,
    left: 63,
    width: 303,
    height: 17,
    position: "absolute",
  },
  buttonsIcon: {
    left: 265,
  },
  buttonsIcon1: {
    left: 186,
  },
  frontShapesIcon: {
    top: 283,
    width: 75,
    height: 81,
    left: 0,
    position: "absolute",
  },
  frontShapesIcon1: {
    top: 18,
    left: 10,
    width: 134,
    height: 128,
    position: "absolute",
  },
  frontShapesIcon2: {
    top: 320,
    left: 352,
  },
  frontShapesIcon3: {
    left: 359,
    top: 0,
  },
  objects: {
    top: -37,
    left: -14,
    width: 477,
    height: 418,
    position: "absolute",
  },
  yournamegmailcom: {
    left: 58,
  },
  vectorIcon2: {
    height: "27.27%",
    width: "6.05%",
    right: "86.94%",
    bottom: "36.36%",
    left: "7.01%",
  },
  email: {
    top: 419,
    left: 58,
  },
  buttonsIcon2: {
    left: 108,
  },
  loginScreen2: {
    borderRadius: Border.br_7xl,
    backgroundColor: Color.colorGray_100,
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default LoginScreen1;
