import { useState } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, Image, StyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native';

interface HeaderProps {
  handleViewPage: (page: string) => void;
}

interface HeaderStyles {
  header: ViewStyle;
  container: ViewStyle;
  logoContainer: ViewStyle;
  logo: ImageStyle;
  logoTitle: TextStyle;
  menuContainer: ViewStyle;
  menuMessage: TextStyle;
  menuIcon: TextStyle;
  navList: ViewStyle;
  navItem: TextStyle;
}

const Header: React.FC<HeaderProps> = ({ handleViewPage }) => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  const handlePage = (id: string) => {
    setMenu(!menu);

    if (id === 'productsPage') {
      handleViewPage('products');
    } else if (id === 'contactPage') {
      handleViewPage('contact');
    } else if (id === 'logo') {
      handleViewPage('products');
      setMenu(false);
    }
  };

  return (
    <View style={styles.header}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.logoContainer} onPress={() => handlePage('logo')}>
          <Image source={require('../../assets/svg/logo.svg')} style={styles.logo} />
          <Text style={styles.logoTitle}>My Site</Text>
        </TouchableOpacity>
        <View style={styles.menuContainer}>
          <Text style={styles.menuMessage}>Get started</Text>
          <TouchableOpacity onPress={handleMenu}>
            <Text style={styles.menuIcon}>☰</Text>
          </TouchableOpacity>
          {menu && (
            <View style={[styles.navList, { display: 'flex' }]}>
              <TouchableOpacity onPress={() => handlePage('productsPage')}>
                <Text style={styles.navItem}>Products</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handlePage('contactPage')}>
                <Text style={styles.navItem}>Contact</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

Header.propTypes = {
  handleViewPage: PropTypes.func.isRequired, 
};

const styles = StyleSheet.create<HeaderStyles>({
  header: {
    backgroundColor: 'rgb(0, 0, 43)',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  logoContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    cursor: 'pointer',
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  logoTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
  },
  menuContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuMessage: {
    fontSize: 14,
    fontWeight: '400',
    color: '#fff',
    marginRight: 10,
  },
  menuIcon: {
    fontSize: 24,
    color: '#fff',
  },
  navList: {
    backgroundColor: 'rgb(0, 0, 43)',
    borderRadius: 5,
    padding: 10,
    display: 'none',
  },
  navItem: {
    fontSize: 16,
    color: '#fff',
    paddingVertical: 10,
  },
});

export default Header;
