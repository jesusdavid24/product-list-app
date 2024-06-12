import React from 'react';

import { 
  View, 
  Text, 
  Image, 
  StyleSheet, 
  ScrollView, 
  TouchableHighlight 
} from 'react-native';

const Contact = () => {
  return (
    <ScrollView contentContainerStyle={styles.contact}>
    <View style={styles.contactContainer}>
      <View style={styles.contactDescription}>
        <Text style={styles.contactDescriptionTitle}>Jesus Bravo Vergara</Text>
        <View style={styles.contactDescriptionInfo}>
          <Text style={styles.contactDescriptionInfoText}>Full Stack Developer</Text>
          <Text style={styles.contactDescriptionInfoText}>
            Full Stack Web Developer with two years of experience in the following technologies: JavaScript, ES6, React.js, Redux, Vue.js, Node.js, Express.js, TypeScript, MongoDB, Prisma ORM, HTML5, CSS3, Sass, and Bootstrap. I have strong teamwork skills to achieve objectives and organizational growth. I am a natural leader, capable of assuming leadership naturally as it is a quality of my personality. I also have the ability to learn on the go and quickly, as I can grasp ideas easily.I hold a degree in Information Systems Analysis and Design and I am a fourth-semester Software Engineering student with general knowledge in computing. Additionally, I am an eighth-semester Systems Engineering student.
          </Text>
        </View>
      </View>
      <View style={styles.contactBody}>
        <View style={styles.contactImageContainer}>
          <Image source={require('../../assets/img/jesus.png')} style={styles.contactImage} />
          <Text style={styles.contactImageSubtitle}>FULLSTACK DEVELOPER</Text>
          <View style={styles.contactImageInfo}>
            <Text style={styles.contactImageInfoName}>Jesús Bravo</Text>
            <Text style={styles.contactImageInfoEmail}>jdbv2524@gmail.com</Text>
            <TouchableHighlight underlayColor="transparent" onPress={handleGithubLinkPress}>
              <Text style={styles.contactImageInfoGithubLink}>jesusdavid24</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </View>
  </ScrollView>
  );
};

const styles = StyleSheet.create({
  contact: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  contactContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    color: '#00002b',
  },
  contactDescription: {
    width: '80%',
    alignItems: 'center',
    marginTop: 30,
  },
  contactDescriptionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  contactDescriptionInfo: {
    width: 500,
  },
  contactDescriptionInfoText: {
    textAlign: 'center',
    marginBottom: 10,
  },
  contactBody: {
    width: '100%',
    alignItems: 'center',
    marginTop: 50,
  },
  contactImageContainer: {
    width: '22%',
    height: 'auto',
    alignItems: 'center',
  },
  contactImage: {
    width: 240,
    height: 290,
    marginBottom: 10,
    borderRadius: 4,
    shadowColor: '#00002b',
    shadowOffset: {
      width: -4,
      height: 3,
    },
    shadowOpacity: 0.75,
    shadowRadius: 9,
  },
  contactImageSubtitle: {
    fontSize: 10,
    writingDirection: 'rtl',
    transform: [{ rotate: '270deg' }],
    marginBottom: 10,
    fontWeight: 'normal',
  },
  contactImageInfo: {
    width: '80%',
    alignItems: 'center',
  },
  contactImageInfoName: {
    marginTop: 5,
    fontSize: 20,
  },
  contactImageInfoEmail: {
    fontSize: 12,
    fontWeight: '300',
  },
  contactImageInfoGithub: {
    fontSize: 14,
    fontWeight: '400',
  },
  contactImageInfoGithubLink: {
    fontSize: 12,
    fontWeight: '400',
    fontStyle: 'italic',
    color: '#3e3ede',
  },
});

export default Contact;
