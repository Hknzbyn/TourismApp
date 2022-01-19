// import React from 'react';
// import {
//   View,
//   Text,
//   Image,
//   ScrollView,
//   StyleSheet,
//   Dimensions,
// } from 'react-native';
// import { Svg, Path } from 'react-native-svg';

// import { useFonts, Roboto_400Regular } from '@expo-google-fonts';

// export default function LoginScreen() {
//   let [fontsLoaded] = useFonts({
//     Roboto: Roboto_400Regular,
//   });

//   return (
//     <ScrollView
//       bounces={false}
//       showsVerticalScrollIndicator={false}
//       style={{ height: Dimensions.get('window').height }}>
//       <View style={stylesheet._LoginScreen}>
//         <Image
//           style={stylesheet._Bg_Image}
//           source={{ uri: imageUrl_Bg_Image }}></Image>
//         <View style={stylesheet._Header_}>
//           <View style={stylesheet._Rectangle_4}></View>
//           <View style={stylesheet._Group_2}>
//             <View style={stylesheet._Group_1}>
//               <View style={stylesheet._Rectangle_4_2}></View>
//             </View>
//             <Svg style={stylesheet._Vector} fill={'rgba(255, 255, 255, 1)'}>
//               <Path
//                 fillRule={'nonzero'}
//                 d={
//                   'M 15 6.001252174377441 L 3.1399998664855957 6.001252174377441 L 6.770000457763672 1.641252040863037 C 6.939739018678665 1.4370353370904922 7.021400449797511 1.1737548112869263 6.997020721435547 0.9093285202980042 C 6.972640993073583 0.644902229309082 6.844217047095299 0.4009907990694046 6.640000343322754 0.23125223815441132 C 6.435783639550209 0.06151367723941803 6.17250257730484 -0.020148227456957102 5.908076286315918 0.004231500905007124 C 5.643649995326996 0.02861122926697135 5.399738103151321 0.15703566372394562 5.229999542236328 0.3612523674964905 L 0.23000001907348633 6.3612518310546875 C 0.19636069983243942 6.408976152539253 0.16627929359674454 6.459112145006657 0.1399998664855957 6.511252403259277 C 0.1399998664855957 6.561252404004335 0.14000017195940018 6.591252516955137 0.07000017166137695 6.641252517700195 C 0.02467365562915802 6.755911193788052 0.0009411213104613125 6.877962999045849 0 7.001252174377441 C 0.0009411213104613125 7.124541349709034 0.02467365562915802 7.246593154966831 0.07000017166137695 7.3612518310546875 C 0.07000017166137695 7.411251831799746 0.06999986618757248 7.441251944750547 0.1399998664855957 7.4912519454956055 C 0.16627929359674454 7.543392203748226 0.19636069983243942 7.59352819621563 0.23000001907348633 7.641252517700195 L 5.229999542236328 13.641251564025879 C 5.32402229309082 13.754134334623814 5.441762328147888 13.844914898276329 5.574846267700195 13.907135963439941 C 5.707930207252502 13.969357028603554 5.853089347481728 14.00149075659283 6 14.001252174377441 C 6.233652159571648 14.001708687399514 6.460088282823563 13.920333787798882 6.640000343322754 13.771252632141113 C 6.741258814930916 13.68730354309082 6.8249604888260365 13.584201648831367 6.886312484741211 13.467854499816895 C 6.947664480656385 13.351507350802422 6.985460791736841 13.224201247096062 6.997536659240723 13.09322452545166 C 7.009612526744604 12.962247803807259 6.995730504393578 12.830175295472145 6.956686019897461 12.704571723937988 C 6.917641535401344 12.578968152403831 6.854202434420586 12.462301068007946 6.770000457763672 12.361252784729004 L 3.1399998664855957 8.001252174377441 L 15 8.001252174377441 C 15.265216499567032 8.001252174377441 15.519571170210838 7.895895138382912 15.707107543945312 7.7083587646484375 C 15.894643917679787 7.520822390913963 16 7.266468673944473 16 7.001252174377441 C 16 6.7360356748104095 15.894643917679787 6.4816819578409195 15.707107543945312 6.294145584106445 C 15.519571170210838 6.106609210371971 15.265216499567032 6.001252174377441 15 6.001252174377441 Z'
//                 }
//                 strokeLinejoin={'miter'}
//               />
//             </Svg>
//           </View>
//         </View>
//         <View style={stylesheet._Rectangle_6}></View>
//         <View style={stylesheet._Password_Input}>
//           <View style={stylesheet._Rectangle_1}></View>
//           <View
//             style={[
//               stylesheet._PASSWORD,
//               { display: 'flex', flexDirection: 'row', alignItems: 'center' },
//             ]}>
//             <Text
//               style={[
//                 stylesheet._PASSWORD,
//                 {
//                   position: 'relative',
//                   left: 0,
//                   top: 0,
//                   height: 'auto',
//                   transform: [{ translateX: 0 }, { translateY: 0 }],
//                 },
//               ]}>
//               PASSWORD
//             </Text>
//           </View>
//         </View>
//         <View style={stylesheet._Mail_Number_Area}>
//           <View style={stylesheet._Group_17}>
//             <View style={stylesheet._Rectangle_1_2}></View>
//             <View
//               style={[
//                 stylesheet._EMAIL_ADRESS_OR_MOB_LE_PHONE,
//                 { display: 'flex', flexDirection: 'row', alignItems: 'center' },
//               ]}>
//               <Text
//                 style={[
//                   stylesheet._EMAIL_ADRESS_OR_MOB_LE_PHONE,
//                   {
//                     position: 'relative',
//                     left: 0,
//                     top: 0,
//                     height: 'auto',
//                     transform: [{ translateX: 0 }, { translateY: 0 }],
//                   },
//                 ]}>
//                 EMAIL ADRESS OR MOBİLE PHONE
//               </Text>
//             </View>
//           </View>
//         </View>
//         <View style={stylesheet._Button_Login}>
//           <View style={stylesheet._Rectangle_1_3}></View>
//           <View
//             style={[
//               stylesheet._LOG_IN,
//               { display: 'flex', flexDirection: 'row', alignItems: 'center' },
//             ]}>
//             <Text
//               style={[
//                 stylesheet._LOG_IN,
//                 {
//                   position: 'relative',
//                   left: 0,
//                   top: 0,
//                   height: 'auto',
//                   transform: [{ translateX: 0 }, { translateY: 0 }],
//                 },
//               ]}>
//               LOG IN
//             </Text>
//           </View>
//         </View>
//         <View style={stylesheet._Title_Area}>
//           <View
//             style={[
//               stylesheet._TOURZ_O,
//               { display: 'flex', flexDirection: 'row', alignItems: 'center' },
//             ]}>
//             <Text
//               style={[
//                 stylesheet._TOURZ_O,
//                 {
//                   position: 'relative',
//                   left: 0,
//                   top: 0,
//                   height: 'auto',
//                   transform: [{ translateX: 0 }, { translateY: 0 }],
//                 },
//               ]}>
//               TOURZİO
//             </Text>
//           </View>
//           <View
//             style={[
//               stylesheet._W_E_S_T_A_Y_F_O_R_Y_O_U,
//               { display: 'flex', flexDirection: 'row', alignItems: 'center' },
//             ]}>
//             <Text
//               style={[
//                 stylesheet._W_E_S_T_A_Y_F_O_R_Y_O_U,
//                 {
//                   position: 'relative',
//                   left: 0,
//                   top: 0,
//                   height: 'auto',
//                   transform: [{ translateX: 0 }, { translateY: 0 }],
//                 },
//               ]}>
//               W E S T A Y F O R Y O U
//             </Text>
//           </View>
//         </View>
//         <View
//           style={[
//             stylesheet._FORGOT_PASSWORD_,
//             { display: 'flex', flexDirection: 'row', alignItems: 'center' },
//           ]}>
//           <Text
//             style={[
//               stylesheet._FORGOT_PASSWORD_,
//               {
//                 position: 'relative',
//                 left: 0,
//                 top: 0,
//                 height: 'auto',
//                 transform: [{ translateX: 0 }, { translateY: 0 }],
//               },
//             ]}>
//             FORGOT PASSWORD?
//           </Text>
//         </View>
//         <View
//           style={[
//             stylesheet._OR,
//             { display: 'flex', flexDirection: 'row', alignItems: 'center' },
//           ]}>
//           <Text
//             style={[
//               stylesheet._OR,
//               {
//                 position: 'relative',
//                 left: 0,
//                 top: 0,
//                 height: 'auto',
//                 transform: [{ translateX: 0 }, { translateY: 0 }],
//               },
//             ]}>
//             OR
//           </Text>
//         </View>
//         <View
//           style={[
//             stylesheet._Login_with,
//             { display: 'flex', flexDirection: 'row', alignItems: 'center' },
//           ]}>
//           <Text
//             style={[
//               stylesheet._Login_with,
//               {
//                 position: 'relative',
//                 left: 0,
//                 top: 0,
//                 height: 'auto',
//                 transform: [{ translateX: 0 }, { translateY: 0 }],
//               },
//             ]}>
//             Login with
//           </Text>
//         </View>
//         <View
//           style={[
//             stylesheet._New_to_Tourzio_,
//             { display: 'flex', flexDirection: 'row', alignItems: 'center' },
//           ]}>
//           <Text
//             style={[
//               stylesheet._New_to_Tourzio_,
//               {
//                 position: 'relative',
//                 left: 0,
//                 top: 0,
//                 height: 'auto',
//                 transform: [{ translateX: 0 }, { translateY: 0 }],
//               },
//             ]}>
//             New to Tourzio?
//           </Text>
//         </View>
//         <View
//           style={[
//             stylesheet._SignUp,
//             { display: 'flex', flexDirection: 'row', alignItems: 'center' },
//           ]}>
//           <Text
//             style={[
//               stylesheet._SignUp,
//               {
//                 position: 'relative',
//                 left: 0,
//                 top: 0,
//                 height: 'auto',
//                 transform: [{ translateX: 0 }, { translateY: 0 }],
//               },
//             ]}>
//             SignUp
//           </Text>
//         </View>
//         <View style={stylesheet._Group_24}>
//           <View style={stylesheet._Login_Google}>
//             <View style={stylesheet._Rectangle_11}></View>
//             <View style={stylesheet._Group_22}>
//               <View style={stylesheet._Group_10}>
//                 <View style={stylesheet._Group_11}>
//                   <View style={stylesheet._Group_9}>
//                     <View style={stylesheet._Rectangle_10}></View>
//                     <Svg
//                       style={stylesheet._Vector_2}
//                       fill={'rgba(255, 255, 255, 1)'}>
//                       <Path
//                         fillRule={'nonzero'}
//                         d={
//                           'M 17.545000076293945 9.07699966430664 L 17.545000076293945 6.65600061416626 L 19.966999053955078 6.65600061416626 L 19.966999053955078 4.841000080108643 L 17.545000076293945 4.841000080108643 L 17.545000076293945 2.4200003147125244 L 15.729999542236328 2.4200003147125244 L 15.729999542236328 4.841000080108643 L 13.309000015258789 4.841000080108643 L 13.309000015258789 6.65600061416626 L 15.729999542236328 6.65600061416626 L 15.729999542236328 9.07699966430664 L 17.545000076293945 9.07699966430664 Z M 6.052000045776367 2.3540003299713135 C 7.185000061988831 2.3540003299713135 7.947999984025955 2.838000237941742 8.381999969482422 3.250000238418579 L 10.104000091552734 1.5800001621246338 C 9.056000113487244 0.6000001430511475 7.6890000104904175 2.7645981504065276e-7 6.052000045776367 2.7645981504065276e-7 C 2.7139999866485596 -0.0009997235876824107 0 2.711000442504883 0 6.052000522613525 C 0 9.393000602722168 2.7139999866485596 12.104999542236328 6.052000045776367 12.104999542236328 C 9.545000076293945 12.104999542236328 11.86400032043457 9.648000955581665 11.86400032043457 6.192000865936279 C 11.86400032043457 5.689000844955444 11.800000444054604 5.332000136375427 11.711000442504883 4.952000141143799 L 6.048999786376953 4.952000141143799 L 6.048999786376953 7.208000659942627 L 9.380999565124512 7.208000659942627 C 9.222999557852745 8.159000635147095 8.370000123977661 9.763999938964844 6.052000045776367 9.763999938964844 C 4.049000024795532 9.763999938964844 2.4149999618530273 8.099000930786133 2.4149999618530273 6.060000896453857 C 2.4149999618530273 4.018000841140747 4.049000024795532 2.3540003299713135 6.052000045776367 2.3540003299713135 Z'
//                         }
//                         strokeLinejoin={'miter'}
//                       />
//                     </Svg>
//                   </View>
//                 </View>
//               </View>
//               <View
//                 style={[
//                   stylesheet._GOOGLE,
//                   {
//                     display: 'flex',
//                     flexDirection: 'row',
//                     alignItems: 'center',
//                   },
//                 ]}>
//                 <Text
//                   style={[
//                     stylesheet._GOOGLE,
//                     {
//                       position: 'relative',
//                       left: 0,
//                       top: 0,
//                       height: 'auto',
//                       transform: [{ translateX: 0 }, { translateY: 0 }],
//                     },
//                   ]}>
//                   GOOGLE
//                 </Text>
//               </View>
//             </View>
//           </View>
//           <View style={stylesheet._Login_Twitter}>
//             <View style={stylesheet._Rectangle_10_2}></View>
//             <View style={stylesheet._Group_13}>
//               <View style={stylesheet._Rectangle_11_2}></View>
//               <View style={stylesheet._Group}>
//                 <Svg
//                   style={stylesheet._Vector_3}
//                   fill={'rgba(255, 255, 255, 1)'}>
//                   <Path
//                     fillRule={'nonzero'}
//                     d={
//                       'M 22.70599937438965 2.1895182132720947 C 21.87099939584732 2.5595182180404663 20.97400015592575 2.8095184937119484 20.0310001373291 2.922518491744995 C 21.00400072336197 2.340310752391815 21.73194345831871 1.4239846467971802 22.07900047302246 0.34451842308044434 C 21.164845764636993 0.8875079154968262 20.16434645652771 1.2697135359048843 19.121000289916992 1.4745185375213623 C 18.419380366802216 0.7253835201263428 17.490061402320862 0.2288445569574833 16.477325439453125 0.06199239566922188 C 15.464589476585388 -0.10485976561903954 14.425097584724426 0.06730988621711731 13.520237922668457 0.5517711639404297 C 12.615378260612488 1.036232441663742 11.895776063203812 1.8058802485466003 11.473154067993164 2.7412221431732178 C 11.050532072782516 3.676564037799835 10.948535412549973 4.7252684235572815 11.182999610900879 5.724518299102783 C 9.330686569213867 5.631514497101307 7.518627762794495 5.150067627429962 5.864424228668213 4.311423301696777 C 4.210220694541931 3.4727789759635925 2.7508411407470703 2.2956796884536743 1.5809998512268066 0.8565185070037842 C 1.1809998452663422 1.5465185046195984 0.9510000348091125 2.3465185165405273 0.9510000348091125 3.1985185146331787 C 0.9505537269869819 3.9655137062072754 1.139432668685913 4.720760643482208 1.5008785724639893 5.397250652313232 C 1.8623244762420654 6.073740661144257 2.385161340236664 6.650556445121765 3.0230000019073486 7.076518535614014 C 2.283276319503784 7.052981028333306 1.5598730444908142 6.853102117776871 0.9130000472068787 6.493518352508545 L 0.9130000472068787 6.553517818450928 C 0.9129254295694409 7.629258871078491 1.2850326895713806 8.67189645767212 1.9661829471588135 9.504514694213867 C 2.6473332047462463 10.337132930755615 3.595571517944336 10.908448502421379 4.650000095367432 11.121519088745117 C 3.963783621788025 11.307233974337578 3.244337558746338 11.334589257836342 2.5460000038146973 11.201519012451172 C 2.84349724650383 12.127131700515747 3.422995448112488 12.93654477596283 4.203367233276367 13.516444206237793 C 4.983739018440247 14.096343636512756 5.925916969776154 14.417698247358203 6.898000240325928 14.435519218444824 C 5.2478333711624146 15.730930209159851 3.2098872661590576 16.43360738013871 1.1119999885559082 16.430517196655273 C 0.7403810322284698 16.430618668018724 0.36907628178596497 16.40891607478261 0 16.36551856994629 C 2.1294760704040527 17.7346932888031 4.608340263366699 18.461339315399528 7.139999866485596 18.45851707458496 C 15.709999561309814 18.458517074584957 20.395000457763672 11.360518455505371 20.395000457763672 5.2045183181762695 C 20.395000457763672 5.004518315196037 20.390000518411398 4.802518084645271 20.381000518798828 4.602518081665039 C 21.29229199886322 3.9434925317764282 22.078910768032074 3.127414047718048 22.70400047302246 2.192518472671509 L 22.70599937438965 2.1895182132720947 L 22.70599937438965 2.1895182132720947 Z'
//                     }
//                     strokeLinejoin={'miter'}
//                   />
//                 </Svg>
//               </View>
//             </View>
//             <View
//               style={[
//                 stylesheet._TWITTER,
//                 { display: 'flex', flexDirection: 'row', alignItems: 'center' },
//               ]}>
//               <Text
//                 style={[
//                   stylesheet._TWITTER,
//                   {
//                     position: 'relative',
//                     left: 0,
//                     top: 0,
//                     height: 'auto',
//                     transform: [{ translateX: 0 }, { translateY: 0 }],
//                   },
//                 ]}>
//                 TWITTER
//               </Text>
//             </View>
//           </View>
//           <View style={stylesheet._Group_21}>
//             <View style={stylesheet._Rectangle_9}></View>
//             <View style={stylesheet._Group_12}>
//               <View style={stylesheet._Group_3}>
//                 <Svg
//                   style={stylesheet._Vector_4}
//                   fill={'rgba(251, 248, 248, 1)'}>
//                   <Path
//                     fillRule={'nonzero'}
//                     d={
//                       'M 2.3959999084472656 19 L 6.395999908447266 19 L 6.395999908447266 10.989999771118164 L 10 10.989999771118164 L 10.395999908447266 7.010000228881836 L 6.395999908447266 7.010000228881836 L 6.395999908447266 5 C 6.395999908447266 4.734783500432968 6.501356944441795 4.480429783463478 6.6888933181762695 4.292893409729004 C 6.876429691910744 4.10535703599453 7.130783408880234 3.999999999999999 7.395999908447266 4 L 10.395999908447266 4 L 10.395999908447266 0 L 7.395999908447266 0 C 6.069917440414429 0 4.798147916793823 0.5267841815948486 3.8604660034179688 1.4644660949707031 C 2.9227840900421143 2.4021480083465576 2.3959999084472656 3.673917531967163 2.3959999084472656 5 L 2.3959999084472656 7.010000228881836 L 0.3959999084472656 7.010000228881836 L 0 10.989999771118164 L 2.3959999084472656 10.989999771118164 L 2.3959999084472656 19 Z'
//                     }
//                     strokeLinejoin={'miter'}
//                   />
//                 </Svg>
//               </View>
//               <View style={stylesheet._Rectangle_12}></View>
//             </View>
//             <View
//               style={[
//                 stylesheet._FACEBOOK,
//                 { display: 'flex', flexDirection: 'row', alignItems: 'center' },
//               ]}>
//               <Text
//                 style={[
//                   stylesheet._FACEBOOK,
//                   {
//                     position: 'relative',
//                     left: 0,
//                     top: 0,
//                     height: 'auto',
//                     transform: [{ translateX: 0 }, { translateY: 0 }],
//                   },
//                 ]}>
//                 FACEBOOK
//               </Text>
//             </View>
//           </View>
//         </View>
//       </View>
//     </ScrollView>
//   );
// }

// const stylesheet = StyleSheet.create({
//   _LoginScreen: {
//     position: 'relative',
//     width: Dimensions.get('window').width,
//     height: 844,
//     borderRadius: 0,
//     overflow: 'hidden',
//     transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
//     backgroundColor: 'rgba(255, 255, 255, 1)',
//   },
//   _Bg_Image: {
//     position: 'absolute',
//     width: 562,
//     height: 844,
//     borderRadius: 0,
//     opacity: 1,
//     left: -86,
//     right: 'auto',
//     top: 0,
//     bottom: 'auto',
//     transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
//     backgroundColor: 'rgba(0,0,0,0)',
//   },
//   _Header_: {
//     position: 'absolute',
//     width: 390,
//     height: 70,
//     transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
//     overflow: 'hidden',
//     backgroundColor: 'rgba(0,0,0,0)',
//   },
//   _Rectangle_4: {
//     position: 'absolute',
//     width: 390,
//     height: 70,
//     borderRadius: 0,
//     opacity: 1,
//     left: 0,
//     right: 'auto',
//     top: 0,
//     bottom: 'auto',
//     transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
//     backgroundColor: 'rgba(196, 196, 196, 1)',
//   },
//   _Group_2: {
//     position: 'absolute',
//     width: 78,
//     height: 70,
//     transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
//     overflow: 'hidden',
//     backgroundColor: 'rgba(0,0,0,0)',
//   },
//   _Group_1: {
//     position: 'absolute',
//     width: 78,
//     height: 70,
//     transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
//     overflow: 'hidden',
//     backgroundColor: 'rgba(0,0,0,0)',
//   },
//   _Rectangle_4_2: {
//     position: 'absolute',
//     width: 78,
//     height: 70,
//     borderRadius: 0,
//     opacity: 1,
//     left: 0,
//     right: 'auto',
//     top: 0,
//     bottom: 'auto',
//     transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
//     backgroundColor: 'rgba(196, 196, 196, 1)',
//   },
//   _Vector: {
//     position: 'absolute',
//     color: 'rgba(255, 255, 255, 1)',
//     width: 'auto',
//     height: 14.001254081726074,
//     borderRadius: 0,
//     left: 31,
//     right: 31,
//     transform: [{ translateX: 0 }, { translateY: 28 }, { rotate: '0deg' }],
//   },
//   _Rectangle_6: {
//     position: 'absolute',
//     width: 390,
//     height: 844,
//     borderRadius: 0,
//     opacity: 1,
//     left: 0,
//     right: 'auto',
//     top: 0,
//     bottom: 'auto',
//     transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
//     backgroundColor: 'rgba(215, 174, 165, 1)',
//   },
//   _Password_Input: {
//     position: 'absolute',
//     width: 279,
//     height: 63,
//     transform: [{ translateX: 55 }, { translateY: 279 }, { rotate: '0deg' }],
//     overflow: 'hidden',
//     backgroundColor: 'rgba(0,0,0,0)',
//   },
//   _Rectangle_1: {
//     position: 'absolute',
//     width: 279,
//     height: 63,
//     borderRadius: 4,
//     opacity: 1,
//     borderWidth: 1,
//     borderColor: 'rgba(255, 255, 255, 1)',
//     left: 0,
//     right: 'auto',
//     top: 0,
//     bottom: 'auto',
//     transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
//     backgroundColor: 'rgba(196, 196, 196, 1)',
//   },
//   _PASSWORD: {
//     position: 'absolute',
//     width: 192,
//     height: 14,
//     left: 20,
//     right: 'auto',
//     top: 24,
//     bottom: 'auto',
//     transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
//     fontFamily: 'Roboto',
//     fontWeight: 400,
//     textDecorationLine: 'none',
//     fontSize: 12,
//     color: 'rgba(255, 255, 255, 1)',
//     textAlign: 'left',
//     textAlignVertical: 'top',
//     letterSpacing: 0.1,
//   },
//   _Mail_Number_Area: {
//     position: 'absolute',
//     width: 279,
//     height: 63,
//     transform: [{ translateX: 55 }, { translateY: 202 }, { rotate: '0deg' }],
//     overflow: 'hidden',
//     backgroundColor: 'rgba(0,0,0,0)',
//   },
//   _Group_17: {
//     position: 'absolute',
//     width: 279,
//     height: 63,
//     transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
//     overflow: 'hidden',
//     backgroundColor: 'rgba(0,0,0,0)',
//   },
//   _Rectangle_1_2: {
//     position: 'absolute',
//     width: 279,
//     height: 63,
//     borderRadius: 4,
//     opacity: 1,
//     borderWidth: 1,
//     borderColor: 'rgba(255, 255, 255, 1)',
//     left: 0,
//     right: 'auto',
//     top: 0,
//     bottom: 'auto',
//     transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
//     backgroundColor: 'rgba(196, 196, 196, 1)',
//   },
//   _EMAIL_ADRESS_OR_MOB_LE_PHONE: {
//     position: 'absolute',
//     width: 192,
//     height: 14,
//     left: 21,
//     right: 'auto',
//     top: 24,
//     bottom: 'auto',
//     transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
//     fontFamily: 'Roboto',
//     fontWeight: 400,
//     textDecorationLine: 'none',
//     fontSize: 12,
//     color: 'rgba(255, 255, 255, 1)',
//     textAlign: 'left',
//     textAlignVertical: 'top',
//     letterSpacing: 0.1,
//   },
//   _Button_Login: {
//     position: 'absolute',
//     width: 279,
//     height: 63,
//     transform: [{ translateX: 55 }, { translateY: 389 }, { rotate: '0deg' }],
//     overflow: 'hidden',
//     backgroundColor: 'rgba(0,0,0,0)',
//   },
//   _Rectangle_1_3: {
//     position: 'absolute',
//     width: 279,
//     height: 63,
//     borderRadius: 5,
//     opacity: 1,
//     borderWidth: 1,
//     borderColor: 'rgba(5, 5, 5, 1)',
//     left: 0,
//     right: 'auto',
//     top: 0,
//     bottom: 'auto',
//     transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
//     backgroundColor: 'rgba(5, 5, 5, 1)',
//   },
//   _LOG_IN: {
//     position: 'absolute',
//     width: 63,
//     height: 14,
//     left: 108,
//     right: 'auto',
//     top: 24,
//     bottom: 'auto',
//     transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
//     fontFamily: 'Roboto',
//     fontWeight: 700,
//     textDecorationLine: 'none',
//     fontSize: 18,
//     color: 'rgba(255, 247, 247, 1)',
//     textAlign: 'left',
//     textAlignVertical: 'top',
//     letterSpacing: 0.1,
//   },
//   _Title_Area: {
//     position: 'absolute',
//     width: 296,
//     height: 100,
//     transform: [{ translateX: 47 }, { translateY: 70 }, { rotate: '0deg' }],
//     overflow: 'hidden',
//     backgroundColor: 'rgba(0,0,0,0)',
//   },
//   _TOURZ_O: {
//     position: 'absolute',
//     width: 258.02630615234375,
//     height: 58,
//     left: 19.473678588867188,
//     right: 'auto',
//     top: 0,
//     bottom: 'auto',
//     transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
//     fontFamily: 'Allerta Stencil',
//     fontWeight: 400,
//     textDecorationLine: 'none',
//     fontSize: 44,
//     color: 'rgba(250, 245, 245, 1)',
//     textAlign: 'center',
//     textAlignVertical: 'top',
//     letterSpacing: 0.1,
//   },
//   _W_E_S_T_A_Y_F_O_R_Y_O_U: {
//     position: 'absolute',
//     width: 296,
//     height: 32,
//     left: 0,
//     right: 'auto',
//     top: 68,
//     bottom: 'auto',
//     transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
//     fontFamily: 'Allerta Stencil',
//     fontWeight: 400,
//     textDecorationLine: 'none',
//     fontSize: 20,
//     color: 'rgba(255, 247, 247, 1)',
//     textAlign: 'center',
//     textAlignVertical: 'top',
//     letterSpacing: 0.1,
//   },
//   _FORGOT_PASSWORD_: {
//     position: 'absolute',
//     width: 119,
//     height: 19,
//     left: 214,
//     right: 'auto',
//     top: 356,
//     bottom: 'auto',
//     transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
//     fontFamily: 'Roboto',
//     fontWeight: 400,
//     textDecorationLine: 'none',
//     fontSize: 12,
//     color: 'rgba(255, 255, 255, 1)',
//     textAlign: 'right',
//     textAlignVertical: 'top',
//     letterSpacing: 0.1,
//   },
//   _OR: {
//     position: 'absolute',
//     width: 97,
//     height: 52,
//     left: 146,
//     right: 'auto',
//     top: 466,
//     bottom: 'auto',
//     transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
//     fontFamily: 'Alatsi',
//     fontWeight: 400,
//     textDecorationLine: 'none',
//     fontSize: 24,
//     color: 'rgba(255, 255, 255, 1)',
//     textAlign: 'center',
//     textAlignVertical: 'center',
//     letterSpacing: 0.1,
//   },
//   _Login_with: {
//     position: 'absolute',
//     width: 251,
//     height: 52,
//     left: 68,
//     right: 'auto',
//     top: 518,
//     bottom: 'auto',
//     transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
//     fontFamily: 'Alatsi',
//     fontWeight: 400,
//     textDecorationLine: 'none',
//     fontSize: 18,
//     color: 'rgba(255, 255, 255, 1)',
//     textAlign: 'center',
//     textAlignVertical: 'center',
//     letterSpacing: 0.1,
//   },
//   _New_to_Tourzio_: {
//     position: 'absolute',
//     width: 145,
//     height: 28,
//     left: 71,
//     right: 'auto',
//     top: 661,
//     bottom: 'auto',
//     transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
//     fontFamily: 'Alatsi',
//     fontWeight: 400,
//     textDecorationLine: 'none',
//     fontSize: 18,
//     color: 'rgba(255, 254, 254, 1)',
//     textAlign: 'center',
//     textAlignVertical: 'center',
//     letterSpacing: 0.1,
//   },
//   _SignUp: {
//     position: 'absolute',
//     width: 'auto',
//     height: 'auto',
//     left: '50%',
//     top: 661,
//     bottom: 'auto',
//     transform: [{ translateX: 21 }, { translateY: 0 }, { rotate: '0deg' }],
//     fontFamily: 'Alatsi',
//     fontWeight: 400,
//     textDecorationLine: 'none',
//     fontSize: 20,
//     color: 'rgba(255, 255, 255, 1)',
//     textAlign: 'center',
//     textAlignVertical: 'center',
//     letterSpacing: 0.1,
//   },
//   _Group_24: {
//     position: 'absolute',
//     width: 342,
//     height: 30,
//     transform: [{ translateX: 24 }, { translateY: 600 }, { rotate: '0deg' }],
//     overflow: 'hidden',
//     backgroundColor: 'rgba(0,0,0,0)',
//   },
//   _Login_Google: {
//     position: 'absolute',
//     width: 100,
//     height: 30,
//     transform: [{ translateX: 242 }, { translateY: 0 }, { rotate: '0deg' }],
//     overflow: 'hidden',
//     backgroundColor: 'rgba(0,0,0,0)',
//   },
//   _Rectangle_11: {
//     position: 'absolute',
//     width: 100,
//     height: 30,
//     borderRadius: 5,
//     opacity: 1,
//     left: 0,
//     right: 'auto',
//     top: 0,
//     bottom: 'auto',
//     transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
//     backgroundColor: 'rgba(234, 67, 53, 1)',
//   },
//   _Group_22: {
//     position: 'absolute',
//     width: 85,
//     height: 30,
//     transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
//     overflow: 'hidden',
//     backgroundColor: 'rgba(0,0,0,0)',
//   },
//   _Group_10: {
//     position: 'absolute',
//     width: 30,
//     height: 30,
//     transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
//     overflow: 'hidden',
//     backgroundColor: 'rgba(0,0,0,0)',
//   },
//   _Group_11: {
//     position: 'absolute',
//     width: 30,
//     height: 30,
//     transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
//     overflow: 'hidden',
//     backgroundColor: 'rgba(0,0,0,0)',
//   },
//   _Group_9: {
//     position: 'absolute',
//     width: 30,
//     height: 30,
//     transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
//     overflow: 'hidden',
//     backgroundColor: 'rgba(0,0,0,0)',
//   },
//   _Rectangle_10: {
//     position: 'absolute',
//     width: 30,
//     height: 30,
//     borderRadius: 0,
//     opacity: 1,
//     left: 0,
//     right: 'auto',
//     top: 0,
//     bottom: 'auto',
//     transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
//     backgroundColor: 'rgba(196, 196, 196, 1)',
//   },
//   _Vector_2: {
//     position: 'absolute',
//     color: 'rgba(255, 255, 255, 1)',
//     width: 'auto',
//     height: 12.104999542236328,
//     borderRadius: 0,
//     left: 5,
//     right: 5.033000946044922,
//     transform: [{ translateX: 0 }, { translateY: 9 }, { rotate: '0deg' }],
//   },
//   _GOOGLE: {
//     position: 'absolute',
//     width: 52,
//     height: 19,
//     left: 33,
//     right: 'auto',
//     top: 6,
//     bottom: 'auto',
//     transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
//     fontFamily: 'Arial',
//     fontWeight: 400,
//     textDecorationLine: 'none',
//     fontSize: 10,
//     color: 'rgba(255, 250, 250, 1)',
//     textAlign: 'left',
//     textAlignVertical: 'center',
//     letterSpacing: 0.1,
//   },
//   _Login_Twitter: {
//     position: 'absolute',
//     width: 100,
//     height: 30,
//     transform: [{ translateX: 121 }, { translateY: 0 }, { rotate: '0deg' }],
//     overflow: 'hidden',
//     backgroundColor: 'rgba(0,0,0,0)',
//   },
//   _Rectangle_10_2: {
//     position: 'absolute',
//     width: 100,
//     height: 30,
//     borderRadius: 5,
//     opacity: 1,
//     left: 0,
//     right: 'auto',
//     top: 0,
//     bottom: 'auto',
//     transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
//     backgroundColor: 'rgba(29, 161, 242, 1)',
//   },
//   _Group_13: {
//     position: 'absolute',
//     width: 30,
//     height: 30,
//     transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
//     overflow: 'hidden',
//     backgroundColor: 'rgba(0,0,0,0)',
//   },
//   _Rectangle_11_2: {
//     position: 'absolute',
//     width: 30,
//     height: 30,
//     borderRadius: 0,
//     opacity: 1,
//     left: 0,
//     right: 'auto',
//     top: 0,
//     bottom: 'auto',
//     transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
//     backgroundColor: 'rgba(196, 196, 196, 1)',
//   },
//   _Group: {
//     position: 'absolute',
//     width: 22.70599937438965,
//     height: 18.458526611328125,
//     transform: [{ translateX: 4 }, { translateY: 6 }, { rotate: '0deg' }],
//     overflow: 'hidden',
//     backgroundColor: 'rgba(0,0,0,0)',
//   },
//   _Vector_3: {
//     position: 'absolute',
//     color: 'rgba(255, 255, 255, 1)',
//     width: 'auto',
//     height: 18.458526611328125,
//     borderRadius: 0,
//     left: 0,
//     right: 0,
//     transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
//   },
//   _TWITTER: {
//     position: 'absolute',
//     width: 54,
//     height: 19,
//     left: 38,
//     right: 'auto',
//     top: 6,
//     bottom: 'auto',
//     transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
//     fontFamily: 'Arial',
//     fontWeight: 400,
//     textDecorationLine: 'none',
//     fontSize: 10,
//     color: 'rgba(255, 250, 250, 1)',
//     textAlign: 'left',
//     textAlignVertical: 'center',
//     letterSpacing: 0.1,
//   },
//   _Group_21: {
//     position: 'absolute',
//     width: 100,
//     height: 30,
//     transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
//     overflow: 'hidden',
//     backgroundColor: 'rgba(0,0,0,0)',
//   },
//   _Rectangle_9: {
//     position: 'absolute',
//     width: 100,
//     height: 30,
//     borderRadius: 5,
//     opacity: 1,
//     left: 0,
//     right: 'auto',
//     top: 0,
//     bottom: 'auto',
//     transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
//     backgroundColor: 'rgba(59, 89, 152, 1)',
//   },
//   _Group_12: {
//     position: 'absolute',
//     width: 30,
//     height: 30,
//     transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
//     overflow: 'hidden',
//     backgroundColor: 'rgba(0,0,0,0)',
//   },
//   _Group_3: {
//     position: 'absolute',
//     width: 10.395999908447266,
//     height: 19,
//     transform: [{ translateX: 10 }, { translateY: 5 }, { rotate: '0deg' }],
//     overflow: 'hidden',
//     backgroundColor: 'rgba(0,0,0,0)',
//   },
//   _Vector_4: {
//     position: 'absolute',
//     color: 'rgba(251, 248, 248, 1)',
//     width: 'auto',
//     height: 19,
//     borderRadius: 0,
//     left: 0,
//     right: 0,
//     transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
//   },
//   _Rectangle_12: {
//     position: 'absolute',
//     width: 30,
//     height: 30,
//     borderRadius: 0,
//     opacity: 1,
//     left: 0,
//     right: 'auto',
//     top: 0,
//     bottom: 'auto',
//     transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
//     backgroundColor: 'rgba(196, 196, 196, 1)',
//   },
//   _FACEBOOK: {
//     position: 'absolute',
//     width: 68,
//     height: 19,
//     left: 32,
//     right: 'auto',
//     top: 6,
//     bottom: 'auto',
//     transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
//     fontFamily: 'Arial',
//     fontWeight: 400,
//     textDecorationLine: 'none',
//     fontSize: 10,
//     color: 'rgba(255, 250, 250, 1)',
//     textAlign: 'left',
//     textAlignVertical: 'center',
//     letterSpacing: 0.1,
//   },
// });

// const imageUrl_Bg_Image =
//   'https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/28bda19d1ac980a37a077538a3745099';
